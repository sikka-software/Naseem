"use client";

import { useRef } from "react";
import { BackToTop } from "../naseem-ui/elements/back-to-top";

const BackToTopDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="h-[300px] w-full overflow-y-auto rounded border border-dashed border-border bg-muted/30 p-4"
      >
        <div className="space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="text-sm text-muted-foreground">
              Scroll down to see the Back to Top button appear... (Item {i + 1})
            </p>
          ))}
        </div>
        <BackToTop anchor={containerRef} corner="bottom-right" />
      </div>
    </div>
  );
};

export default BackToTopDemo;
