// components/SignupForm.tsx
"use client";

import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { toast } from "sonner"; // Import Sonner
import { subscribeToWaitlist } from "@/actions/send-welcome-email";

const initialState = {
  success: false,
  message: "",
  errors: undefined,
  id: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "bg-orbee-violet hover:bg-orbee-violet-dark text-white font-medium",
        "px-6 py-3 rounded-lg transition-colors duration-200",
        "shadow-sm hover:shadow",
        "disabled:opacity-50 disabled:cursor-not-allowed" // Style for disabled state
      )}
    >
      {pending ? "Subscribing..." : "Yes! Tell Me When Orbee Drops!"}
    </button>
  );
}

const SignupForm: React.FC = () => {
  const [state, formAction] = useFormState(subscribeToWaitlist, initialState);
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
    React.useState(false);

  useEffect(() => {
    if (state.message) {
      // Check if there's any message from the action
      if (state.success && !state.alreadySubscribed) {
        // New email sent
        toast.success(state.message);
        setIsSuccessfullySubmitted(true);
      } else if (state.alreadySubscribed) {
        // Explicitly check for alreadySubscribed
        toast.info(state.message); // Use info toast for "already subscribed"
        setIsSuccessfullySubmitted(true); // Treat as "form handled" to show the success UI state
      } else if (!state.success) {
        // Handle other errors
        const errorMessage = state.errors?.email?.[0] || state.message;
        toast.error(errorMessage);
      }
    }
  }, [state]);

  if (isSuccessfullySubmitted) {
    return (
      <div className="text-center p-6 bg-orbee-light-bg-tint rounded-lg border border-orbee-violet/20 my-8 mx-auto">
        <h3 className="text-xl font-medium text-orbee-violet mb-2">
          Awesome, you're on the list!
        </h3>
        <p className="text-orbee-dark-text">
          We've sent a confirmation email to your inbox. Please check it (and
          maybe your spam folder) to complete the process.
        </p>
        <p className="text-sm text-orbee-gray-500 mt-2">
          We'll let you know when Orbee is ready to take your first call.
        </p>
      </div>
    );
  }

  return (
    <div className="my-8 mx-auto">
      {/* Add Sonner Toaster component */}
      <form action={formAction} className="space-y-4">
        <div className="flex flex-col md:items-center md:justify-center sm:flex-row md:w-full gap-3">
          <input
            type="email"
            name="email" // Important: Add name attribute for FormData
            placeholder="Enter your email address"
            required
            className={cn(
              "px-4 py-3 rounded-lg md:w-96 border",
              state.errors?.email
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-orbee-gray-300 focus:border-orbee-violet",
              "focus:outline-none focus:ring-2 focus:ring-orbee-violet",
              "transition-all duration-200 text-orbee-dark-text" // Ensure text color is set
            )}
          />
          <SubmitButton />
        </div>
        {state.errors?.email && (
          <p className="text-sm text-red-500 text-center md:text-left md:pl-[calc((100%-24rem)/2)]">
            {" "}
            {/* Adjust alignment for error message */}
            {state.errors.email[0]}
          </p>
        )}
        {!state.success &&
          state.message &&
          !state.errors?.email && ( // General message not tied to a field
            <p className="text-sm text-red-500 text-center">{state.message}</p>
          )}
        <p className="text-sm text-orbee-gray-500 text-center">
          No fluff, no spam. Just a heads-up when your personal email agent is
          ready for its first assignment.
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
