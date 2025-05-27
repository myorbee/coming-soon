import {
  Body,
  Button, // We might not use a button, but a clear call to reply
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row, // For potential two-column layout if needed
  Column, // For potential two-column layout if needed
} from "@react-email/components";

// Assuming your Vercel URL is set up for images, or replace with absolute URLs
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://orbee.cc"; // Fallback to your main domain

// Orbee Brand Colors (ensure these are in your tailwind.config.js for consistency elsewhere)
const orbeeViolet = "#5522FA";
const orbeeDarkText = "#1C1B1F"; // For main text
const orbeeGreyText = "#5A5866"; // For secondary text

export const OrbeeWaitlistWelcomeEmail = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>🎉 You're on the Orbee waitlist! Just one quick step...</Preview>
      <Container style={container}>
        <Section style={box}>
          {/* Orbee Logo - Replace with your actual logo path */}
          <Img
            src={
              "https://t6b146szy4.ufs.sh/f/42M5ZdiNwSPBgHVvBpFKouLGelR4pYXm9rCqcN1S2DF7ZU65"
            } // Make sure you have this logo
            alt="Orbee Logo"
            style={logo}
          />
          <Hr style={hr} />
          <Text style={heading}>You're In! (Almost) 😉</Text>
          <Text style={paragraph}>Hey there!</Text>
          <Text style={paragraph}>
            Goodness again! So glad to see you're ready to tell your email who's
            boss! Seriously, we're stoked to have you join the waitlist for a
            saner, voice-powered Gmail experience.
          </Text>
          <Text style={paragraph}>
            Just one tiny thing before we officially etch your name onto the
            "Soon-to-Be-Amazed" scroll:
          </Text>
          <Text style={{ ...paragraph, ...bold }}>
            To make sure this email address is real and ready for top-secret
            launch updates (and your eventual waitlist code!), could you do us a
            quick solid?
          </Text>
          <Text style={paragraph}>
            Hit <strong>Reply</strong> to this email and tell us:
          </Text>
          <Section style={callToActionSection}>
            <Text style={questionText}>
              If Orbee could handle ONE annoying email task for you magically,
              right now, what would it be?
            </Text>
            <Text style={smallPrint}>
              (No wrong answers, unless it involves actual magic and a
              disappearing inbox – we're good, but not <em>that</em> good...
              yet! 😉)
            </Text>
          </Section>

          <Text style={paragraph}>
            Once we get your reply, we'll know you're a real human and we'll zap
            over your official waitlist confirmation (and later, your early
            access code when Orbee drops!).
          </Text>
          <Text style={paragraph}>
            Can't wait to hear your biggest email pet peeve! And even more,
            can't wait for you to try Orbee.
          </Text>
          <div></div>
          <Text style={paragraph}>
            Talk soon,
            <br />
            Goodness & The (Currently Small, but Mighty) Orbee Team
            <br />
          </Text>
          <Text style={psText}>
            P.S. Seriously, what's that one email thing? We're taking notes!
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Orbee, Inc | 90 Kanjokya Street, Kampala, Uganda
            <br />
            You're receiving this because you signed up for the Orbee waitlist.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default OrbeeWaitlistWelcomeEmail;

// --- STYLES ---
const main = {
  backgroundColor: "#ffffff", // Changed to white for a cleaner look, or use your light violet tint
  fontFamily:
    '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif', // DM Sans primary
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "100%",
  maxWidth: "600px", // Typical email width
};

const box = {
  padding: "0 24px", // A bit less padding than original for typical email
};

const logo = {
  margin: "0 auto",
  marginTop: "24px",
  marginBottom: "24px",
  width: "auto", // Adjust as needed
  height: "50px", // Maintain aspect ratio
};

const hr = {
  borderColor: "#e0e0e6", // Orbee light grey
  margin: "24px 0",
};

const heading = {
  color: orbeeDarkText,
  fontFamily: '"Funnel Display", Impact, sans-serif', // Funnel Display for heading
  fontSize: "24px",
  fontWeight: "bold" as const,
  textAlign: "center" as const,
  marginBottom: "20px",
};

const paragraph = {
  color: orbeeDarkText,
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "left" as const,
  marginBottom: "16px",
};

const bold = {
  fontWeight: "bold" as const,
};

const callToActionSection = {
  backgroundColor: "#F7F7FC", // Orbee very light violet tint or a light grey
  padding: "20px",
  borderRadius: "8px",
  margin: "24px 0",
  textAlign: "center" as const,
};

const questionText = {
  color: orbeeViolet,
  fontSize: "18px",
  fontWeight: "bold" as const,
  lineHeight: "28px",
  margin: "12px 0",
};

const smallPrint = {
  color: orbeeGreyText,
  fontSize: "14px",
  lineHeight: "22px",
};

const anchor = {
  color: orbeeViolet,
  textDecoration: "underline",
};

const psText = {
  ...paragraph,
  fontSize: "14px",
  color: orbeeGreyText,
  fontStyle: "italic" as const,
};

const footer = {
  color: "#8898aa", // A standard footer grey
  fontSize: "12px",
  lineHeight: "18px",
  textAlign: "center" as const,
  marginTop: "24px",
};
