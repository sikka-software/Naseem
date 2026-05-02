import React from "react";

import { Button } from "@/components/ui/button";
import { Loading } from "@/components/naseem-ui/elements/loading";
import { Logos } from "@/components/naseem-ui/elements/logos";

// import { ThirdPartyAuthTextsTypes } from "@_types/index";

type AuthButtonsType = {
  //   texts?: ThirdPartyAuthTextsTypes;
  texts?: {
    continueWithMetamask?: string;
    continueWithNafath?: string;
    continueWithGoogle?: string;
    continueWithGithub?: string;
    continueWithTwitter?: string;
    continueWithApple?: string;
    continueWithMicrosoft?: string;
    continueWithEmail?: string;
    continueWithPhone?: string;
  };

  viaMetamask?: boolean;
  viaNafath?: boolean;
  viaGoogle?: boolean;
  viaTwitter?: boolean;
  viaGithub?: boolean;
  viaMicrosoft?: boolean;
  viaEmail?: boolean;
  viaPhone?: boolean;
  viaApple?: boolean;

  isMetamaskLoading?: boolean;
  isNafathLoading?: boolean;
  isGoogleLoading?: boolean;
  isGithubLoading?: boolean;
  isTwitterLoading?: boolean;
  isMicrosoftLoading?: boolean;
  isEmailLoading?: boolean;
  isPhoneLoading?: boolean;
  isAppleLoading?: boolean;

  handleMetamask?: () => void;
  handleNafath?: () => void;
  handleGoogle?: () => void;
  handleTwitter?: () => void;
  handleApple?: () => void;
  handleMicrosoft?: () => void;
  handleGithub?: () => void;
  handleEmail?: () => void;
  handlePhone?: () => void;
};

export const AuthButtons: React.FC<AuthButtonsType> = (props) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Metamask */}
      {props.viaMetamask && (
        <Button
          disabled={props.isMetamaskLoading}
          className="flex flex-row items-center gap-2"
          variant="outline"
          onClick={props.handleMetamask}
        >
          {props.isMetamaskLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.metamask className="h-6" />
          )}
          {props.texts?.continueWithMetamask ?? "Connect Metamask"}
        </Button>
      )}
      {/* Nafath */}
      {props.viaNafath && (
        <Button
          disabled={props.isNafathLoading}
          className="flex flex-row items-center gap-2"
          variant="outline"
          onClick={props.handleNafath}
        >
          {props.isNafathLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.nafath className="h-4" />
          )}
          {props.texts?.continueWithNafath ?? "Continue With Nafath"}
        </Button>
      )}

      {/* Google */}
      {props.viaGoogle && (
        <Button
          disabled={props.isGoogleLoading}
          className="flex flex-row items-center gap-2"
          variant="outline"
          onClick={props.handleGoogle}
        >
          {props.isGoogleLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.google className="icon" />
          )}
          {props.texts?.continueWithGoogle ?? "Continue With Google"}
        </Button>
      )}

      {/* Github */}
      {props.viaGithub && (
        <Button
          disabled={props.isGithubLoading}
          className="flex flex-row items-center gap-2"
          variant="outline"
          onClick={props.handleGithub}
        >
          {props.isGithubLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.github className="icon" />
          )}
          {props.texts?.continueWithGithub ?? "Continue With Github"}
        </Button>
      )}

      {/* Twitter */}
      {props.viaTwitter && (
        <Button
          disabled={props.isTwitterLoading}
          className="flex flex-row items-center gap-2"
          variant="outline"
          onClick={props.handleTwitter}
        >
          {props.isTwitterLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.twitter className="icon" />
          )}
          {props.texts?.continueWithTwitter ?? "Continue With Twitter"}
        </Button>
      )}

      {/* Apple */}
      {props.viaApple && (
        <Button
          disabled={props.isAppleLoading}
          className="flex flex-row items-center gap-2"
          variant="outline"
          onClick={props.handleApple}
        >
          {props.isAppleLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.apple className="icon" />
          )}

          {props.texts?.continueWithApple ?? "Continue With Apple"}
        </Button>
      )}

      {/* Microsoft */}
      {props.viaMicrosoft && (
        <Button
          disabled={props.isMicrosoftLoading}
          className="flex flex-row items-center gap-2"
          variant="outline"
          onClick={props.handleMicrosoft}
        >
          {props.isMicrosoftLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.microsoft className="icon" />
          )}
          {props.texts?.continueWithMicrosoft ?? "Continue With Microsoft"}
        </Button>
      )}

      {/* Email */}
      {props.viaEmail && (
        <Button
          disabled={props.isEmailLoading}
          className="flex flex-row items-center gap-2"
          variant="outline"
          onClick={props.handleEmail}
        >
          {props.isEmailLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.mail className="icon" />
          )}
          {props.texts?.continueWithEmail ?? "Continue With Email"}
        </Button>
      )}

      {/* Phone */}
      {props.viaPhone && (
        <Button
          disabled={props.isPhoneLoading}
          className="flex flex-row items-center gap-2"
          variant="outline"
          onClick={props.handlePhone}
        >
          {props.isPhoneLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.phone className="icon" />
          )}
          {props.texts?.continueWithPhone ?? "Continue With Phone"}
        </Button>
      )}
    </div>
  );
};
