// app/actions.ts (or lib/actions.ts, or actions/waitlistActions.ts, etc.)
"use server"; // Important: This marks the file's functions as Server Actions

import { z } from "zod";

// Define a schema for the form data (matching your API route's schema)
const WaitlistSignupSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address. Please enter a valid email." }),
});

// Define a type for the Server Action's return value
interface ActionResult {
  success: boolean;
  message: string;
  errors?: { email?: string[] }; // Optional field for specific email errors
  id?: string; // Optional: ID of the sent message from Resend
}

export async function subscribeToWaitlist(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email");

  const validationResult = WaitlistSignupSchema.safeParse({ email });

  if (!validationResult.success) {
    return {
      success: false,
      message: "Invalid input.",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const validatedEmail = validationResult.data.email;

  try {
    // Construct the absolute URL for your API route
    // In production, NEXT_PUBLIC_APP_URL should be your deployed app's URL
    // In development, it can be http://localhost:3000
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const response = await fetch(`${appUrl}/api/v1/send-welcome`, {
      // Assuming your API route is at /api/send-welcome
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: validatedEmail }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Handle errors from the API route
      console.error("API Error:", responseData);
      return {
        success: false,
        message:
          responseData.message ||
          "An error occurred while subscribing. Please try again.",
        errors: responseData.errors, // Pass along errors if your API provides them
      };
    }

    // Successfully called the API
    return {
      success: true,
      message:
        responseData.message ||
        "Thanks for joining the waitlist! Check your email.",
      id: responseData.id,
    };
  } catch (error) {
    console.error("Network or unexpected error in server action:", error);
    return {
      success: false,
      message: "A network error occurred. Please try again later.",
    };
  }
}
