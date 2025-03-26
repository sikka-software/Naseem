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
import { Languages } from "lucide-react";


interface InputProps extends React.ComponentProps<"input"> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  texts?: {
    placeholder: string;
    no_country_found: string;
    search_country: string;
  };
  locales: {
    code: string;
    label: string;
  }[];
}

const Input = ({ className, type, locales, ref, ...props }: InputProps) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-0 right-0"
          >
            <Languages />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup>
            {locales.map((locale) => (
              <DropdownMenuRadioItem key={locale.code} value={locale.code}>
                {locale.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
Input.displayName = "Input";

export { Input };
