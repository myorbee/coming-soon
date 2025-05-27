"use client";

import { useState } from 'react';
import Link from 'next/link'
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import EmailRow from '@/components/EmailRow';
import EmailContent from '@/components/EmailContent';

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
          <div className="flex border-b border-orbee-gray-200 bg-white">
            <div className="px-6 py-3 border-b-2 border-orbee-violet text-orbee-violet font-medium">
              Primary
            </div>
            <div className="px-6 py-3 text-orbee-gray-500 hover:bg-orbee-gray-100 cursor-pointer">
              Promotions
            </div>
            <div className="px-6 py-3 text-orbee-gray-500 hover:bg-orbee-gray-100 cursor-pointer">
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
              sender="Orbee"
              senderEmail="hello@orbee.app"
              subject="Orbee: Your Inbox Isn't a To-Do List (It's a Conversation Waiting to Happen)"
            />
            
            {/* Empty state for the rest of the inbox */}
            <div className="p-8 text-center text-orbee-gray-500">
              {!isEmailOpen && (
                <p>No more emails. You're all caught up!</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-3 px-6 text-sm text-orbee-gray-500 border-t border-orbee-gray-200 bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            © 2025 Orbee
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-orbee-violet hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orbee-violet hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}