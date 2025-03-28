"use client";

import React, { useRef, useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

type AlertTypes = {
  severity?:
    | "info"
    | "warning"
    | "error"
    | "success"
    | "none"
    | "hyper"
    | "oceanic";
  /** The title of the alert placed above the text of the alert. Can be used alone */
  title?: React.ReactNode;
  /** The text of the alert placed below the title of the alert. Can be used alone */
  text: React.ReactNode;
  /** The duration for the alert to stay on the screen */
  duration?: number;
  direction?: "ltr" | "rtl";
  actions?: [
    {
      label: string;
      onClick: () => void;
      variant:
        | "outline"
        | "link"
        | "default"
        | "destructive"
        | "secondary"
        | "ghost";
    },
  ];
  /** Removes the close button */
  persistent?: boolean;
  icon?: React.ReactNode;
  classNames?: {
    root?: string;
    content?: string;
    title?: string;
    text?: string;
    actions?: string;
    icon?: string;
    closeButton?: string;
  };
  onAlertClosed?: () => void;
  noDestroy?: boolean;
};

export const Alert: React.FunctionComponent<AlertTypes> = ({
  direction = "ltr",
  severity = "none",
  duration,
  icon,
  classNames,
  ...props
}) => {
  const alertRef = useRef<HTMLDivElement>(null);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (duration) {
      //To change opacity and hide the component
      const timeoutHide = setTimeout(() => {
        setClosed(true);
      }, duration);
      //To destroy the component after hiding it
      const timeoutDestroy = setTimeout(() => {
        setClosed(true);
        if (alertRef?.current) {
          alertRef?.current.removeChild(alertRef?.current.children[0]);
        }
      }, duration + 1000);

      return () => {
        clearTimeout(timeoutHide);
        clearTimeout(timeoutDestroy);
      };
    }
  }, [duration]);

  const closeButtonStyle = {
    none: "",
    info: "",
    warning: "",
    error: "",
    success: "",
    hyper: "",
    oceanic: "",
  };
  const styleVariant = {
    none: "bg-background border",
    info: "text-info-foreground bg-info/90",
    warning: "text-warning-foreground bg-warning/90",
    error: "text-destructive-foreground bg-destructive/90",
    success: "text-success-foreground bg-success/90",
    hyper:
      "text-white bg-gradient-to-tl from-pink-700 via-red-500 to-yellow-600 ",
    oceanic:
      "text-white bg-gradient-to-bl from-green-500 via-blue-700 to-purple-500",
  };

  return (
    <div ref={alertRef} className="w-full">
      <div
        data-testid="alert"
        aria-label="Alert"
        role="alert"
        dir={direction}
        className={cn(
          "relative mb-4 flex flex-col rounded p-4 text-sm transition-all",
          styleVariant[severity],
          closed ? "opacity-0" : "opacity-100",
          classNames?.root
        )}
      >
        <div className="flex flex-row">
          {icon && (
            <div
              className={cn(
                direction === "rtl" ? "pt-1 pl-2" : "pt-1 pr-2",
                classNames?.icon
              )}
            >
              {icon}
            </div>
          )}
          <div className={cn("flex flex-col", classNames?.content)}>
            <span
              className={cn(
                "font-bold",
                direction === "rtl" ? "ml-8" : "mr-8",
                classNames?.title
              )}
            >
              {props.title}
            </span>
            <span
              className={cn(
                direction === "rtl" ? "ml-8" : "mr-8",
                props.persistent ? "w-full" : "w-[calc(100% - 40px)]",
                classNames?.text
              )}
            >
              {props.text}
            </span>
            {props.actions && (
              <div
                className={cn("mt-2 flex flex-row gap-2", classNames?.actions)}
              >
                {props.actions.map((act, index) => (
                  <Button
                    key={index}
                    variant={act.variant}
                    onClick={act.onClick}
                  >
                    {act.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
        {!props.persistent && (
          <button
            type="button"
            data-dismiss-target="#alert-default"
            aria-label="Close"
            className={cn(
              "rounded-inner absolute top-2 inline-flex h-9 w-9 items-center justify-center p-1.5 transition-all hover:text-gray-900",
              closeButtonStyle[severity],
              direction === "rtl" ? "left-2" : "right-2",
              classNames?.closeButton
            )}
            onClick={() => {
              if (props.onAlertClosed) {
                props.onAlertClosed();
              }
              if (!props.noDestroy) {
                setClosed(true);
                setTimeout(() => {
                  if (alertRef?.current) {
                    alertRef?.current.removeChild(
                      alertRef?.current.children[0]
                    );
                  }
                }, 200);
              }
            }}
          >
            <span className="sr-only">Close</span>
            <svg
              aria-label="Close Icon"
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
