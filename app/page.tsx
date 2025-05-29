"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import EmailRow from "@/components/EmailRow";
import EmailContent from "@/components/EmailContent";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const handleEmailClick = () => {
    setIsEmailOpen(!isEmailOpen);
  };

  return (
    <main className="flex flex-col h-screen bg-orbee-light-bg-tint">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Email category tabs */}
          <div className="flex border-b border-orbee-gray-200 bg-white justify-between md:justify-normal md:gap-6">
            <div className="px-6 py-3 border-b-2 border-orbee-violet text-orbee-violet font-medium relative">
              Primary
              <span
                className={`absolute top-3 -right-1 ${isEmailOpen ? "bg-orbee-gray-200 text-orbee-gray-500" : "bg-orbee-violet text-white"} text-xs rounded-full w-4 h-4 flex items-center justify-center`}
              >
                {isEmailOpen ? "0" : "1"}
              </span>{" "}
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="px-6 py-3 -ml-3 text-orbee-gray-500/60  cursor-pointer relative">
                    Unread
                    <span
                      className={`absolute top-3 -right-6 bg-orbee-gray-200 text-orbee-gray-500 text-xs rounded-full w-11 h-4 flex items-center justify-center`}
                    >
                      1,723+
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <h2 className="font-bold text-muted-foreground">Oppss...</h2>
                  <p className="text-xs text-muted-foreground/60">
                    All the emails you said you'd get back to later
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="px-6 py-3 mr-5 text-orbee-gray-500/60  cursor-pointer">
              Social
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-white">
            {/* Email row */}
            <EmailRow
              sender="Orbee"
              subject="Orbee: Your Inbox Isn't a To-Do List (It's a Conversation Waiting to Happen)"
              snippet="It's time to take back control. Effortlessly. Stop drowning and discover how Orbee's AI voice assistant..."
              timestamp="Now"
              isUnread={!isEmailOpen}
              isOpen={isEmailOpen}
              onClick={handleEmailClick}
            />

            {/* Email content */}
            <EmailContent
              isOpen={isEmailOpen}
              sender="Goodness"
              senderEmail="ceo@orbee.cc"
              subject="Orbee: Your Inbox Isn't a To-Do List (It's a Conversation Waiting to Happen)"
            />

            {/* Empty state for the rest of the inbox */}
            <div className="p-8 text-center text-orbee-gray-500">
              {!isEmailOpen && (
                <p>No more emails. You&apos;re all caught up!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-3 px-6 text-sm text-orbee-gray-500 border-t border-orbee-gray-200 bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>© 2025 Orbee</div>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-orbee-violet hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-orbee-violet hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
