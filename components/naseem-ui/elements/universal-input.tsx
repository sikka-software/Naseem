"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/* ------------------------------------------------------------------ */
/*  Universal Input — field design system                             */
/*                                                                     */
/*  VOCABULARY (use these names when building fields):                 */
/*   - Root       layout row: outer slots + field, shape/size/fit       */
/*                radius/innerWidth tokens, overridable per slot          */
/*   - Field      bordered container; single-row or expanded            */
/*   - Row        fixed-height input row (auto-wrapped if omitted)      */
/*   - Inner      slot INSIDE the border (leading/trailing),            */
/*                fit "flush" (full-bleed 1:1), "inset" (bare content    */
/*                + breathing room, shadcn-style) or "padded" (filled    */
/*                chip following the field radius: circle when round,    */
/*                square when not).                                      */
/*   - Outer      detached slot OUTSIDE the field; fixed width, height  */
/*                always stretched to match the field                     */
/*                fit "square"/"circle" overrides geometry,               */
/*                width "auto" hugs text (rectangular prefixes)           */
/*                fit "square"/"circle" overrides the root shape         */
/*   - Top/Bottom expansion boxes inside the border (map, toolbar…)     */
/*   - Annotation floating label in a Spot around the field             */
/*   - Above/Below  annotation rows docked to the field column           */
/*   - Label      large field-label text; first child takes the leading  */
/*                corner of its Above/Below row, second the trailing     */
/*   - Spot       named position: above/below × leading/center/trailing */
/*                                                                     */
/*  Sketch model (Image 1):                                            */
/*   - two shapes: "straight" (rectangle) and "pill" (fully rounded)   */
/*   - every slot is polymorphic: button / text / icon / popover or    */
/*     menu trigger / tooltip-only — anything passed as children       */
/* ------------------------------------------------------------------ */

export type UniversalShape = "straight" | "pill";
export type UniversalSize = "sm" | "md" | "lg";
/** how an Inner slot sits inside the field */
export type InnerFit = "flush" | "inset" | "padded";
/** outer geometry: box or circle. Default follows the root shape. */
export type OuterFit = "square" | "circle";
/** slot width: fixed square box (icons) or hug-the-text rectangle (prefixes, codes). */
export type SlotWidth = "square" | "auto";

const fieldHeights: Record<UniversalSize, string> = {
  sm: "h-9",
  md: "h-11",
  lg: "h-14",
};

const outerWidths: Record<UniversalSize, string> = {
  sm: "w-9",
  md: "w-11",
  lg: "w-14",
};

const outerHeights: Record<UniversalSize, string> = {
  sm: "h-9",
  md: "h-11",
  lg: "h-14",
};

const chipSizes: Record<UniversalSize, string> = {
  sm: "size-7",
  md: "size-9",
  lg: "size-12",
};

const chipHeights: Record<UniversalSize, string> = {
  sm: "h-7",
  md: "h-9",
  lg: "h-12",
};

/** row content-box heights in px (h-9/h-11/h-14) — radius ≥ half = fully capped */
export const rowHeightsPx: Record<UniversalSize, number> = {
  sm: 36,
  md: 44,
  lg: 56,
};

/** straight default corner, mirrors rounded-lg */
export const straightRadiusPx = 8;

/**
 * Pill curvature: half the ROW height — never a percentage of the whole
 * field. A single row renders fully capped; an expanded (tall) field
 * keeps pill-like corners instead of going elliptical.
 */
export const pillRadiusPx = (size: UniversalSize): number =>
  rowHeightsPx[size] / 2;

/** gap between the field edge and a padded chip, in px (matches the pl-1/pr-1 seating) */
export const paddedGapPx = 4;

const RootContext = React.createContext<{
  shape: UniversalShape;
  size: UniversalSize;
  innerFit: InnerFit;
  innerWidth: SlotWidth;
  radius: number | undefined;
  fullyRounded: boolean;
  /** true when the field carries Top/Bottom boxes (expanded) */
  fieldExpanded: boolean;
  /** true when the field is in an error state — Field shell goes destructive */
  invalid: boolean;
}>({
  shape: "straight",
  size: "md",
  innerFit: "flush",
  innerWidth: "square",
  radius: undefined,
  fullyRounded: false,
  fieldExpanded: false,
  invalid: false,
});

/* ------------------------------- Root ----------------------------- */

export interface UniversalInputProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: UniversalShape;
  size?: UniversalSize;
  /** default inner-slot fit; overridable per <Inner fit=...> */
  innerFit?: InnerFit;
  /** @deprecated use innerFit */
  innerMode?: InnerFit;
  /** default inner-slot width; overridable per <Inner width=...> */
  innerWidth?: SlotWidth;
  /** explicit corner radius in px — overrides the shape default for field + outers */
  radius?: number;
  /** error state — Field shell goes destructive, native input gets aria-invalid */
  invalid?: boolean;
}

function Root({
  shape = "straight",
  size = "md",
  innerFit,
  innerMode,
  innerWidth = "square",
  radius,
  invalid = false,
  className,
  children,
  ...rest
}: UniversalInputProps) {
  const fullyRounded =
    radius != null ? radius >= rowHeightsPx[size] / 2 : shape === "pill";
  // partition: Above → header row, Below → footer row, everything else →
  // middle row (leading outers · field · trailing outers). Grid columns
  // keep annotation rows docked to the field column — aligned whether
  // outer slots exist or not. No spacer math needed.
  const flat = React.Children.toArray(children);
  const isAbove = (c: React.ReactNode) =>
    React.isValidElement(c) && c.type === Above;
  const isBelow = (c: React.ReactNode) =>
    React.isValidElement(c) && c.type === Below;
  const isField = (c: React.ReactNode) =>
    React.isValidElement(c) && c.type === Field;
  const aboves = flat.filter(isAbove);
  const belows = flat.filter(isBelow);
  const mid = flat.filter((c) => !isAbove(c) && !isBelow(c));
  const fieldIdx = mid.findIndex(isField);
  const leading = fieldIdx === -1 ? [] : mid.slice(0, fieldIdx);
  const center = fieldIdx === -1 ? mid : mid.slice(fieldIdx, fieldIdx + 1);
  const trailing = fieldIdx === -1 ? [] : mid.slice(fieldIdx + 1);
  // expanded = the field carries Top/Bottom boxes. Outers stretch to the
  // field edges on single-row fields, but stay row-height when expanded —
  // never growing with the boxes.
  const fieldKids =
    fieldIdx === -1 || !React.isValidElement(mid[fieldIdx])
      ? []
      : React.Children.toArray(
          (mid[fieldIdx] as React.ReactElement<{ children?: React.ReactNode }>)
            .props.children
        );
  const isBox = (c: React.ReactNode) =>
    React.isValidElement(c) && (c.type === Top || c.type === Bottom);
  const fieldExpanded = fieldKids.some(isBox);

  // expanded fields: dock the outer columns to the input ROW, not the
  // field middle. The row offset (i.e. the Top boxes' total height) is
  // measured live — CSS alone cannot know content-driven box heights.
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [rowPad, setRowPad] = React.useState(0);
  React.useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const measure = () => {
      const field = root.querySelector('[data-slot="universal-input-field"]');
      const row = field?.querySelector(
        ':scope > [data-slot="universal-input-row"]'
      );
      if (!(field instanceof HTMLElement) || !(row instanceof HTMLElement)) {
        setRowPad(0);
        return;
      }
      setRowPad(
        Math.max(
          0,
          Math.round(
            row.getBoundingClientRect().top - field.getBoundingClientRect().top
          )
        )
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    return () => ro.disconnect();
  }, [children]);

  return (
    <RootContext.Provider
      value={{
        shape,
        size,
        innerFit: innerFit ?? innerMode ?? "flush",
        innerWidth,
        radius,
        fullyRounded,
        fieldExpanded,
        invalid,
      }}
    >
      <TooltipProvider delayDuration={250}>
        <div
          ref={rootRef}
          data-slot="universal-input"
          data-shape={shape}
          className={cn(
            "grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-2",
            (aboves.length > 0 || belows.length > 0) && "gap-y-1.5",
            className
          )}
          {...rest}
        >
          {aboves}
          {leading.length > 0 && (
            <div
              data-slot="universal-input-leading"
              className={cn(
                "col-start-1 row-start-2 flex gap-2",
                fieldExpanded
                  ? "items-start self-start"
                  : "items-center self-stretch"
              )}
              style={fieldExpanded ? { paddingTop: rowPad } : undefined}
            >
              {leading}
            </div>
          )}
          <div
            data-slot="universal-input-center"
            className="col-start-2 row-start-2 min-w-0"
          >
            {center}
          </div>
          {trailing.length > 0 && (
            <div
              data-slot="universal-input-trailing"
              className={cn(
                "col-start-3 row-start-2 flex gap-2",
                fieldExpanded
                  ? "items-start self-start"
                  : "items-center self-stretch"
              )}
              style={fieldExpanded ? { paddingTop: rowPad } : undefined}
            >
              {trailing}
            </div>
          )}
          {belows}
        </div>
      </TooltipProvider>
    </RootContext.Provider>
  );
}

/* --------------------------- Above / Below -------------------------- */
/* Annotation rows docked to the field column — always aligned over the */
/* field, whether outer slots exist or not. Fill with Annotations in    */
/* the six Spots (or anything else).                                    */

function Above({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="universal-input-above"
      className={cn(
        "col-start-2 row-start-1 flex items-end justify-between gap-2",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

function Below({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="universal-input-below"
      className={cn(
        "col-start-2 row-start-3 flex items-start justify-between gap-2",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ------------------------- expandable boxes ------------------------- */
/* Top / Bottom boxes stack above/below the input row, inside the field */
/* border, expanding its height. Unpadded and unopinionated on purpose  */
/* — style the content per use case (map, attachments, toolbar…).      */

const FieldBlocksContext = React.createContext<{
  top: boolean;
  bottom: boolean;
}>({
  top: false,
  bottom: false,
});

function Top({
  className,
  children,
  style,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  // own top corners from the radius token — never inherit: inherit breaks
  // the moment anything (a wrapper, an animation) sits between box & field
  const { shape, size, radius } = React.useContext(RootContext);
  const r =
    radius ?? (shape === "pill" ? pillRadiusPx(size) : straightRadiusPx);
  return (
    <div
      data-slot="universal-input-top"
      className={cn("border-b border-input", className)}
      style={{ borderTopLeftRadius: r, borderTopRightRadius: r, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

function Bottom({
  className,
  children,
  style,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  // own bottom corners from the radius token — see Top
  const { shape, size, radius } = React.useContext(RootContext);
  const r =
    radius ?? (shape === "pill" ? pillRadiusPx(size) : straightRadiusPx);
  return (
    <div
      data-slot="universal-input-bottom"
      className={cn("border-t border-input", className)}
      style={{
        borderBottomLeftRadius: r,
        borderBottomRightRadius: r,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/* -------------------------------- Row ----------------------------- */
/* The fixed-height input row. Optional — Field auto-wraps loose Inner */
/* / Input children in one. Use it explicitly to document structure    */
/* or (later) to stack several rows inside an expanded field.          */

function Row({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="universal-input-row"
      className={cn("flex min-w-0 w-full items-center", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ------------------------------- Field ---------------------------- */

type RowElement = React.ReactElement<{ className?: string }>;

function Field({
  className,
  children,
  style,
  invalid: invalidProp,
  "aria-invalid": ariaInvalidProp,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { invalid?: boolean }) {
  const {
    shape,
    size,
    radius,
    invalid: rootInvalid,
  } = React.useContext(RootContext);
  const invalid = invalidProp ?? rootInvalid ?? false;
  // partition: Top boxes → above, Bottom boxes → below,
  // explicit Rows → as-is, loose nodes → auto-wrapped in a Row.
  // Order in JSX doesn't matter; nulls/conditionals are safe.
  const flat = React.Children.toArray(children);
  const isTop = (c: React.ReactNode) =>
    React.isValidElement(c) && c.type === Top;
  const isBottom = (c: React.ReactNode) =>
    React.isValidElement(c) && c.type === Bottom;
  const isRow = (c: React.ReactNode) =>
    React.isValidElement(c) && c.type === Row;
  const tops = flat.filter(isTop);
  const bottoms = flat.filter(isBottom);
  const rest_ = flat.filter((c) => !isTop(c) && !isBottom(c));
  const explicitRows = rest_.filter(isRow).map((r, i) =>
    React.cloneElement(r as RowElement, {
      key: `row-${i}`,
      // rows must fill the shell width — otherwise the input only grows
      // within a shrink-wrapped row and trailing slots strand mid-field
      className: cn(
        "w-full",
        fieldHeights[size],
        (r as RowElement).props.className
      ),
    })
  );
  const loose = rest_.filter((c) => !isRow(c));
  const expanded = tops.length > 0 || bottoms.length > 0;

  const rows = (
    <>
      {explicitRows}
      {loose.length > 0 && (
        <div
          data-slot="universal-input-row"
          className={cn("flex min-w-0 w-full items-center", fieldHeights[size])}
        >
          {loose}
        </div>
      )}
    </>
  );

  const shell = cn(
    // NOTE: intentionally NO overflow-hidden — dropdowns, popovers,
    // menus and any other floating UI anchored inside a slot must
    // never be clipped. Flush cells carry their own corner rounding
    // (see Inner) so the field radius still looks clean.
    "flex min-w-0 flex-1 border bg-background transition-[box-shadow,border-color]",
    invalid
      ? "border-destructive focus-within:border-destructive focus-within:ring-2 focus-within:ring-destructive/20 dark:focus-within:ring-destructive/40"
      : "border-input focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
    // manual escape hatch — setting aria-invalid directly on <Field>
    // gets the same destructive treatment even without the prop
    "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 focus-within:aria-invalid:border-destructive focus-within:aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    className
  );
  // corner radius is a token: explicit px override, else shape default.
  // Pill caps at half the ROW height so expanded fields keep pill-like
  // corners instead of going elliptical.
  const cornerRadius =
    radius ?? (shape === "pill" ? pillRadiusPx(size) : straightRadiusPx);
  const ariaInvalid = (ariaInvalidProp ?? invalid) ? true : undefined;

  // classic single-row field — unchanged behaviour
  if (!expanded) {
    return (
      <div
        data-slot="universal-input-field"
        aria-invalid={ariaInvalid}
        className={cn(shell, "items-center")}
        style={{ borderRadius: cornerRadius, ...style }}
        {...rest}
      >
        {rows}
      </div>
    );
  }

  // expanded field — boxes stack around the input row(s)
  return (
    <div
      data-slot="universal-input-field"
      data-expanded="true"
      aria-invalid={ariaInvalid}
      className={cn(shell, "flex-col")}
      style={{ borderRadius: cornerRadius, ...style }}
      {...rest}
    >
      <FieldBlocksContext.Provider
        value={{ top: tops.length > 0, bottom: bottoms.length > 0 }}
      >
        {tops}
        {rows}
        {bottoms}
      </FieldBlocksContext.Provider>
    </div>
  );
}

/* --------------------------- tooltip helper ----------------------- */

function WithTip({
  label,
  side = "top",
  children,
}: {
  label?: React.ReactNode;
  side?: "top" | "bottom";
  children: React.ReactElement;
}) {
  if (!label) return children;
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        side={side}
        className="bg-foreground text-background z-50 rounded-md px-2 py-1 text-xs font-medium shadow-md"
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

/* ------------------------------- Inner ---------------------------- */
/* Lives INSIDE the field border. flush = full-bleed 1:1 square,      */
/* inset = bare content with a gap around it (never a nested box),     */
/* circle = avatar dot — end-fit cap when fully rounded, padded chip   */
/* at any other radius.                                                */

export interface InnerProps extends React.HTMLAttributes<HTMLElement> {
  position?: "leading" | "trailing";
  /** flush = full-bleed 1:1 cell · inset = bare content + gap · padded = filled chip following the field radius */
  fit?: InnerFit;
  /** @deprecated use fit */
  mode?: InnerFit;
  /** "square" = fixed 1:1 box. "auto" = rectangular, hugs text (codes, units, suffixes). */
  width?: SlotWidth;
  tooltip?: React.ReactNode;
  tooltipSide?: "top" | "bottom";
  onClick?: React.MouseEventHandler<HTMLElement>;
  label?: string;
}

function Inner({
  position = "leading",
  fit,
  mode,
  width,
  tooltip,
  tooltipSide = "top",
  onClick,
  label,
  className,
  style,
  children,
  ...rest
}: InnerProps) {
  const { shape, size, innerFit, innerWidth, radius, fullyRounded } =
    React.useContext(RootContext);
  const { top: blockedTop, bottom: blockedBottom } =
    React.useContext(FieldBlocksContext);
  const resolved = fit ?? mode ?? innerFit;
  const wide = width ?? innerWidth ?? "square";
  const Tag: React.ElementType = onClick ? "button" : "div";
  // corner token shared with the field shell
  const cr = radius ?? (fullyRounded ? pillRadiusPx(size) : straightRadiusPx);

  if (resolved === "flush") {
    return (
      <WithTip label={tooltip} side={tooltipSide}>
        <Tag
          type={onClick ? "button" : undefined}
          onClick={onClick}
          aria-label={label}
          data-slot={`inner-${position}-flush`}
          className={cn(
            "grid h-full shrink-0 place-items-center self-stretch",
            wide === "square" ? "aspect-square" : "w-auto px-3",
            "bg-muted/50 text-muted-foreground transition-colors",
            onClick && "cursor-pointer hover:bg-muted hover:text-foreground",
            position === "leading"
              ? "border-r border-input"
              : "border-l border-input",
            className
          )}
          // own outer corner — the field never clips (see Field note).
          // Corners are skipped where a Top/Bottom box owns that edge.
          style={{
            borderTopLeftRadius: !blockedTop && position === "leading" ? cr : 0,
            borderTopRightRadius:
              !blockedTop && position === "trailing" ? cr : 0,
            borderBottomLeftRadius:
              !blockedBottom && position === "leading" ? cr : 0,
            borderBottomRightRadius:
              !blockedBottom && position === "trailing" ? cr : 0,
            ...style,
          }}
          {...(rest as Record<string, unknown>)}
        >
          <span
            className={cn(
              "grid place-items-center leading-none [&_svg]:size-[1.15em]",
              wide === "square"
                ? "text-[1.05rem]"
                : "text-sm font-medium whitespace-nowrap"
            )}
          >
            {children}
          </span>
        </Tag>
      </WithTip>
    );
  }

  // padded — filled slot (avatar, status, count) with breathing room.
  // Geometry follows the field radius through the concentric-corners
  // equation: chip radius = field radius − padding, so arcs stay
  // parallel (circle when fully rounded, rounded square otherwise).
  // Always padded — never end-fit, never full-bleed. Unlike inset
  // (bare), the fill is the point.
  if (resolved === "padded") {
    return (
      <span
        data-slot={`inner-${position}-padded-wrap`}
        className={cn(
          "flex h-full shrink-0 items-center",
          position === "leading" ? "pl-1" : "pr-1 order-last"
        )}
      >
        <WithTip label={tooltip} side={tooltipSide}>
          <Tag
            type={onClick ? "button" : undefined}
            onClick={onClick}
            aria-label={label}
            data-slot={`inner-${position}-padded`}
            className={cn(
              "grid shrink-0 place-items-center",
              wide === "square" ? "aspect-square" : "w-auto px-3",
              "border border-input bg-muted text-muted-foreground transition-colors",
              onClick &&
                "cursor-pointer hover:bg-accent hover:text-accent-foreground",
              wide === "square" ? chipSizes[size] : chipHeights[size],
              className
            )}
            style={{ borderRadius: Math.max(cr - paddedGapPx, 0), ...style }}
            {...(rest as Record<string, unknown>)}
          >
            <span
              className={cn(
                "grid place-items-center leading-none [&_svg]:size-[1.1em]",
                wide === "square"
                  ? "text-base"
                  : "text-sm font-medium whitespace-nowrap"
              )}
            >
              {children}
            </span>
          </Tag>
        </WithTip>
      </span>
    );
  }

  // inset — reserved square space, content floats bare (shadcn-style:
  // a plain icon/text, not a nested box). Interactive slots get a
  // hover fill for affordance; static ones stay fully transparent.
  // width auto drops the square constraint for text (codes, units).
  return (
    <span
      data-slot={`inner-${position}-inset-wrap`}
      className={cn(
        "flex h-full shrink-0 items-center",
        position === "leading" ? "pl-1" : "pr-1 order-last"
      )}
    >
      <WithTip label={tooltip} side={tooltipSide}>
        <Tag
          type={onClick ? "button" : undefined}
          onClick={onClick}
          aria-label={label}
          data-slot={`inner-${position}-inset`}
          className={cn(
            "grid shrink-0 place-items-center",
            wide === "square" ? "aspect-square" : "w-auto px-2",
            "bg-transparent text-muted-foreground transition-colors",
            onClick && "cursor-pointer hover:bg-muted hover:text-foreground",
            shape === "straight" ? "rounded-md" : "rounded-full",
            wide === "square" ? chipSizes[size] : chipHeights[size],
            className
          )}
          style={style}
          {...(rest as Record<string, unknown>)}
        >
          <span
            className={cn(
              "grid place-items-center leading-none [&_svg]:size-[1.1em]",
              wide === "square"
                ? "text-base"
                : "text-sm font-medium whitespace-nowrap"
            )}
          >
            {children}
          </span>
        </Tag>
      </WithTip>
    </span>
  );
}

/* ------------------------------- Outer ---------------------------- */
/* Detached slot OUTSIDE the field. Fixed width; height stretches to    */
/* the field edges on single-row fields, stays row-height when the      */
/* field carries boxes — outers never grow with Top/Bottom.             */

export interface OuterProps extends React.HTMLAttributes<HTMLElement> {
  tooltip?: React.ReactNode;
  tooltipSide?: "top" | "bottom";
  onClick?: React.MouseEventHandler<HTMLElement>;
  label?: string;
  /** force box or circle geometry, regardless of root shape. Default follows shape. */
  fit?: OuterFit;
  /** "square" = fixed-width box for icons. "auto" = rectangular, hugs text (prefixes like https://). */
  width?: SlotWidth;
}

function Outer({
  tooltip,
  tooltipSide = "top",
  onClick,
  label,
  fit,
  width = "square",
  className,
  style,
  children,
  ...rest
}: OuterProps) {
  const { shape, size, radius, fieldExpanded } = React.useContext(RootContext);
  const geometry = fit ?? (shape === "straight" ? "square" : "circle");
  const Tag: React.ElementType = onClick ? "button" : "div";
  return (
    <WithTip label={tooltip} side={tooltipSide}>
      <Tag
        type={onClick ? "button" : undefined}
        onClick={onClick}
        aria-label={label}
        data-slot="outer"
        className={cn(
          "grid shrink-0 place-items-center border border-input bg-background text-muted-foreground transition-colors",
          onClick && "cursor-pointer hover:bg-muted hover:text-foreground",
          // stretched (single-row): fill the wrapper; expanded: fixed row height
          fieldExpanded ? outerHeights[size] : "h-full",
          outerWidths[size],
          className
        )}
        style={{
          borderRadius:
            geometry === "circle"
              ? pillRadiusPx(size)
              : (radius ?? straightRadiusPx),
          ...style,
        }}
        {...(rest as Record<string, unknown>)}
      >
        <span
          className={cn(
            "grid place-items-center leading-none [&_svg]:size-[1.15em]",
            width === "square"
              ? "text-[1.05rem]"
              : "text-sm font-medium whitespace-nowrap"
          )}
        >
          {children}
        </span>
      </Tag>
    </WithTip>
  );
}

/* ------------------------------- Input ---------------------------- */

export interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FieldInput = React.forwardRef<HTMLInputElement, FieldInputProps>(
  function FieldInput(
    { className, "aria-invalid": ariaInvalidProp, ...rest },
    ref
  ) {
    const { invalid } = React.useContext(RootContext);
    const ariaInvalid = ariaInvalidProp ?? (invalid ? true : undefined);
    return (
      <input
        ref={ref}
        data-slot="universal-input-native"
        aria-invalid={ariaInvalid}
        className={cn(
          "min-w-0 flex-1 self-stretch bg-transparent px-3 text-sm outline-none",
          "placeholder:text-muted-foreground/70",
          className
        )}
        {...rest}
      />
    );
  }
);

/* ------------------------------ Annotation ------------------------ */
/* Floating label living in a Spot above/below the field: text, icon,    */
/* kbd, button — auto-sized. Bare (no children) falls back to the       */
/* dotted sketch marker. Tooltip on hover.                               */
/* Use data-anatomy="…" on parts to target them from spec overlays.      */

export type AnnotationSpot =
  | "above-leading"
  | "above-center"
  | "above-trailing"
  | "below-leading"
  | "below-center"
  | "below-trailing";

export interface AnnotationProps {
  tooltip?: React.ReactNode;
  side?: "top" | "bottom";
  onClick?: React.MouseEventHandler<HTMLElement>;
  label?: string;
  /**
   * "plain" (default) — clean shadcn-style label text, no chrome:
   * text-xs muted, just sitting in its spot around the field.
   * "pill" — opt-in dashed ring around the content.
   * No children at all — the dotted sketch marker.
   */
  variant?: "pill" | "plain";
  className?: string;
  children?: React.ReactNode;
}

function Annotation({
  tooltip,
  side = "top",
  onClick,
  label,
  variant = "plain",
  className,
  children,
}: AnnotationProps) {
  const Tag: React.ElementType = onClick ? "button" : "span";
  // bare dot — backwards compatible with the original sketch markers
  if (children == null) {
    return (
      <WithTip label={tooltip} side={side}>
        <Tag
          type={onClick ? "button" : undefined}
          onClick={onClick}
          aria-label={label}
          data-slot="annotation"
          className={cn(
            "inline-block size-3 rounded-full border-2 border-dotted border-muted-foreground/60",
            onClick &&
              "cursor-pointer hover:border-solid hover:border-foreground",
            className
          )}
        />
      </WithTip>
    );
  }
  // plain label — shadcn-style muted text, no chrome
  if (variant === "plain") {
    return (
      <WithTip label={tooltip} side={side}>
        <Tag
          type={onClick ? "button" : undefined}
          onClick={onClick}
          aria-label={label}
          data-slot="annotation"
          className={cn(
            "inline-flex max-w-full items-center gap-1 whitespace-nowrap",
            "text-xs text-muted-foreground",
            "[&_svg]:size-3.5 [&_kbd]:rounded [&_kbd]:border [&_kbd]:border-input",
            "[&_kbd]:bg-muted [&_kbd]:px-1 [&_kbd]:font-mono [&_kbd]:text-[10px] [&_kbd]:text-muted-foreground",
            onClick && "cursor-pointer transition-colors hover:text-foreground",
            className
          )}
        >
          {children}
        </Tag>
      </WithTip>
    );
  }
  return (
    <WithTip label={tooltip} side={side}>
      <Tag
        type={onClick ? "button" : undefined}
        onClick={onClick}
        aria-label={label}
        data-slot="annotation"
        className={cn(
          "inline-flex max-w-full items-center gap-1 rounded-full border border-dashed",
          "border-muted-foreground/40 bg-background px-2 py-px",
          "text-[11px] leading-5 whitespace-nowrap text-muted-foreground",
          "[&_svg]:size-3 [&_kbd]:font-mono [&_kbd]:text-[10px]",
          onClick &&
            "cursor-pointer transition-colors hover:border-solid hover:border-foreground hover:text-foreground",
          className
        )}
      >
        {children}
      </Tag>
    </WithTip>
  );
}

/* -------------------------------- Label ----------------------------- */
/* Large field-label text for Above/Below rows. First child docks the   */
/* leading corner, second the trailing corner (rows justify-between).   */

function Label({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="label"
      className={cn(
        "text-lg font-semibold leading-tight text-foreground",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export const UniversalInput = Object.assign(Root, {
  Field,
  Row,
  Top,
  Bottom,
  Above,
  Below,
  Inner,
  Outer,
  Input: FieldInput,
  Annotation,
  Label,
});
