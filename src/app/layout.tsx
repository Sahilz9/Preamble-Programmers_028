import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export const metadata = {
  title: "Preamble Resume - Free Open-source Resume Builder and Parser",
  description:
    "Preamble Resume is a free, open-source, and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, OpenResume also provides a resume parser to help test and confirm its ATS readability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <SignedIn>
        <TopNavBar />
        {children}
        <Analytics />
        </SignedIn>
      </body>
    </html>
    </ClerkProvider>
  );
}
