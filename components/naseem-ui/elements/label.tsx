import * as React from "react";

import { cn } from "@/lib/utils";

// import { Tooltip } from "./tooltip";

export type LabelProps = {
  hint?: React.ReactNode;
  hintSide?: "top" | "bottom" | "left" | "right";
  htmlFor?: string;
  required?: boolean;
};

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & LabelProps
>(
  (
    {
      children,
      className,
      //  hint, hintSide,
      required,
      ...props
    },
    ref
  ) => (
    <div className="flex flex-row items-center gap-1 transition-all">
      <label
        ref={ref}
        className={cn(
          "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="mx-0.5 text-red-500">*</span>}
      </label>
      {/* {hint && (
      <Tooltip
        content={hint}
        side={hintSide}
        triggerProps={{
          tabIndex: -1,
          onClick: (event) => event.preventDefault(),
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[14px] w-[14px] cursor-help"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </div>
      </Tooltip>
    )} */}
    </div>
  )
);

Label.displayName = "Label";

export { Label };
