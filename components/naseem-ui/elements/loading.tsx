import React, { FC } from "react";

import { cn } from "@/lib/utils";

type LoadingTypes = {
  /** Specifies the size of the loading component.*/
  size?: "button" | "xs" | "sm" | "normal" | "lg" | "xl";
  /** Determines the design of the loading animation.*/
  design?:
    | "spinner"
    | "dots-bounce"
    | "dots-pulse"
    | "pulse"
    | "spinner-dots"
    | "squircle"
    | "square"
    | "progress"
    | "orbit";
  /** Specifies the color of the loading component. By default it will inherit the value of --primary global CSS variable*/
  color?: string;
  classNames?: {
    container?: string;
    track?: string;
    car?: string;
  };
  themeMode?: "dark" | "light";
};

export const Loading: FC<LoadingTypes> = ({
  classNames,
  color,
  design = "spinner",
  size = "normal",
  themeMode = "light",
  //   ...props
}) => {
  const sizeStyles = {
    button: "h-4 w-4",
    lg: "h-14 w-14",
    normal: "h-8 w-8",
    sm: "h-6 w-6",
    xl: "h-24 w-24",
    xs: "h-1 w-1",
  };
  const progressSizes = {
    button: "h-1",
    lg: "h-6",
    normal: "",
    sm: "h-6 w-6",
    xl: "h-10 w-64",
    xs: "h-1 w-1",
  };

  const animationStyles = {
    bounce: "animate-bounce",
    pulse: "animate-in fade-in duration-1000",
  };
  switch (design.split("-")[0]) {
    case "dots":
      return (
        <div className={cn("flex flex-row gap-2", classNames?.container)}>
          <div
            className={cn(
              "repeat-infinite animate-bounce rounded-full delay-100",
              size === "button" ? "h-2 w-2" : sizeStyles[size],
              animationStyles[
                design.split("-")[1] as keyof typeof animationStyles
              ],
              color ? color : "bg-primary"
            )}
          ></div>
          <div
            className={cn(
              "repeat-infinite animate-bounce rounded-full delay-200",
              size === "button" ? "h-2 w-2" : sizeStyles[size],
              animationStyles[
                design.split("-")[1] as keyof typeof animationStyles
              ],
              color ? color : "bg-primary"
            )}
          ></div>
          <div
            className={cn(
              "repeat-infinite animate-bounce rounded-full delay-300",
              size === "button" ? "h-2 w-2" : sizeStyles[size],
              animationStyles[
                design.split("-")[1] as keyof typeof animationStyles
              ],
              color ? color : "bg-primary"
            )}
          ></div>
        </div>
      );
    case "square":
      return (
        <svg
          className={cn(
            "squircle-container",
            sizeStyles[size],
            classNames?.container
          )}
          viewBox="0 0 35 35"
          height="35"
          width="35"
        >
          <rect
            className="squircle-track"
            x="2.5"
            y="2.5"
            fill="none"
            strokeWidth="5px"
            width="32.5"
            height="32.5"
          />
          <rect
            className="square-car"
            x="2.5"
            y="2.5"
            fill="none"
            strokeWidth="5px"
            width="32.5"
            height="32.5"
            pathLength="100"
          />
        </svg>
      );
    case "squircle":
      return (
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 37 37"
          height="37"
          width="37"
          preserveAspectRatio="xMidYMid meet"
          className={cn(
            "squircle-container",
            sizeStyles[size],
            classNames?.container
          )}
        >
          <path
            className={cn("squircle-track", classNames?.track)}
            fill="none"
            strokeWidth="5"
            pathLength="100"
            d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
          ></path>
          <path
            className={cn("squircle-car", classNames?.car)}
            fill="none"
            strokeWidth="5"
            pathLength="100"
            d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
          ></path>
        </svg>
      );
    case "progress":
      return (
        <div
          className={cn(
            "progress-loading rounded after:rounded",
            progressSizes[size],
            classNames?.container
          )}
        ></div>
      );
    case "orbit":
      return (
        <div className={cn("orbit-container", classNames?.container)}></div>
      );

    default:
      return (
        <svg
          viewBox="0 0 40 40"
          height="40"
          width="40"
          className={cn(
            "circle-container",
            sizeStyles[size],
            classNames?.container
          )}
        >
          <circle
            className={cn(
              "circle-track",
              {
                "stroke-primary": themeMode === "light",
                "stroke-primary-foreground": themeMode === "dark",
              },
              classNames?.track
            )}
            cx="20"
            cy="20"
            r="17.5"
            fill="none"
            strokeWidth="5px"
            pathLength="100"
          />
          <circle
            className={cn(
              "circle-car",
              {
                "stroke-primary": themeMode === "light",
                "stroke-primary-foreground": themeMode === "dark",
              },
              classNames?.car
            )}
            cx="20"
            cy="20"
            r="17.5"
            fill="none"
            pathLength="100"
            strokeWidth="5px"
          />
        </svg>
      );
  }
};
