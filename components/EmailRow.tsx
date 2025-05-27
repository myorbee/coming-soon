import React from "react";
import { cn } from "@/lib/utils";

interface EmailRowProps {
  sender: string;
  subject: string;
  snippet: string;
  timestamp: string;
  isUnread: boolean;
  isOpen: boolean;
  onClick: () => void;
}

const EmailRow: React.FC<EmailRowProps> = ({
  sender,
  subject,
  snippet,
  timestamp,
  isUnread,
  isOpen,
  onClick,
}) => {
  const subjectParts = subject.split(": ");
  const orbeePrefix = subjectParts[0];
  const restOfSubject = subjectParts.slice(1).join(": ");
  const senderInitial = sender.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "border-b border-orbee-gray-200 cursor-pointer transition-colors",
        isOpen ? "bg-orbee-light-bg-tint" : "hover:bg-orbee-gray-100",
        isUnread && !isOpen ? "font-medium" : ""
      )}
      onClick={onClick}
    >
      <div className="flex items-center px-4 py-4 gap-4">
        <div className="flex-shrink-0 w-10 h-10 md:mr-6 rounded-full bg-orbee-violet flex items-center justify-center text-white font-medium text-2xl">
          {senderInitial}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex flex-wrap gap-x-1 items-baseline">
            <span className="font-funnel text-orbee-violet">
              {orbeePrefix}:
            </span>
            <span
              className={cn(
                "truncate",
                isUnread && !isOpen ? "font-medium" : "font-normal"
              )}
            >
              {restOfSubject}
            </span>
          </div>
          <div className="hidden md:block text-orbee-gray-500 truncate mt-1">
            {snippet}
          </div>
        </div>

        <div className="ml-4 text-sm text-orbee-gray-500 whitespace-nowrap">
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default EmailRow;
