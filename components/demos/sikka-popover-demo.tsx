"use client";

import SikkaPopover from "@/components/naseem-ui/elements/sikka-popover";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import SikkaLogo from "../naseem-ui/icons/sikka";

const SikkaPopoverDemo = () => {
  return (
    <div className="flex items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            onClick={() => console.log("show sikka popup")}
          >
            <SikkaLogo className="size-3.5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <SikkaPopover />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SikkaPopoverDemo;
