"use client";

import React, { useState, FC, ChangeEvent, InputHTMLAttributes } from "react";

import { calculateLuminance, cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";
import { Label, LabelProps } from "@/components/naseem-ui/elements/label";

type ColorPickerTypes = {
  label?: string;
  id?: string;
  isLoading?: boolean;
  labelProps?: LabelProps;
  /** Boolean to enable/disable editing the input field and using it as a text field   */
  preview?: boolean;
  /** The hex code for the color */
  color?: string;
  /** Fires everytime the color changes */
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  colorPickerClassNames?: string;
  colorTextClassNames?: string;
  colorPickerProps?: InputHTMLAttributes<HTMLInputElement>;
  textInputProps?: InputHTMLAttributes<HTMLInputElement>;
  containerProps?: InputHTMLAttributes<HTMLDivElement>;
};

function ensureHash(value: string | undefined): string {
  if (!value) return "#000000";
  return value.startsWith("#") ? value : `#${value}`;
}

export const ColorPicker: FC<ColorPickerTypes> = ({
  containerProps,
  colorPickerProps,
  textInputProps,
  labelProps,
  isLoading,
  preview = false,
  ...props
}) => {
  const [selectedColor, setSelectedColor] = useState(() =>
    ensureHash(props.color)
  );

  const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputColor = e.target.value;

    if (inputColor[0] !== "#") {
      inputColor = `#${inputColor}`;
    }

    const sanitizedInput = inputColor.replace(/[^a-fA-F0-9#]/g, "");

    setSelectedColor(sanitizedInput);

    if (props.handleChange) {
      props.handleChange(e);
    }
  };

  const handleColorInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
    if (props.handleChange) {
      props.handleChange(e);
    }
  };

  return (
    <div
      className="flex w-fit flex-col gap-2"
      {...containerProps}
    >
      {props.label && <Label {...labelProps}>{props.label}</Label>}
      {isLoading ? (
        <Skeleton style={{ height: 40, width: 148 }} />
      ) : (
        <div dir="ltr" className="flex w-full flex-row">
          <div
            style={{ height: 40, backgroundColor: selectedColor }}
            className="rounded-bl-lg rounded-tl-lg border"
          >
            <input
              disabled={preview}
              type="color"
              value={selectedColor}
              onChange={handleColorInputChange}
              className={cn(
                "mt-0 h-[38px] opacity-0",
                props.colorPickerClassNames
              )}
              {...colorPickerProps}
            />
          </div>
          <div className="relative flex max-h-fit w-full flex-col justify-center gap-0">
            <input
              disabled={preview}
              maxLength={7}
              type="text"
              onChange={handleTextInputChange}
              value={selectedColor}
              className={cn(
                "block h-[40px] w-24 rounded rounded-l-none bg-background p-2 text-sm transition-all",
                "border border-l-0 border-l-transparent placeholder:text-muted-foreground",
                props.colorTextClassNames
              )}
              style={{
                backgroundColor: preview
                  ? selectedColor
                  : "hsl(var(--background))",
                color: preview
                  ? calculateLuminance(selectedColor) > 0.5
                    ? "black"
                    : "white"
                  : undefined,
              }}
              {...textInputProps}
            />
          </div>
        </div>
      )}
    </div>
  );
};
