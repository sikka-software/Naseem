import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { HelperText } from "@/components/naseem-ui/elements/helper-text";
import { Label, LabelProps } from "@/components/naseem-ui/elements/label";
import { Loading } from "@/components/naseem-ui/elements/loading";

const buttonVariants = cva(
  "inline-flex items-center select-none rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        light: "bg-primary/20 text-primary hover:bg-primary/40",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        combobox: "bg-background border",
        neoBrutalism: "neo-brutalism",
        // "cursor-pointer transition-all uppercase font-mono  dark:bg-black font-bold py-2 px-4 rounded border-2 border-primary shadow-color-primary transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-color-primary-active shadow-color-primary active:shadow-color-primary-active",
      },
      size: {
        default: "h-10 px-4 py-2",
        heightless: "px-4 py-4",
        xs: "h-fit min-h-[25px] py-1 text-[10px] px-2 ",
        sm: "h-9  text-[11px] rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10",
        icon: "h-10 w-10",
        smallIcon: "h-7 w-7",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  centered?: boolean;
  isLoading?: boolean;
  label?: string;
  labelProps?: LabelProps;
  /** The small red text under the input field to show validation.   */
  helperText?: React.ReactNode;
  showHelperText?: boolean;
  /**
   * If true, the button will include a label and helper text. This is useful for forms where the button is part of the form.
   */
  asInput?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      label,
      variant,
      size,
      // asChild = false,
      centered = true,
      isLoading,
      children,
      labelProps,
      showHelperText = false,
      asInput = false,
      ...props
    },
    ref
  ) => {
    const Comp = "button";

    // Determine the color for the Loading component based on the variant
    const loadingColor =
      variant === "outline" || variant === "ghost" || variant === "neoBrutalism"
        ? "bg-primary"
        : "bg-primary-foreground";

    if (asInput) {
      return (
        <div className="flex flex-col gap-2">
          {label && <Label {...labelProps}>{label}</Label>}
          <Comp
            className={cn(
              buttonVariants({ variant, size, className }),
              centered && "justify-center"
            )}
            ref={ref}
            {...props}
          >
            {isLoading ? (
              <Loading
                design={
                  size === "icon" || size === "smallIcon"
                    ? "spinner"
                    : "dots-pulse"
                }
                themeMode={variant === "outline" ? "light" : "dark"}
                color={loadingColor}
                size={size === "sm" || size === "xs" ? "xs" : "button"}
              />
            ) : (
              children
            )}
          </Comp>
          {showHelperText && <HelperText helperText={props.helperText} />}
        </div>
      );
    } else {
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size, className }),
            centered && "justify-center"
          )}
          ref={ref}
          {...props}
        >
          {isLoading ? (
            <Loading
              design={
                size === "icon" || size === "smallIcon"
                  ? "spinner"
                  : "dots-pulse"
              }
              themeMode={variant === "outline" ? "light" : "dark"}
              color={loadingColor}
              size={size === "sm" || size === "xs" ? "xs" : "button"}
            />
          ) : (
            children
          )}
        </Comp>
      );
    }
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
