// import {
//   ClerkProvider /* SignedIn, SignedOut, SignInButton, UserButton */,
// } from "@clerk/nextjs";
// import { ClerkProvider } from "../lib";
// import { ClerkProvider } from "@clerk/nextjs/dist/esm/app-router/server/ClerkProvider.js";
// import { ClientClerkProvider } from "@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js";
import { ClientClerkProvider } from "../lib/ClientClerkProvider.js";

const ClerkProvider = ClientClerkProvider;

// console.log( process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY );

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
