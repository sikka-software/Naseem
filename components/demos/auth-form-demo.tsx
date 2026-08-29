"use client";

import { useState } from "react";
import { AuthForm } from "@/components/naseem-ui/blocks/auth/auth-form";
import { SikkaLogo } from "@/components/naseem-ui/icons/sikka-icon";

const AuthFormDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isPasskeyLoading, setIsPasskeyLoading] = useState(false);

  const simulateLoading = (
    setter: (v: boolean) => void,
    ms = 1500
  ) => {
    setter(true);
    setTimeout(() => setter(false), ms);
  };

  return (
    <AuthForm
      showGoogle
      showPasskey
      isLoading={isLoading}
      isGoogleLoading={isGoogleLoading}
      isPasskeyLoading={isPasskeyLoading}
      logo={<SikkaLogo className="h-10 w-10" />}
      footer={
        <p className="text-muted-foreground text-center text-xs">
          v1.0.0
        </p>
      }
      onSignIn={async () => simulateLoading(setIsLoading)}
      onSignUp={async () => simulateLoading(setIsLoading)}
      onGoogleSignIn={async () => simulateLoading(setIsGoogleLoading)}
      onPasskeySignIn={async () => simulateLoading(setIsPasskeyLoading)}
      onForgotPassword={async () => simulateLoading(setIsLoading)}
    />
  );
};

export default AuthFormDemo;
