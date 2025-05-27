import { OrbeeWaitlistWelcomeEmail } from "@/emails/welcome-waitlist"; // Ensure correct path
import { resend, resendAudience } from "@/lib/resend";

import { z } from "zod";

// Define a schema for the request body
const WaitlistSignupSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  // Optionally, you could collect firstName and lastName on your form
  // and add them to the schema if you want to store them in Resend Audiences.
  // firstName: z.string().optional(),
  // lastName: z.string().optional(),
});

const FROM_EMAIL = "Goodness from Orbee <hey@mail.orbee.cc>";
const WELCOME_EMAIL_SUBJECT = "🎉 You're on the Orbee Waitlist! (Quick Check)";
const RESEND_AUDIENCE_ID = resendAudience;

export async function POST(request: Request) {
  if (!resend) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { message: "Server configuration error (RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  if (!RESEND_AUDIENCE_ID) {
    console.error(
      "RESEND_AUDIENCE_ID_WAITLIST is not set in environment variables."
    );
    // Decide if this is a critical failure or if email sending can proceed without audience add.
    // For now, let's treat it as a configuration error that prevents proceeding.
    return Response.json(
      { message: "Server configuration error (AUDIENCE_ID)." },
      { status: 500 }
    );
  }

  let requestBody;
  try {
    requestBody = await request.json();
  } catch (e) {
    console.error("Failed to parse JSON body:", e);
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const validationResult = WaitlistSignupSchema.safeParse(requestBody);

  if (!validationResult.success) {
    return Response.json(
      {
        message: "Invalid input.",
        errors: validationResult.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { email /*, firstName, lastName */ } = validationResult.data; // Destructure names if you add them

  try {
    // 1. Send the Welcome Email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: WELCOME_EMAIL_SUBJECT,
      react: OrbeeWaitlistWelcomeEmail(),
    });

    if (emailError) {
      console.error(
        `Resend API Error (sending email) for ${email}:`,
        JSON.stringify(emailError, null, 2)
      );
      return Response.json(
        { message: "Failed to send welcome email." },
        { status: 500 }
      );
    }

    console.log(`Welcome email successfully sent to ${email}:`, emailData?.id);

    // 2. Add contact to Resend Audience (after successful email send)
    try {
      const { data: contactData, error: contactError } =
        await resend.contacts.create({
          email: email,
          // firstName: firstName || undefined, // Pass if collected
          // lastName: lastName || undefined,  // Pass if collected
          unsubscribed: false, // New subscribers are initially subscribed
          audienceId: RESEND_AUDIENCE_ID,
        });

      if (contactError) {
        // Log this error but don't necessarily fail the whole request if the email was sent.
        // This is a business decision: is adding to audience critical for signup success?
        // For a waitlist, probably less critical than sending the welcome email.
        console.error(
          `Resend API Error (adding contact to audience ${RESEND_AUDIENCE_ID}) for ${email}:`,
          JSON.stringify(contactError, null, 2)
        );
        // You might decide to still return a success to the user for the email part,
        // but log this failure for manual follow-up or retry.
      } else {
        console.log(
          `Contact ${email} successfully added to audience ${RESEND_AUDIENCE_ID}:`,
          contactData?.id
        );
      }
    } catch (audienceException) {
      // Catch any unexpected errors during the contacts.create call
      console.error(
        `Unexpected error adding contact ${email} to audience ${RESEND_AUDIENCE_ID}:`,
        audienceException
      );
      // Again, decide on failure strategy.
    }

    return Response.json({
      message:
        "Welcome email sent successfully! You've been added to our waitlist.",
      id: emailData?.id, // ID of the sent email
    });
  } catch (exception) {
    console.error(
      `Unexpected error during waitlist signup for ${email}:`,
      exception
    );
    return Response.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
