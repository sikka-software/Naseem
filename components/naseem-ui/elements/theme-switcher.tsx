"use client";

import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const t = useTranslations();
  const lang = useLocale();
  const { theme, setTheme, themes, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {resolvedTheme === "dark" ? <Moon /> : <Sun />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={lang === "ar" ? "start" : "end"}>
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(e) => setTheme(e)}
        >
          {themes?.map((theme) => (
            <DropdownMenuRadioItem value={theme} key={theme}>
              {t(theme)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
