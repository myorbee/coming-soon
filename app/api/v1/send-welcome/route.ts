import { OrbeeWaitlistWelcomeEmail } from "@/emails/welcome-waitlist";
import { resend, resendAudience } from "@/lib/resend"; // Assuming resend is initialized Resend client & resendAudience is AUDIENCE_ID
import { z } from "zod";

const WaitlistSignupSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const FROM_EMAIL = "Goodness from Orbee <hey@mail.orbee.cc>";
const WELCOME_EMAIL_SUBJECT = "🎉 You're on the Orbee Waitlist! (Quick Check)";
const RESEND_AUDIENCE_ID = resendAudience;

export async function POST(request: Request) {
  if (
    !resend ||
    typeof resend.emails?.send !== "function" ||
    typeof resend.contacts?.create !== "function" ||
    typeof resend.contacts?.get !== "function"
  ) {
    console.error(
      "Resend client is not properly initialized or API key is missing."
    );
    return Response.json(
      { message: "Server configuration error (RESEND_CLIENT)." },
      { status: 500 }
    );
  }

  if (!RESEND_AUDIENCE_ID) {
    console.error("RESEND_AUDIENCE_ID is not set.");
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

  const { email } = validationResult.data;

  try {
    // 1. Check if the contact already exists in the audience using their email
    const { data: existingContact, error: getContactError } =
      await resend.contacts.get({
        audienceId: RESEND_AUDIENCE_ID,
        email: email,
      });

    if (existingContact) {
      console.log(
        `Contact ${email} already exists in audience ${RESEND_AUDIENCE_ID}. ID: ${existingContact.id}`
      );
      // Optionally check existingContact.unsubscribed here if you want to allow re-subscribing
      // For a simple waitlist, just informing them is fine.
      return Response.json(
        {
          message:
            "You're already on our waitlist! Keep an eye on your inbox for updates.",
          alreadySubscribed: true,
        },
        { status: 200 }
      ); // 200 OK, as it's not an error, just an existing state
    }

    // If getContactError is present AND it's not a "not found" error, then it's a real issue
    if (getContactError && getContactError.name !== "not_found") {
      // Resend typically returns a specific error name for not_found
      console.error(
        `Resend API Error (getting contact) for ${email} in audience ${RESEND_AUDIENCE_ID}:`,
        JSON.stringify(getContactError, null, 2)
      );
      // Decide if this is critical. For now, we'll assume we can proceed if it's just "not_found".
      // If it's another error type, we might want to stop.
      return Response.json(
        {
          message: "Error checking your subscription status. Please try again.",
        },
        { status: 500 }
      );
    }
    // If getContactError.name === 'not_found', it means the contact doesn't exist, which is what we want, so we proceed.

    // 2. If not already subscribed (or get resulted in 'not_found'), send the Welcome Email
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
        { message: "Failed to send welcome email. Please try again." },
        { status: 500 }
      );
    }

    console.log(`Welcome email successfully sent to ${email}:`, emailData?.id);

    // 3. Add contact to Resend Audience (after successful email send)
    // This create call should now be for a new contact, as we've checked existence.
    // It could still fail due to a race condition, but less likely.
    try {
      const { data: contactData, error: contactError } =
        await resend.contacts.create({
          email: email,
          unsubscribed: false,
          audienceId: RESEND_AUDIENCE_ID,
        });

      if (contactError) {
        console.error(
          `Resend API Error (creating contact in audience ${RESEND_AUDIENCE_ID}) for ${email}:`,
          JSON.stringify(contactError, null, 2)
        );
        // Log this, but the primary action (email send) was successful.
        // Consider what to do if create fails after a 'not_found' from get. Unlikely but possible.
      } else {
        console.log(
          `Contact ${email} successfully added to audience ${RESEND_AUDIENCE_ID}:`,
          contactData?.id
        );
      }
    } catch (audienceException) {
      console.error(
        `Unexpected error adding contact ${email} to audience ${RESEND_AUDIENCE_ID}:`,
        audienceException
      );
    }

    return Response.json({
      message:
        "Welcome email sent! You've been added to our waitlist. Please check your inbox.",
      id: emailData?.id,
    });
  } catch (exception) {
    console.error(
      `Unexpected error during waitlist signup for ${email}:`,
      exception
    );
    return Response.json(
      { message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
