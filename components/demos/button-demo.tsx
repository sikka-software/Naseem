"use client";

import { Button } from "@/components/naseem-ui/elements/button";
import { useState } from "react";
import { useEffect } from "react";

export function ButtonSizesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  );
}

export function ButtonDemo2() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);
  return (
    <Button isLoading={isLoading} onClick={() => setIsLoading(true)}>
      Click To Start Loading
    </Button>
  );
}
