"use client";

import {
  AppStore,
  GitHub,
  GooglePlay,
  Tailwind,
} from "@/components/naseem-ui/icons/dev-icons";

const DevIconsDemo = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <GitHub className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">GitHub</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Tailwind className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">Tailwind</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <AppStore className="h-8 w-8 text-white" />
        <span className="text-muted-foreground text-xs">App Store</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <GooglePlay className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">Google Play</span>
      </div>
    </div>
  );
};

export default DevIconsDemo;
