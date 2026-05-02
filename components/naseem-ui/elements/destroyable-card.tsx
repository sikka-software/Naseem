"use client";

import React, { FC, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

type DestroyableCard = {
  position?: "bottom-right" | "bottom-left";
  direction?: "rtl" | "ltr";
  fixed?: boolean;
  children?: React.ReactNode;
};
export const DestroyableCard: FC<DestroyableCard> = ({
  position = "bottom-right",
  fixed,
  direction,
  ...props
}) => {
  const [closed, setClosed] = useState(false);
  const popUpRef = useRef<HTMLDivElement>(null);

  const boxPosition = {
    "bottom-right": "right-4 bottom-4",
    "bottom-left": "left-4 bottom-4",
  };

  return (
    <div
      className={cn("transition-all", closed ? "opacity-0" : "opacity-100")}
      ref={popUpRef}
    >
      <Card
        className={cn(
          fixed ? "fixed" : "relative",
          fixed && position && boxPosition[position]
        )}
        dir={direction}
      >
        <button
          type="button"
          className={cn(
            direction === "rtl" ? "left-2" : "right-2",
            "absolute top-2 inline-flex h-8 w-8 rounded p-1.5 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
          )}
          data-dismiss-target="#destroyable-card"
          aria-label="Close"
          onClick={() => {
            setClosed(true);
            setTimeout(() => {
              if (popUpRef?.current) {
                popUpRef?.current.removeChild(popUpRef?.current.children[0]);
              }
            }, 200);
          }}
        >
          <svg
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
        <CardContent>{props.children}</CardContent>
      </Card>
    </div>
  );
};
