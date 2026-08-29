"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type UsageCardProps = {
  /** Icon component to display */
  icon: React.ElementType;
  /** Title of the usage metric */
  title: string;
  /** Current usage count */
  used: number;
  /** Usage limit — pass a number for a numeric limit, or a string like "Unlimited" for unlimited */
  limit: number | string;
  /** Usage percentage (0–100) */
  percentage: number;
  /** Whether the limit has been reached */
  limitReached?: boolean;
  /** Text to display when the limit is reached */
  limitReachedText?: string;
  /** Additional class name for the card */
  className?: string;
};

export function UsageCard({
  icon: Icon,
  title,
  used,
  limit,
  percentage,
  limitReached = false,
  limitReachedText = "Limit reached",
  className,
}: UsageCardProps) {
  const isUnlimited = typeof limit === "string";
  const isHigh = !isUnlimited && (limitReached || percentage >= 90);
  const isWarning = !isUnlimited && !isHigh && percentage >= 70;

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-shadow hover:shadow-md",
        className
      )}
    >
      <CardContent>
        <div className="flex items-start justify-between  pt-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                isHigh
                  ? "bg-destructive/10 text-destructive"
                  : isWarning
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    : "bg-primary/10 text-primary"
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                {title}
              </p>
              <p className="mt-0.5 text-2xl font-semibold tracking-tight">
                <span className="tabular-nums">{used}</span>
                <span className="text-muted-foreground mx-1 text-lg font-normal">
                  /
                </span>
                <span className="text-muted-foreground text-lg font-normal tabular-nums">
                  {limit}
                </span>
              </p>
            </div>
          </div>
        </div>
        {!isUnlimited && (
          <div className="mt-4">
            <Progress
              value={Math.min(percentage, 100)}
              className={cn(
                "h-2",
                isHigh && "[&>div]:bg-destructive",
                isWarning && "[&>div]:bg-amber-500"
              )}
            />
            {limitReached ? (
              <p className="mt-2 text-xs font-medium text-destructive">
                {limitReachedText}
              </p>
            ) : (
              <p
                className={cn(
                  "mt-2 text-xs font-medium",
                  isHigh
                    ? "text-destructive"
                    : isWarning
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-muted-foreground"
                )}
              >
                {percentage.toFixed(0)}%
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
