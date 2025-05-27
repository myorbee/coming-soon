// app/actions.ts
"use server";

import { z } from "zod";

const WaitlistSignupSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address. Please enter a valid email." }),
});

// Updated ActionResult to include alreadySubscribed
interface ActionResult {
  success: boolean; // True if the primary action (like sending email OR identifying as already subscribed) was "handled"
  message: string;
  errors?: { email?: string[] };
  id?: string; // ID of the sent welcome email, if applicable
  alreadySubscribed?: boolean; // New flag
}

export async function subscribeToWaitlist(
  prevState: any, // Can be used for progressive enhancement, not strictly needed here yet
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email");

  const validationResult = WaitlistSignupSchema.safeParse({ email });

  if (!validationResult.success) {
    return {
      success: false,
      message: "Invalid email.", // Keep message simple for this case
      errors: validationResult.error.flatten().fieldErrors,
      alreadySubscribed: false,
    };
  }

  const validatedEmail = validationResult.data.email;

  try {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const response = await fetch(`${appUrl}/api/v1/send-welcome`, {
      // Ensure this path is correct
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: validatedEmail }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      // This means the API call itself failed (5xx, or 4xx not handled as "already subscribed")
      console.error("API Error from /api/send-welcome:", responseData);
      return {
        success: false,
        message: responseData.message || "An error occurred. Please try again.",
        errors: responseData.errors,
        alreadySubscribed: false,
      };
    }

    // If response.ok is true, the API call was successful.
    // Now check the specific content of responseData.
    // Your API route returns status 200 with `alreadySubscribed: true` if they are already on the list.
    if (responseData.alreadySubscribed) {
      return {
        success: true, // The "operation" (checking) was successful in a way
        message: responseData.message, // "You're already on our waitlist!..."
        alreadySubscribed: true,
      };
    }

    // If not already subscribed, and response was ok, it means email was sent.
    return {
      success: true,
      message: responseData.message || "Thanks for joining! Check your email.",
      id: responseData.id, // ID of the sent email
      alreadySubscribed: false,
    };
  } catch (error) {
    console.error("Network or unexpected error in Server Action:", error);
    return {
      success: false,
      message: "A network error occurred. Please try again.",
      alreadySubscribed: false,
    };
  }
}
