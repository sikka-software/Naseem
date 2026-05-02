"use client";

import * as React from "react";

// import { useConfig } from "@/hooks/use-config";
import { Tabs } from "@/components/ui/tabs";
import { useState } from "react";

const useConfig: () => [
  { installationType: "cli" | "manual" },
  (config: { installationType: "cli" | "manual" }) => void,
] = () => {
  const [config, setConfig] = useState<{
    installationType: "cli" | "manual";
  }>({
    installationType: "cli",
  });
  return [config, setConfig];
};

export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig();

  const installationType = React.useMemo(() => {
    return config.installationType || "cli";
  }, [config]);

  return (
    <Tabs
      value={installationType}
      onValueChange={(value) =>
        setConfig({ ...config, installationType: value as "cli" | "manual" })
      }
      className="relative mt-6 w-full"
    >
      {children}
    </Tabs>
  );
}
