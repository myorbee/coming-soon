"use client";

import React from "react";
import { cn } from "@/lib/utils";
import SignupForm from "./SignupForm";
import Link from "next/link";

interface EmailContentProps {
  isOpen: boolean;
  sender: string;
  senderEmail: string;
  subject: string;
}

const EmailContent: React.FC<EmailContentProps> = ({
  isOpen,
  sender,
  senderEmail,
  subject,
}) => {
  const subjectParts = subject.split(": ");
  const orbeePrefix = subjectParts[0];
  const restOfSubject = subjectParts.slice(1).join(": ");

  return (
    <div
      className={cn(
        "email-content overflow-hidden bg-white",
        isOpen ? "expanded" : ""
      )}
    >
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-funnel font-medium mb-3">
            <span className="font-funnel text-orbee-violet">
              {orbeePrefix}:
            </span>{" "}
            {restOfSubject}
          </h1>
          <div className="flex items-center text-sm text-orbee-gray-600">
            <span className="font-medium">{sender}</span>
            <span className="mx-1">&lt;{senderEmail}&gt;</span>
            <span className="mx-1">to me</span>
          </div>
        </div>

        <div className="prose max-w-none text-orbee-dark-text space-y-6">
          <p>Hey there—</p>

          <p>Goodness here, and I&apos;m building Orbee.</p>

          <p className="leading-relaxed">
            Let&apos;s talk about your inbox for a sec. That little number next
            to "Unread" – does it spark joy? Or more like a tiny, persistent
            anxiety attack? If you&apos;re anything like me, juggling multiple
            inboxes and constantly terrified of missing{" "}
            <em>that one critical email</em> (yep, lost a project that way, it
            stings!), then you know.
          </p>

          <p className="leading-relaxed">
            Email <em>should</em> be simple. A tool for connection, for getting
            things done. But somewhere along the line, it morphed into this
            overwhelming beast. An endless stream of demands, automated clutter,
            and threads so long you need a map to navigate them. Your "AI
            assistants" in Gmail or Outlook? Often, they just add to the noise
            with generic, robotic replies that make you sound like anyone but{" "}
            <em>you</em>.
          </p>

          <p className="leading-relaxed">
            It feels like you&apos;re constantly playing defense, doesn&apos;t
            it? Clearing, sorting, forwarding… just to keep your head above
            water.
          </p>

          <p className="font-medium font-funnel text-lg mt-8 mb-6">
            But what if you could just… delegate it? To an assistant that
            actually <em>gets</em> you?
          </p>

          <p className="text-xl font-funnel font-medium text-orbee-violet mb-6">
            That&apos;s Orbee.
          </p>

          <div className="space-y-4">
            <p>
              It&apos;s not another app screen to stare at. It&apos;s{" "}
              <strong>a phone number you call to manage your Gmail.</strong>
            </p>
            <p>
              You tell Orbee your style, your rules, who&apos;s important,
              what&apos;s junk. (You literally help write its brain through a
              simple web setup – it&apos;s easier and way more fun than you
              think).
            </p>
          </div>

          <div className="space-y-2 my-8">
            <p>Then, you just call.</p>
            <p>"Hey Orbee, what&apos;s new?"</p>
            <p>
              And Orbee, in a clear voice, gives you the rundown: smart
              summaries, in <em>your</em> style.
            </p>
            <p>
              "Reply to Sarah: &apos;Got it, sounds good, will look into
              it.&apos;" Done.
            </p>
            <p>
              "Archive everything from &apos;Sales Blast Inc.&apos;" Poof. Gone.
            </p>
            <p>
              "Flag that email from Alex about the fundraiser." Considered
              flagged.
            </p>
          </div>

          <div className="space-y-4 my-8">
            <p>
              This isn&apos;t about making email <em>faster</em> so you can do{" "}
              <em>more email</em>.
            </p>
            <p>
              This is about{" "}
              <strong>
                spending less time <em>in</em> your email, and more time on what
                matters.
              </strong>{" "}
              It&apos;s for those of us managing messy inboxes, who&apos;ve lost
              projects to buried emails, and who just wish for 3 minutes of
              focused, hands-free clarity.
            </p>
          </div>

          <p className="leading-relaxed">
            Competitors are still trying to pretty up the old horseless
            carriage. We&apos;re building for a world where your AI assistant
            adapts to <em>you</em>, not the other way around. A world where you
            teach your tools, and they actually listen.
          </p>

          <p className="font-medium font-funnel text-lg my-8">
            <strong>
              Orbee is the answer to finally getting stuff done, without the
              email headache.
            </strong>{" "}
            It&apos;s for busy professionals, for anyone who&apos;s ever wished
            they had a sharp, personal secretary just for their inbox.
          </p>

          <p className="mt-8 mb-4">
            Sound like something you need? (Spoiler: if you read this far, it
            probably is.)
          </p>

          <p className="text-lg font-medium mb-8 font font-funnel">
            Be one of the first to try Orbee and finally tell your inbox
            who&apos;s boss?
          </p>
        </div>

        <SignupForm />

        <div className="mt-12 text-orbee-gray-600 space-y-2">
          <p>All the best,</p>
          <p className="font-medium">Goodness Lubangakene</p>
          <p>Founder, Orbee</p>
          <p className="text-sm">
            (My therapist said I should talk about my <em>email problems</em>.
            So I built an AI to listen.)
          </p>
          <p className="mt-4">
            <Link href="orbee.cc" className="text-orbee-violet hover:underline">
              https://orbee.cc
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailContent;
