"use client";

import { useState } from "react";
// import { SignIn } from "@clerk/nextjs";

import { triggerBug } from "./trigger-bug";

// import TriggerButton from "./TriggerBug";
function TriggerButton() {
  return (
    <button onClick={() => triggerBug()}>
      OR CLICK THIS TO TRIGGER THE BUG
    </button>
  );
}

// function PlainErrorButton() {
//   const [x, setX] = useState(false);
//   if (x) {
//     throw new Error("x");
//   }
//   return <button onClick={() => setX(true)}>Trigger plain JS error</button>;
// }

export default function SignInPage(): React.JSX.Element {
  return (
    <div>
      <p>TO TRIGGER THE BUG.</p>
      <p>
        Go to .env.development.local, then comment out the{" "}
        <code>NEXT_PUBLIC_CLERK_SIGN_IN_URL</code> variable, or re-enable it to
        cause the hmr to reload
      </p>
      <p>
        <TriggerButton />
      </p>
      <p>{/* <PlainErrorButton /> */}</p>
      {/* <SignIn /> */}
    </div>
  );
}
