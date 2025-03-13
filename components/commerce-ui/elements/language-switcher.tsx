"use client";

import { Languages } from "lucide-react";
// UI
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useTranslations } from "next-intl";

export function LanguageSwitcher({
  className,
  style,
  onChange,
  local,
  locales,
}: {
  className?: string;
  style?: React.CSSProperties;
  onChange: (value: string) => void;
  local: string;
  locales: { code: string; label: string; isRTL: boolean }[];
}) {
  // const t = useTranslations();

  if (!locales) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          style={style}
          className={className}
        >
          <Languages className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={local} onValueChange={onChange}>
          {locales?.map((locale) => (
            <DropdownMenuRadioItem value={locale.code} key={locale.code}>
              {locale.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
