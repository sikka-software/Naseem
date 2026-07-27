"use client";

import { XformerlyTwitter, LinkedIn, Instagram, WhatsApp } from "@/components/naseem-ui/icons/social-icons";

const SocialIconsDemo = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <XformerlyTwitter className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">X / Twitter</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LinkedIn className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">LinkedIn</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Instagram className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">Instagram</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <WhatsApp className="h-8 w-8" />
        <span className="text-muted-foreground text-xs">WhatsApp</span>
      </div>
    </div>
  );
};

export default SocialIconsDemo;
