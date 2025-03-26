"use client";

import { Input } from "@/components/ui/input";
import { SARSymbol } from "@/components/naseem-ui/elements/sar-symbol";
import { useEffect, useState, useRef } from "react";

// Helper function to convert Arabic numerals to English numerals
const convertArabicToEnglishNumerals = (value: string): string => {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return value
    .split("")
    .map((char) => {
      if (char === ".") return char; // Preserve periods
      const index = arabicNumerals.indexOf(char);
      return index !== -1 ? index.toString() : char;
    })
    .join("");
};

interface CurrencyInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {
  value?: number;
  onChange?: (value: number | undefined) => void;
  showCurrencySymbol?: boolean;
}

export function CurrencyInput({
  value,
  onChange,
  showCurrencySymbol = true,
  ...props
}: CurrencyInputProps) {
  const [inputText, setInputText] = useState(value?.toFixed(2) || "");
  const isUserInput = useRef(false);

  // Update input text when value prop changes, but only if it's not from user input
  useEffect(() => {
    if (!isUserInput.current && value !== undefined) {
      setInputText(value.toFixed(2));
    }
    isUserInput.current = false;
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isUserInput.current = true;
    const newValue = e.target.value;

    // Allow empty value
    if (newValue === "") {
      setInputText("");
      onChange?.(undefined);
      return;
    }

    // Split by decimal point to check decimal places
    const parts = newValue.split(".");

    // If we have decimal places, ensure no more than 2
    if (parts.length === 2 && parts[1].length > 2) {
      return;
    }

    // Allow empty or valid number format
    if (!/^[0-9٠-٩]*\.?[0-9٠-٩]*$/.test(newValue)) {
      return;
    }

    // Convert to English numerals for display
    const converted = convertArabicToEnglishNumerals(newValue);
    setInputText(converted);

    const num = converted ? Number(converted) : undefined;
    if (!isNaN(num as number)) {
      onChange?.(num);
    }
  };

  const handleBlur = () => {
    // Format to always show 2 decimal places on blur if we have a value
    if (inputText) {
      const num = Number(inputText);
      if (!isNaN(num)) {
        isUserInput.current = true;
        setInputText(num.toFixed(2));
      }
    }
  };

  return (
    <div className="relative">
      <Input
        type="text"
        inputMode="decimal"
        placeholder="0.00"
        className="currency-input"
        value={inputText}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {showCurrencySymbol && (
        <span className="text-muted-foreground absolute end-2 top-1/2 -translate-y-1/2">
          <SARSymbol className="size-4" />
        </span>
      )}
    </div>
  );
}
