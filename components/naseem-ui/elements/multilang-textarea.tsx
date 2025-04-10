"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

export type MultiLangValue = {
  [key: string]: string;
};

interface MultilangTextareaProps
  extends Omit<React.ComponentProps<"textarea">, "onChange" | "value"> {
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

const MultilangTextarea = ({
  locales,
  value = {},
  onChange,
  ...props
}: MultilangTextareaProps) => {
  const [selectedLocale, setSelectedLocale] = React.useState(
    locales[0]?.code || ""
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <Textarea
        // className={cn(
        //   "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        //   className
        // )}
        value={value[selectedLocale] || ""}
        onChange={handleInputChange}
        {...props}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="absolute end-1 top-1 h-fit p-1 text-xs"
            style={{ insetInlineEnd: "4px" }}
          >
            {locales.find((locale) => locale.code === selectedLocale)?.name ||
              "Select Language"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={selectedLocale}
            onValueChange={handleLocaleChange}
          >
            {locales.map((locale) => (
              <DropdownMenuRadioItem key={locale.code} value={locale.code}>
                {locale.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
MultilangTextarea.displayName = "MultilangTextarea";

export { MultilangTextarea };
