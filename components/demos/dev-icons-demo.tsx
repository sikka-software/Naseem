"use client";

import {
  AppStore,
  GitHub,
  GooglePlay,
  Microsoft,
  NPM,
} from "@/components/naseem-ui/icons/dev-icons";

const DevIconsDemo = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <GitHub className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">GitHub</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <AppStore className="h-8 w-8 text-white" />
        <span className="text-muted-foreground text-xs">App Store</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <GooglePlay className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">Google Play</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Microsoft className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">Microsoft Store</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <NPM className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">NPM</span>
      </div>
    </div>
  );
};

export default DevIconsDemo;
