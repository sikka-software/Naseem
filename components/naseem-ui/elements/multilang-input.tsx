"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

export type MultiLangValue = {
  [key: string]: string;
};

interface MultilangInputProps
  extends Omit<React.ComponentProps<"input">, "onChange" | "value"> {
  onChange: (values: MultiLangValue) => void;
  value?: MultiLangValue;
  texts?: {
    placeholder: string;
    no_country_found: string;
    search_country: string;
  };
  locales: {
    code: string;
    name: string;
    nativeName?: string;
    flagCDN?: string;
    locale?: string;
    isRTL?: false;
  }[];
}

const MultilangInput = ({
  className,
  type,
  locales,
  value = {},
  onChange,
  ...props
}: MultilangInputProps) => {
  const [selectedLocale, setSelectedLocale] = React.useState(
    locales[0]?.code || ""
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = {
      ...value,
      [selectedLocale]: event.target.value,
    };
    onChange(newValues);
  };

  const handleLocaleChange = (locale: string) => {
    setSelectedLocale(locale);
  };

  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        value={value[selectedLocale] || ""}
        onChange={handleInputChange}
        {...props}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="absolute  h-fit p-1 text-xs"
            style={{ insetInlineEnd: "5px", top: "5px" }}
          >
            {locales.find((locale) => locale.code === selectedLocale)?.name ||
              "Select Language"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit min-w-fit" align="center">
          <DropdownMenuRadioGroup
            value={selectedLocale}
            onValueChange={handleLocaleChange}
            className="w-fit"
          >
            {locales.map((locale) => (
              <DropdownMenuRadioItem
                key={locale.code}
                value={locale.code}
                className="!text-xs"
              >
                {locale.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
MultilangInput.displayName = "MultilangInput";

export { MultilangInput };
