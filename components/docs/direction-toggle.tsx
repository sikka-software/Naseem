"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DirectionToggleProps {
  onDirectionChange?: (direction: "rtl" | "ltr") => void;
}

export default function DirectionToggle({
  onDirectionChange,
}: DirectionToggleProps) {
  const [direction, setDirection] = useState<"rtl" | "ltr">("ltr");

  const toggleDirection = () => {
    const newDirection = direction === "rtl" ? "ltr" : "rtl";
    setDirection(newDirection);
    onDirectionChange?.(newDirection);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleDirection}
      className="mb-4"
    >
      {direction === "rtl" ? "LTR" : "RTL"}
    </Button>
  );
}
