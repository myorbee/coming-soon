"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup with email:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="my-8 max-w-lg mx-auto">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className={cn(
                "flex-grow px-4 py-3 rounded-lg border border-orbee-gray-300",
                "focus:outline-none focus:ring-2 focus:ring-orbee-violet focus:border-orbee-violet",
                "transition-all duration-200"
              )}
            />
            <button
              type="submit"
              className={cn(
                "bg-orbee-violet hover:bg-orbee-violet-dark text-white font-medium",
                "px-6 py-3 rounded-lg transition-colors duration-200",
                "shadow-sm hover:shadow"
              )}
            >
              Yes! Tell Me When Orbee Drops!
            </button>
          </div>
          <p className="text-sm text-orbee-gray-500 text-center">
            No fluff, no spam. Just a heads-up when your personal email agent is
            ready for its first assignment.
          </p>
        </form>
      ) : (
        <div className="text-center p-6 bg-orbee-light-bg-tint rounded-lg border border-orbee-violet/20">
          <h3 className="text-xl font-medium text-orbee-violet mb-2">
            Thanks for joining us!
          </h3>
          <p>We'll let you know when Orbee is ready to take your first call.</p>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
