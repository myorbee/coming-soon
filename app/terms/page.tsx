import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const lastUpdated = 'May 27, 2025';
  const companyName = 'Orbee';
  const supportEmail = 'support@orbee.app';
  const websiteUrl = 'https://orbee.cc';

  return (
    <main className="flex flex-col min-h-screen bg-white font-dmsans">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link href="/" className="text-orbee-violet hover:underline mb-8 inline-block group">
            <span
              aria-hidden="true"
              className="transition-transform duration-200 ease-in-out group-hover:-translate-x-1"
            >
              ←
            </span>{' '}
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-funnel font-bold text-orbee-dark-text mb-6">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead">
              Welcome to {companyName}! These Terms of Service ("Terms") govern your access to and
              use of the {companyName} AI voice assistant service for Gmail, our website (
              {websiteUrl}), and related services (collectively, the "Service") provided by{' '}
              {companyName} ("we," "us," or "our").
            </p>

            <p>
              Please read these Terms carefully before using our Service. By accessing or using the
              Service, you agree to be bound by these Terms. If you disagree with any part of the
              terms, then you may not access the Service.
            </p>

            {/* Section 1: Accounts */}
            <h2 id="accounts">1. Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate,
              complete, and current at all times. Failure to do so constitutes a breach of the
              Terms, which may result in immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password used to access the Service, and any
              activity under your account or registered phone number. We strongly recommend enabling
              device passcodes and two-factor authentication.
            </p>

            {/* Section 2: Service Description */}
            <h2 id="service-description">2. Service Description</h2>
            <p>
              {companyName} provides an AI-powered voice assistant to interact with Gmail using
              voice commands. This includes summarizing emails, drafting replies, and managing
              messages. You may also customize a System Prompt to personalize AI responses.
            </p>
            <p>
              To use the Service, you must authorize access to Gmail via Google's OAuth 2.0.
              {companyName}'s access adheres to the{' '}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orbee-violet hover:underline"
              >
                Google API Services User Data Policy
              </a>
              , including Limited Use.
            </p>

            {/* Section 3: User Responsibilities */}
            <h2 id="user-responsibilities">3. User Responsibilities and Conduct</h2>
            <p>You agree to use the Service only for lawful purposes. You are solely responsible for:</p>
            <ul>
              <li>Email content and actions performed through the Service.</li>
              <li>Keeping account credentials and registered phone numbers secure.</li>
              <li>Ensuring instructions in System Prompts are lawful and appropriate.</li>
              <li>Compliance with applicable laws, regulations, and third-party terms.</li>
            </ul>
            <p>Do not use the Service to:</p>
            <ul>
              <li>Violate laws or regulations.</li>
              <li>Exploit or harm minors.</li>
              <li>Send spam or promotional material.</li>
              <li>Impersonate others or {companyName} staff.</li>
              <li>Disrupt others' use or cause harm to the Service.</li>
            </ul>

            {/* Section 4: System Prompts */}
            <h2 id="system-prompts">4. Custom System Prompts</h2>
            <p>
              You are responsible for the logic in your custom System Prompt. Prompts must not
              promote illegal or harmful behavior. We may review and disable prompts that violate
              our policies.
            </p>

            {/* Section 5: Fees */}
            <h2 id="fees-payment">5. Fees and Payment (If Applicable)</h2>
            <p>
              If any feature requires payment, you will be informed in advance. All fees are in U.S.
              Dollars unless otherwise noted. We may use third-party processors and may change fees
              with reasonable notice.
            </p>
            <p>
              Subscriptions may renew automatically. You can cancel through your account settings or
              by contacting support.
            </p>

            {/* Section 6: IP */}
            <h2 id="intellectual-property">6. Intellectual Property</h2>
            <p>
              All original content (excluding user emails and prompts) belongs to {companyName} and
              its licensors. You retain rights to your own content. We only access your data to
              provide and improve the Service.
            </p>

            {/* Section 7: Termination */}
            <h2 id="termination">7. Termination</h2>
            <p>
              We may terminate your account for any reason, including violations of these Terms. You
              may terminate at any time via dashboard or by contacting us.
            </p>
            <p>Some sections (e.g., liability and IP) will survive account termination.</p>

            {/* Section 8: Warranty */}
            <h2 id="disclaimer-of-warranties">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES. WE DO NOT GUARANTEE ACCURACY,
              RELIABILITY, OR AVAILABILITY. THIRD-PARTY DEPENDENCIES MAY AFFECT SERVICE QUALITY.
            </p>

            {/* Section 9: Limitation of Liability */}
            <h2 id="limitation-of-liability">9. Limitation of Liability</h2>
            <p>
              {companyName} IS NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL
              DAMAGES, INCLUDING DATA LOSS OR SERVICE INTERRUPTIONS.
            </p>

            {/* Section 10: Indemnification */}
            <h2 id="indemnification">10. Indemnification</h2>
            <p>
              You agree to defend and indemnify {companyName} from any claims arising from your use
              of the Service or violations of these Terms.
            </p>

            {/* Section 11: Governing Law */}
            <h2 id="governing-law">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of California, United States. If any provision is
              invalid, others remain in effect. These Terms are the entire agreement between you and
              {companyName}.
            </p>

            {/* Section 12: Changes */}
            <h2 id="changes-to-terms">12. Changes to Terms</h2>
            <p>
              We may change these Terms. For material changes, we will give at least 30 days'
              notice. Continued use means you accept the changes.
            </p>

            {/* Section 13: Contact */}
            <h2 id="contact-us">13. Contact Us</h2>
            <p>If you have any questions, contact us:</p>
            <ul>
              <li>
                By email:{' '}
                <a
                  href={`mailto:${supportEmail}`}
                  className="text-orbee-violet hover:underline"
                >
                  {supportEmail}
                </a>
              </li>
              <li>
                Website:{' '}
                <Link href="/" className="text-orbee-violet hover:underline">
                  {websiteUrl}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

       <footer className="fixed bottom-0 left-0 right-0 py-3 px-6 text-sm text-orbee-gray-500 border-t border-orbee-gray-200 bg-white shadow-md z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>© {new Date().getFullYear()} {companyName}.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-orbee-violet hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orbee-violet hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
