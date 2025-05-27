import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const lastUpdated = "Tuesday 27 May, 2025"; // Replace with actual date
  const supportEmail = "support@orbee.cc"; // Replace
  const contactPageUrl = "/contact"; // Replace with your actual contact page URL or privacy policy URL

  return (
    <main className="flex flex-col min-h-screen bg-white font-dmsans pb-16">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link href="/" className="text-orbee-violet hover:underline mb-8 inline-block group">
            <span aria-hidden="true" className="transition-transform duration-200 ease-in-out group-hover:-translate-x-1">←</span> Back to Home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-funnel font-bold text-orbee-dark-text mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: {lastUpdated}</p>
          
          <div className="prose prose-lg max-w-none text-gray-700">




            <p className="lead">Welcome to Orbee! This Privacy Policy explains how Orbee ("we," "us," or "our") collects, uses, shares, and protects your personal information when you use our AI voice assistant service for Gmail, our website (orbee.cc or similar), and related services (collectively, the "Service").</p>
            <p>By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
            
            <h2 id="information-we-collect">1. Information We Collect</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            
            <h3>a. Information You Provide Directly:</h3>
            <ul>
              <li><strong>Account Information:</strong> When you register for an Orbee account, we collect information such as your name, email address, password (stored hashed), and the primary phone number(s) you register to call Orbee from.</li>
              <li><strong>Gmail Account Authorization:</strong> To provide the Service, you will grant Orbee permission to access your Gmail account via Google's OAuth 2.0 authorization. We will securely store the necessary authentication tokens to access your Gmail account on your behalf.</li>
              <li><strong>Custom System Prompt Data:</strong> We store the custom System Prompt and any rules or preferences you create to personalize how Orbee handles your email.</li>
              <li><strong>Communications:</strong> If you contact us directly (e.g., for support), we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
            </ul>

            <h3>b. Information Collected Through Your Use of the Service:</h3>
            <ul>
              <li><strong>Gmail Data (Accessed on Your Behalf):</strong> When you use Orbee to interact with your Gmail:
                <ul>
                  <li>We access email headers (sender, recipient, subject, date).</li>
                  <li>We access email content (body text, and potentially attachment metadata if relevant to a feature you use) to provide summaries, draft replies, and apply your custom rules.</li>
                  <li>We execute actions on your emails (archive, delete, flag, send replies) based on your voice commands and System Prompt rules.</li>
                  <li><strong>Important:</strong> Orbee processes your email content to provide its features but does not permanently store the full body of your emails on its servers beyond what is necessary for the immediate processing of a command or a very short-term cache for session continuity. Summaries generated may be temporarily cached. We do not use your email content to train our general AI models, nor do we sell your email content.</li>
                </ul>
              </li>
              <li><strong>Voice & Call Data (Processed by Vapi and OpenAI):</strong>
                <ul>
                  <li>When you call your Orbee phone number, your voice commands are processed. This involves creating audio recordings and transcripts of your interactions. This data is processed by our voice AI partner (Vapi) and the underlying language model provider (OpenAI) to understand your requests and generate responses. Please refer to Vapi's and OpenAI's privacy policies for their data handling practices.</li>
                  <li>We receive transcripts and interaction metadata from Vapi to fulfill your requests and improve our Service.</li>
                </ul>
              </li>
              <li><strong>Call Metadata:</strong> We collect metadata about your calls to Orbee, such as the <code>call.from</code> number (your Caller ID), the Orbee number dialed, call duration, and timestamps.</li>
              <li><strong>Usage Data & Analytics:</strong> We may collect information about how you access and use the Service, including actions taken within the web dashboard, feature usage frequency, and performance data. This helps us understand how our Service is used and identify areas for improvement. This may include IP addresses, browser type, device type, and operating system.</li>
              <li><strong>SMS Notification Data:</strong> If you opt-in for SMS notifications, we will use your registered phone number to send you alerts as configured.</li>
            </ul>

            <h2 id="how-we-use-information">2. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li><strong>To Provide and Maintain Our Service:</strong> To operate the Orbee assistant, process your voice commands, interact with your Gmail account as instructed, and deliver SMS notifications.</li>
              <li><strong>To Personalize Your Experience:</strong> To use your custom System Prompt and preferences to tailor Orbee's behavior and responses.</li>
              <li><strong>To Identify You:</strong> To recognize you when you call your Orbee number using your registered Caller ID.</li>
              <li><strong>To Communicate With You:</strong> To respond to your inquiries, send you service-related announcements (e.g., updates, security alerts, support messages), and inform you about your account.</li>
              <li><strong>To Improve Our Service:</strong> To understand usage patterns, troubleshoot issues, analyze performance, develop new features, and enhance the intelligence and usability of Orbee.</li>
              <li><strong>For Security and Fraud Prevention:</strong> To protect the security of your account and our Service, detect and prevent fraudulent activity, and enforce our terms.</li>
              <li><strong>To Comply with Legal Obligations:</strong> To comply with applicable laws, regulations, legal processes, or governmental requests.</li>
            </ul>

            <h2 id="how-we-share-information">3. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information in the following limited circumstances:</p>
            <ul>
              <li><strong>With Service Providers (Sub-processors):</strong>
                <ul>
                  <li><strong>Vapi (Voice AI Platform):</strong> Your voice audio and transcripts are processed by Vapi to enable the voice interaction.</li>
                  <li><strong>OpenAI (Language Model Provider):</strong> Transcripts and relevant context (including snippets of email content for summarization or reply drafting, and your System Prompt) are sent to OpenAI to generate intelligent responses and actions.</li>
                  <li><strong>Google (Gmail API):</strong> We interact with the Gmail API using your authorization to access and manage your emails as directed by you.</li>
                  <li><strong>Telephony Providers (e.g., Twilio, or as integrated with Vapi):</strong> To manage phone numbers, route calls, and send/receive SMS messages.</li>
                  <li><strong>Cloud Hosting Providers (e.g., AWS, Google Cloud, Azure):</strong> Our backend infrastructure and database are hosted on these platforms.</li>
                  <li><strong>Analytics Providers:</strong> To help us understand Service usage.</li>
                  <li>These service providers are contractually obligated to protect your information and are restricted from using your personal information for any purpose other than to provide services for us.</li>
                </ul>
              </li>
              <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency), to protect our rights or property, prevent wrongdoing in connection with the Service, protect the personal safety of users or the public, or protect against legal liability.</li>
              <li><strong>Business Transfers:</strong> If Orbee is involved in a merger, acquisition, or asset sale, your Personal Information may be transferred. We will provide notice before your Personal Information is transferred and becomes subject to a different Privacy Policy.</li>
              <li><strong>With Your Consent:</strong> We may share your information for other purposes with your explicit consent.</li>
            </ul>

            <h2 id="data-security">4. Data Security</h2>
            <p>We take the security of your data very seriously and implement appropriate technical and organizational measures to protect it from unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul>
              <li>Encryption of sensitive data (like Gmail API tokens) at rest and in transit.</li>
              <li>Secure password hashing.</li>
              <li>Access controls to limit access to personal information to authorized personnel.</li>
              <li>Regular security reviews and updates to our practices.</li>
            </ul>
            <p>However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

            <h2 id="data-retention">5. Data Retention</h2>
            <p>We will retain your Personal Information only for as long as is necessary for the purposes set out in this Privacy Policy, to provide the Service, or as required to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
            <ul>
              <li><strong>Gmail Content:</strong> As stated, we do not permanently store the full body of your emails. Content is processed in real-time or cached temporarily for session continuity.</li>
              <li><strong>Voice Transcripts & Audio:</strong> Our voice AI provider (Vapi) and LLM provider (OpenAI) have their own retention policies. We may retain aggregated or anonymized data derived from interactions for service improvement.</li>
              <li><strong>Account Information & System Prompts:</strong> Retained as long as your account is active or as needed to provide you services.</li>
            </ul>
            <p>You can request deletion of your account and associated data as described in "Your Rights and Choices."</p>

            <h2 id="your-rights-choices">6. Your Rights and Choices</h2>
            <p>Depending on your location and applicable laws, you may have certain rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> You may have the right to request access to the personal information we hold about you.</li>
              <li><strong>Correction/Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete. (You can directly edit your System Prompt and account information on the web dashboard).</li>
              <li><strong>Deletion:</strong> You may have the right to request the deletion of your personal information, subject to certain exceptions.</li>
              <li><strong>Objection to Processing:</strong> You may have the right to object to our processing of your personal information.</li>
              <li><strong>Data Portability:</strong> You may have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p>To exercise these rights, please contact us using the details provided below. You can manage your account information and System Prompt directly through the Orbee web dashboard.</p>

            <h2 id="childrens-privacy">7. Children's Privacy</h2>
            <p>Our Service is not intended for use by children under the age of 13 (or a higher age threshold if stipulated by local laws). We do not knowingly collect personally identifiable information from children under 13. If you become aware that a child has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from children without verification of parental consent, we take steps to remove that information from our servers.</p>

            <h2 id="international-data-transfers">8. International Data Transfers</h2>
            <p>Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Information, to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
            
            <h2 id="changes-to-policy">9. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

            <h2 id="contact-us">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: <a href={`mailto:${supportEmail}`} className="text-orbee-violet hover:underline">{supportEmail}</a></li>
              <li>By visiting this page on our website: <Link href={contactPageUrl} className="text-orbee-violet hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-3 px-6 text-sm text-orbee-gray-500 border-t border-orbee-gray-200 bg-white shadow-md z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
         <div>© {new Date().getFullYear()} Orbee.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-orbee-violet hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orbee-violet hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}