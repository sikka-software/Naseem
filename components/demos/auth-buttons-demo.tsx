"use client";

import { useState } from "react";
import { AuthButtons } from "../naseem-ui/blocks/auth/auth-buttons";

const AuthButtonsDemo = () => {
  const [isAppleLoading, setIsAppleLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isMicrosoftLoading, setIsMicrosoftLoading] = useState(false);
  const [isTwitterLoading, setIsTwitterLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isPhoneLoading, setIsPhoneLoading] = useState(false);
  const [isNafathLoading, setIsNafathLoading] = useState(false);
  const [isMetamaskLoading, setIsMetamaskLoading] = useState(false);

  return (
    <AuthButtons
      viaApple={true}
      viaGoogle={true}
      viaMicrosoft={true}
      viaTwitter={true}
      viaGithub={true}
      viaEmail={true}
      viaPhone={true}
      isAppleLoading={isAppleLoading}
      isGoogleLoading={isGoogleLoading}
      isMicrosoftLoading={isMicrosoftLoading}
      isTwitterLoading={isTwitterLoading}
      isGithubLoading={isGithubLoading}
      isEmailLoading={isEmailLoading}
      isPhoneLoading={isPhoneLoading}
      isNafathLoading={isNafathLoading}
      isMetamaskLoading={isMetamaskLoading}
      handleApple={() => {
        setIsAppleLoading(true);
        setTimeout(() => {
          setIsAppleLoading(false);
        }, 1000);
      }}
      handleGoogle={() => {
        setIsGoogleLoading(true);
        setTimeout(() => {
          setIsGoogleLoading(false);
        }, 1000);
      }}
      handleMicrosoft={() => {
        setIsMicrosoftLoading(true);
        setTimeout(() => {
          setIsMicrosoftLoading(false);
        }, 1000);
      }}
      handleTwitter={() => {
        setIsTwitterLoading(true);
        setTimeout(() => {
          setIsTwitterLoading(false);
        }, 1000);
      }}
      handleGithub={() => {
        setIsGithubLoading(true);
        setTimeout(() => {
          setIsGithubLoading(false);
        }, 1000);
      }}
      handleEmail={() => {
        setIsEmailLoading(true);
        setTimeout(() => {
          setIsEmailLoading(false);
        }, 1000);
      }}
      handlePhone={() => {
        setIsPhoneLoading(true);
        setTimeout(() => {
          setIsPhoneLoading(false);
        }, 1000);
      }}
      handleNafath={() => {
        setIsNafathLoading(true);
        setTimeout(() => {
          setIsNafathLoading(false);
        }, 1000);
      }}
      handleMetamask={() => {
        setIsMetamaskLoading(true);
        setTimeout(() => {
          setIsMetamaskLoading(false);
        }, 1000);
      }}
    />
  );
};

export default AuthButtonsDemo;
