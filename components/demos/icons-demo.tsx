"use client";

import { GitHub } from "@/components/naseem-ui/icons/github";
import { XformerlyTwitter } from "@/components/naseem-ui/icons/x";
import { LinkedIn } from "@/components/naseem-ui/icons/linkedin";
import { Instagram } from "@/components/naseem-ui/icons/instagram";
import { WhatsApp } from "@/components/naseem-ui/icons/whatsapp";
import SikkaLogo from "@/components/naseem-ui/icons/sikka";

const IconsDemo = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Sikka Logo</h3>
        <div className="flex items-center gap-4">
          <SikkaLogo className="h-12 w-12" />
          <SikkaLogo className="h-16 w-16" />
          <SikkaLogo className="h-20 w-20" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Social Media Icons</h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <GitHub className="h-8 w-8" />
            <span className="text-xs text-muted-foreground">GitHub</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <XformerlyTwitter className="h-8 w-8" />
            <span className="text-xs text-muted-foreground">X / Twitter</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LinkedIn className="h-8 w-8" />
            <span className="text-xs text-muted-foreground">LinkedIn</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Instagram className="h-8 w-8" />
            <span className="text-xs text-muted-foreground">Instagram</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <WhatsApp className="h-8 w-8" />
            <span className="text-xs text-muted-foreground">WhatsApp</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Icon Sizes</h3>
        <div className="flex items-center gap-4">
          <GitHub className="h-4 w-4" />
          <GitHub className="h-6 w-6" />
          <GitHub className="h-8 w-8" />
          <GitHub className="h-12 w-12" />
          <GitHub className="h-16 w-16" />
        </div>
      </div>
    </div>
  );
};

export default IconsDemo;
