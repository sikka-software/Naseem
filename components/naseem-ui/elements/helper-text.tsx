import React from "react";

import { cn } from "@/lib/utils";

export const HelperText = ({
  helperText,
}: {
  helperText?: string | React.ReactNode;
}) => (
  <p
    className={cn(
      "my-0 text-start text-helper-color transition-all text-xs",
      helperText ? "opacity-100 h-4" : "h-0 opacity-0"
    )}
  >
    {helperText}
  </p>
);
