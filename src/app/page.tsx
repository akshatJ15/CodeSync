import React from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function page() {
  return (
    <div>
      <SignInButton>
        SignIn
      </SignInButton>
    </div>
  );
}

export default page;
