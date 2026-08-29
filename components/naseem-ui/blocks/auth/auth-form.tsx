"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loading } from "@/components/naseem-ui/elements/loading";
import { Eye, EyeOff, KeyRound, Loader2 } from "lucide-react";

type AuthMode =
  | "sign-in"
  | "sign-up"
  | "forgot-password"
  | "forgot-password-sent";

type AuthFormTexts = {
  signInTitle?: string;
  signUpTitle?: string;
  forgotPasswordTitle?: string;
  checkEmailTitle?: string;
  nameLabel?: string;
  emailLabel?: string;
  passwordLabel?: string;
  confirmPasswordLabel?: string;
  signIn?: string;
  signUp?: string;
  forgotPassword?: string;
  resetPassword?: string;
  backToSignIn?: string;
  continueWithGoogle?: string;
  signInWithPasskey?: string;
  dontHaveAccount?: string;
  alreadyHaveAccount?: string;
  orContinueWith?: string;
  showPassword?: string;
  hidePassword?: string;
  resetEmailSentDescription?: string;
  goBackToSignIn?: string;
};

type AuthFormProps = {
  /** Callback when sign-in form is submitted */
  onSignIn?: (data: {
    email: string;
    password: string;
  }) => void | Promise<void>;
  /** Callback when sign-up form is submitted */
  onSignUp?: (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void | Promise<void>;
  /** Callback when Google sign-in button is clicked */
  onGoogleSignIn?: () => void | Promise<void>;
  /** Callback when passkey sign-in button is clicked */
  onPasskeySignIn?: () => void | Promise<void>;
  /** Callback when forgot password form is submitted */
  onForgotPassword?: (data: { email: string }) => void | Promise<void>;
  /** Whether to show the Google sign-in button */
  showGoogle?: boolean;
  /** Whether to show the passkey sign-in button */
  showPasskey?: boolean;
  /** Whether to show the forgot password link */
  showForgotPassword?: boolean;
  /** Whether the email/password submit is loading */
  isLoading?: boolean;
  /** Whether the Google sign-in is loading */
  isGoogleLoading?: boolean;
  /** Whether the passkey sign-in is loading */
  isPasskeyLoading?: boolean;
  /** Customizable text strings for i18n */
  texts?: AuthFormTexts;
  /** Direction for RTL support */
  dir?: "ltr" | "rtl";
  /** Optional logo element displayed above the card */
  logo?: React.ReactNode;
  /** Optional footer element displayed below the card */
  footer?: React.ReactNode;
  /** Additional class name for the root container */
  className?: string;
  /** Class names for inner elements */
  classNames?: {
    container?: string;
    card?: string;
    logo?: string;
    footer?: string;
  };
};

export type { AuthFormProps, AuthFormTexts, AuthMode };

const defaultTexts: Required<AuthFormTexts> = {
  signInTitle: "Sign in to your account",
  signUpTitle: "Create your account",
  forgotPasswordTitle: "Reset password",
  checkEmailTitle: "Check your email",
  nameLabel: "Name",
  emailLabel: "Email address",
  passwordLabel: "Password",
  confirmPasswordLabel: "Confirm password",
  signIn: "Sign in",
  signUp: "Sign up",
  forgotPassword: "Forgot password?",
  resetPassword: "Reset password",
  backToSignIn: "Back to sign in",
  continueWithGoogle: "Continue with Google",
  signInWithPasskey: "Sign in with passkey",
  dontHaveAccount: "Don't have an account?",
  alreadyHaveAccount: "Already have an account?",
  orContinueWith: "or continue with email",
  showPassword: "Show password",
  hidePassword: "Hide password",
  resetEmailSentDescription:
    "We've sent a password reset link to your email address. Please check your inbox.",
  goBackToSignIn: "Go back to sign in",
};

export function AuthForm({
  onSignIn,
  onSignUp,
  onGoogleSignIn,
  onPasskeySignIn,
  onForgotPassword,
  showGoogle = false,
  showPasskey = false,
  showForgotPassword = true,
  isLoading = false,
  isGoogleLoading = false,
  isPasskeyLoading = false,
  texts: textsProp,
  dir = "ltr",
  logo,
  footer,
  className,
  classNames,
}: AuthFormProps) {
  const texts = { ...defaultTexts, ...textsProp };
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isSignUp = mode === "sign-up";
  const isForgotPassword = mode === "forgot-password";
  const isForgotPasswordSent = mode === "forgot-password-sent";
  const anyLoading = isLoading || isGoogleLoading || isPasskeyLoading;

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSignIn?.({ email, password });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSignUp?.({ name, email, password, confirmPassword });
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    await onForgotPassword?.({ email });
  };

  const switchToSignIn = () => {
    setMode("sign-in");
    resetForm();
  };

  const switchToSignUp = () => {
    setMode("sign-up");
    resetForm();
  };

  const showSocialButtons = showGoogle || showPasskey;

  const renderForgotPasswordSent = () => (
    <Card className={cn("w-full max-w-md", classNames?.card)} dir={dir}>
      <CardHeader>
        <CardTitle className="text-center">{texts.checkEmailTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <svg
                className="h-8 w-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-muted-foreground text-sm">
              {texts.resetEmailSentDescription}
            </p>
          </div>
          <Button onClick={switchToSignIn} className="w-full">
            {texts.goBackToSignIn}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderForgotPassword = () => (
    <Card className={cn("w-full max-w-md", classNames?.card)} dir={dir}>
      <CardHeader>
        <CardTitle className="text-center">
          {texts.forgotPasswordTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleForgotPassword} className="space-y-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fp-email">{texts.emailLabel}</Label>
            <Input
              dir="ltr"
              id="fp-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="me-2 h-4 w-4 animate-spin" />
            ) : (
              texts.resetPassword
            )}
          </Button>
        </form>
        <button
          type="button"
          onClick={switchToSignIn}
          className="text-muted-foreground hover:text-primary mt-4 w-full cursor-pointer text-sm"
        >
          {texts.goBackToSignIn}
        </button>
      </CardContent>
    </Card>
  );

  const renderSocialSection = () => {
    if (!showSocialButtons) return null;
    return (
      <>
        <div className="flex flex-col gap-3">
          {showGoogle && (
            <Button
              type="button"
              variant="outline"
              disabled={anyLoading}
              className="w-full"
              onClick={() => onGoogleSignIn?.()}
            >
              {isGoogleLoading ? (
                <Loading size="button" />
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              )}
              {texts.continueWithGoogle}
            </Button>
          )}
          {showPasskey && (
            <Button
              type="button"
              variant="outline"
              disabled={anyLoading}
              className="w-full"
              onClick={() => onPasskeySignIn?.()}
            >
              {isPasskeyLoading ? (
                <Loader2 className="me-2 h-4 w-4 animate-spin" />
              ) : (
                <KeyRound className="me-2 h-4 w-4" />
              )}
              {texts.signInWithPasskey}
            </Button>
          )}
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card text-muted-foreground px-2">
              {texts.orContinueWith}
            </span>
          </div>
        </div>
      </>
    );
  };

  const renderAuthForm = () => (
    <Card className={cn("w-full max-w-md", classNames?.card)} dir={dir}>
      <CardHeader>
        <CardTitle className="text-center">
          {isSignUp ? texts.signUpTitle : texts.signInTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={isSignUp ? handleSignUp : handleSignIn}
          className="space-y-6"
        >
          {renderSocialSection()}
          {isSignUp && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="auth-name">{texts.nameLabel}</Label>
              <Input
                id="auth-name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Label htmlFor="auth-email">{texts.emailLabel}</Label>
            <Input
              dir="ltr"
              className="rtl:text-right"
              id="auth-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="auth-password">{texts.passwordLabel}</Label>
            <div className="relative">
              <Input
                id="auth-password"
                autoComplete={isSignUp ? "new-password" : "current-password"}
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute inset-e-1.5 top-1/2 size-6 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? texts.hidePassword : texts.showPassword
                }
                aria-pressed={showPassword}
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </Button>
            </div>
            {!isSignUp && showForgotPassword && (
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground w-fit cursor-pointer text-sm"
                onClick={() => setMode("forgot-password")}
              >
                {texts.forgotPassword}
              </button>
            )}
          </div>
          {isSignUp && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="auth-confirm">{texts.confirmPasswordLabel}</Label>
              <div className="relative">
                <Input
                  id="auth-confirm"
                  autoComplete="new-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setConfirmPassword(e.target.value)
                  }
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute inset-e-1 top-0.5"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? texts.hidePassword : texts.showPassword
                  }
                  aria-pressed={showPassword}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          )}
          <Button type="submit" disabled={anyLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="me-2 h-4 w-4 animate-spin" />
            ) : isSignUp ? (
              texts.signUp
            ) : (
              texts.signIn
            )}
          </Button>
        </form>
        <div className="mt-6">
          <button
            type="button"
            onClick={isSignUp ? switchToSignIn : switchToSignUp}
            className="text-muted-foreground hover:text-primary w-full cursor-pointer text-sm"
          >
            {isSignUp
              ? `${texts.alreadyHaveAccount} ${texts.signIn}`
              : `${texts.dontHaveAccount} ${texts.signUp}`}
          </button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div
      className={cn(
        "flex min-h-120 flex-col items-center justify-center gap-4 w-full",
        classNames?.container,
        className
      )}
      dir={dir}
    >
      {logo && <div className={cn("mb-2", classNames?.logo)}>{logo}</div>}
      {isForgotPasswordSent
        ? renderForgotPasswordSent()
        : isForgotPassword
          ? renderForgotPassword()
          : renderAuthForm()}
      {footer && <div className={cn("mt-2", classNames?.footer)}>{footer}</div>}
    </div>
  );
}
