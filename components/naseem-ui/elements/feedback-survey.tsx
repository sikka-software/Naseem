"use client";

import { MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Loader2, Check, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Instagram } from "../icons/instagram";
import { GitHub } from "../icons/github";
import { LinkedIn } from "../icons/linkedin";
import { WhatsApp } from "../icons/whatsapp";
import { XformerlyTwitter } from "../icons/x";

import { usePostHog } from "posthog-js/react";

// Uncomment this to make it dynamic, adjust package.json path accordingly
// import packageJson from "../../package.json";
let packageJson = { version: "1.0.0" };

const QUESTION_ID = "QUESTION_ID";
const SURVEY_ID = "SURVEY_ID";

interface CustomSurveyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function CustomSurvey({ open, onOpenChange }: CustomSurveyProps) {
  const posthog = usePostHog();
  const t = useTranslations();
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const isRTL = locale === "ar";

  const handleFeedbackSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const feedback = (e.target as HTMLFormElement).elements.namedItem(
      "feedback"
    ) as HTMLTextAreaElement;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    posthog?.capture("survey sent", {
      $survey_id: SURVEY_ID,
      $survey_questions: [
        {
          id: QUESTION_ID,
          question: t("feedback-title"),
        },
      ],
      [`$survey_response_${QUESTION_ID}`]: feedback.value,
      version: packageJson.version,
    });

    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setShowSuccess(false);
    } else {
      setShowSuccess(false);
      setIsSubmitting(false);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="flex flex-col sm:max-w-106.25"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {showSuccess ? (
          <div className="flex flex-col items-center justify-center gap-4 pb-0 text-center">
            <div className="bg--400 flex w-full flex-row items-start justify-start gap-2">
              <div className="flex h-10 min-h-10! w-10 min-w-10 items-center justify-center rounded-full border border-green-300 bg-green-100 dark:bg-green-900">
                <Check className="size-5 text-green-600 dark:text-green-400" />
              </div>
              <DialogHeader dir={isRTL ? "rtl" : "ltr"}>
                <DialogTitle>{t("feedback-success")}</DialogTitle>
                <DialogDescription className="text-xs">
                  {t("feedback-success-description")}
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="flex flex-col pt-4">
              <span>{t("in-the-meantime-follow-us")}</span>
              <div className="bg--400 flex w-full flex-row items-center justify-center gap-2 pt-4">
                <a href="http://sikka.io" target="_blank">
                  <Button size={"icon"} variant={"outline"}>
                    <Globe className="size-5! text-black!" />
                  </Button>
                </a>
                <a href="http://github.com/sikka-software" target="_blank">
                  <Button size={"icon"} variant={"outline"}>
                    <GitHub className="size-5! text-black!" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/company/80940262"
                  target="_blank"
                >
                  <Button size={"icon"} variant={"outline"}>
                    <LinkedIn className="size-4! text-black!" />
                  </Button>
                </a>
                <a href="http://wa.me/966531045453" target="_blank">
                  <Button size={"icon"} variant={"outline"}>
                    <WhatsApp className="size-4.25! text-black!" />
                  </Button>
                </a>
                <a href="http://instagram.com/sikka_sa" target="_blank">
                  <Button size={"icon"} variant={"outline"}>
                    <Instagram className="size-6! text-black!" />
                  </Button>
                </a>
                <a href="http://x.com/sikka_sa" target="_blank">
                  <Button size={"icon"} variant={"outline"}>
                    <XformerlyTwitter className="size-4! text-black!" />
                  </Button>
                </a>
              </div>
            </div>
            <Button
              onClick={() => onOpenChange(false)}
              variant="default"
              className="w-full"
            >
              {t("close")}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader dir={isRTL ? "rtl" : "ltr"}>
              <DialogTitle>{t("feedback-title")}</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={handleFeedbackSubmit}
              className="flex flex-col gap-4"
            >
              <textarea
                id="feedbackInput"
                name="feedback"
                placeholder={t("feedback-placeholder")}
                required
                disabled={isSubmitting}
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-30 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                dir={isRTL ? "rtl" : "ltr"}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="default"
                className="w-full"
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {t("submit")}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

const FeedbackToggle = ({ inApp }: { inApp?: boolean }) => {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            aria-label={t("feedback")}
            onClick={() => setSurveyOpen(true)}
          >
            <MessageCircleQuestion className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="px-2 py-1 text-xs"
          side="bottom"
          align="start"
        >
          <p>{t("feedback")}</p>
        </TooltipContent>
      </Tooltip>

      <CustomSurvey open={surveyOpen} onOpenChange={setSurveyOpen} />
    </>
  );
};

export default FeedbackToggle;
