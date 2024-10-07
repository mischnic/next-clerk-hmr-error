"use client";

import { SignIn } from "@clerk/nextjs";

import { triggerBug } from "./trigger-bug";

// import TriggerButton from "./TriggerBug";
function TriggerButton() {
  return (
    <button
      onClick={() => triggerBug()}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    >
      OR CLICK THIS TO TRIGGER THE BUG
    </button>
  );
}

export default function SignInPage(): React.JSX.Element {
  return (
    <div>
      <p>TO TRIGGER THE BUG.</p>
      <p>
        Go to .env.development.local, then comment out the{" "}
        <code>NEXT_PUBLIC_CLERK_SIGN_IN_URL</code> variable, or re-enable it to cause the hmr to
        reload
      </p>
      <p>
        <TriggerButton />
      </p>
      <SignIn />
    </div>
  );
}
