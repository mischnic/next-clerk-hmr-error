import { SignIn } from "@clerk/nextjs";

export default function SignInPage(): React.JSX.Element {
  return (
    <div>
      <p>TO TRIGGER THE BUG.</p>
      <p>
        Go to .env.development.local, then comment out the{" "}
        <code>NEXT_PUBLIC_CLERK_SIGN_IN_URL</code> variable, or re-enable it to cause the hmr to
        reload
      </p>
      <SignIn />
    </div>
  );
}
