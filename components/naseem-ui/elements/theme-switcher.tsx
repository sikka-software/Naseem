"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const t = useTranslations();
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent
          className="px-2 py-1 text-xs"
          side="bottom"
          align="start"
        >
          <p>{t("theme")}</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup
            value={theme}
            onValueChange={(e) => setTheme(e)}
          >
            <DropdownMenuRadioItem value="light">
              {t("light")}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              {t("dark")}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              {t("system")}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
