import type { Registry } from "@/registry/schema";
import * as React from "react";

export const components: Registry = [
  {
    name: "theme-switcher",
    type: "registry:component",
    dependencies: [
      "lucide-react",
      "next-themes",
      "next-intl",
      "class-variance-authority",
      "tailwind-merge",
      "clsx",
    ],
    registryDependencies: ["button", "dropdown-menu", "tooltip", "utils"],
    files: [
      {
        path: "components/naseem-ui/elements/theme-switcher.tsx",
        type: "registry:component",
        target: "components/ui/naseem/theme-switcher.tsx",
      },
      {
        path: "i18n/config.ts",
        type: "registry:file",
        target: "i18n/config.ts",
      },
      {
        path: "i18n/request.ts",
        type: "registry:file",
        target: "i18n/request.ts",
      },
      {
        path: "i18n/navigation.ts",
        type: "registry:file",
        target: "i18n/navigation.ts",
      },
      {
        path: "i18n/routing.ts",
        type: "registry:file",
        target: "i18n/routing.ts",
      },
      {
        path: "messages/ar.json",
        type: "registry:file",
        target: "messages/ar.json",
      },
      {
        path: "messages/en.json",
        type: "registry:file",
        target: "messages/en.json",
      },
      {
        path: "next.config.example.ts",
        type: "registry:file",
        target: "next.config.example.ts",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/theme-switcher").then((mod) => ({
        default: mod.ThemeSwitcher,
      }))
    ),
  },
  {
    name: "language-switcher",
    type: "registry:component",
    dependencies: [
      "lucide-react",
      "next-themes",
      "next-intl",
      "class-variance-authority",
      "tailwind-merge",
      "clsx",
    ],
    registryDependencies: ["button", "dropdown-menu", "tooltip", "utils"],
    files: [
      {
        path: "components/naseem-ui/elements/language-switcher.tsx",
        type: "registry:component",
      },
      {
        path: "i18n/config.ts",
        type: "registry:file",
        target: "i18n/config.ts",
      },
      {
        path: "i18n/request.ts",
        type: "registry:file",
        target: "i18n/request.ts",
      },
      {
        path: "i18n/navigation.ts",
        type: "registry:file",
        target: "i18n/navigation.ts",
      },
      {
        path: "i18n/routing.ts",
        type: "registry:file",
        target: "i18n/routing.ts",
      },
      {
        path: "messages/ar.json",
        type: "registry:file",
        target: "messages/ar.json",
      },
      {
        path: "messages/en.json",
        type: "registry:file",
        target: "messages/en.json",
      },
      {
        path: "next.config.example.ts",
        type: "registry:file",
        target: "next.config.example.ts",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/language-switcher").then(
        (mod) => ({
          default: mod.LanguageSwitcher,
        })
      )
    ),
  },
  {
    name: "multilang-input",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "@/components/naseem-ui/elements/multilang-input.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/multilang-input").then((mod) => ({
        default: mod.MultilangInput,
      }))
    ),
  },
  {
    name: "multilang-textarea",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "dropdown-menu", "textarea"],
    files: [
      {
        path: "@/components/naseem-ui/elements/multilang-textarea.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/multilang-textarea").then(
        (mod) => ({
          default: mod.MultilangTextarea,
        })
      )
    ),
  },
  {
    name: "sar-symbol",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/elements/sar-symbol.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/sar-symbol").then((mod) => ({
        default: mod.SARSymbol,
      }))
    ),
  },
  {
    name: "currency-input",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["input", "sar-symbol"],
    files: [
      {
        path: "@/components/naseem-ui/elements/currency-input.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/currency-input").then((mod) => ({
        default: mod.CurrencyInput,
      }))
    ),
  },
  {
    name: "sikka-popover",
    type: "registry:component",
    dependencies: ["motion", "next-intl"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/elements/sikka-popover.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/sikka.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/sikka-popover").then((mod) => ({
        default: mod.default,
      }))
    ),
  },
  {
    name: "social-icons",
    type: "registry:component",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/icons/social-icons.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/x.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/linkedin.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/instagram.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/whatsapp.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/icons/social-icons").then((mod) => ({
        default: mod.XformerlyTwitter,
      }))
    ),
  },
  {
    name: "dev-icons",
    type: "registry:component",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/icons/dev-icons.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/icons/dev-icons").then((mod) => ({
        default: mod.GitHub,
      }))
    ),
  },
  {
    name: "sikka-icon",
    type: "registry:component",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/icons/sikka-icon.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/icons/sikka-icon").then((mod) => ({
        default: mod.SikkaLogo,
      }))
    ),
  },
  {
    name: "feedback-survey",
    type: "registry:component",
    dependencies: ["lucide-react", "next-intl", "posthog-js"],
    registryDependencies: ["button", "tooltip", "dialog"],
    files: [
      {
        path: "@/components/naseem-ui/elements/feedback-survey.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/instagram.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/github.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/linkedin.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/whatsapp.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/naseem-ui/icons/x.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/feedback-survey").then((mod) => ({
        default: mod.default,
      }))
    ),
  },
  {
    name: "accordion",
    type: "registry:component",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/elements/accordion.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/accordion").then((mod) => ({
        default: mod.default,
      }))
    ),
  },
  {
    name: "strips-horizontal",
    type: "registry:component",
    dependencies: ["motion"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/elements/strips-horizontal.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/strips-horizontal").then(
        (mod) => ({
          default: mod.default,
        })
      )
    ),
  },
  {
    name: "strips-vertical",
    type: "registry:component",
    dependencies: ["motion"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/elements/strips-vertical.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/strips-vertical").then((mod) => ({
        default: mod.default,
      }))
    ),
  },
  {
    name: "text-skeleton",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["skeleton", "utils"],
    files: [
      {
        path: "@/components/naseem-ui/elements/text-skeleton.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/text-skeleton").then((mod) => ({
        default: mod.TextSkeleton,
      }))
    ),
  },
  {
    name: "expandable-grid",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/elements/expandable-grid.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/expandable-grid").then((mod) => ({
        default: mod.default,
      }))
    ),
  },
  {
    name: "image-grid",
    type: "registry:component",
    dependencies: ["motion"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/elements/image-grid.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/image-grid").then((mod) => ({
        default: mod.default,
      }))
    ),
  },
  {
    name: "app-stores",
    type: "registry:component",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/naseem-ui/elements/app-stores.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/app-stores").then((mod) => ({
        default: mod.AppStores,
      }))
    ),
  },
  {
    name: "back-to-top",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/naseem-ui/elements/back-to-top.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/back-to-top").then((mod) => ({
        default: mod.BackToTop,
      }))
    ),
  },
  {
    name: "color-picker",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["skeleton", "label"],
    files: [
      {
        path: "@/components/naseem-ui/elements/color-picker.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/color-picker").then((mod) => ({
        default: mod.ColorPicker,
      }))
    ),
  },
  {
    name: "cursor-driven-particle-typography",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["utils"],
    files: [
      {
        path: "@/components/ui/cursor-driven-particle-typography.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/ui/cursor-driven-particle-typography").then(
        (mod) => ({
          default: mod.CursorDrivenParticleTypography,
        })
      )
    ),
  },
  {
    name: "sikka-favicon",
    type: "registry:file",
    files: [
      {
        path: "public/sikka-favicon.ico",
        type: "registry:file",
        target: "public/sikka-favicon.ico",
      },
    ],
  },
  {
    name: "hit-area",
    type: "registry:component",
    description: "Tailwind CSS v4 utilities for expanding click/touch hit areas without affecting layout.",
    css: {
      "@utility hit-area-debug": {
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "var(--hit-area-t, 0px)",
          right: "var(--hit-area-r, 0px)",
          bottom: "var(--hit-area-b, 0px)",
          left: "var(--hit-area-l, 0px)",
          "pointer-events": "inherit",
          "@apply border border-dashed border-blue-500 bg-blue-500/10": {},
        },
        "&:hover::before": {
          "@apply border border-dashed border-green-500 bg-green-500/10": {},
        },
      },
      "@utility hit-area": {
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "var(--hit-area-t, 0px)",
          right: "var(--hit-area-r, 0px)",
          bottom: "var(--hit-area-b, 0px)",
          left: "var(--hit-area-l, 0px)",
          "pointer-events": "inherit",
        },
      },
      "@utility hit-area-*": {
        position: "relative",
        "--hit-area-t": "--spacing(--value(number) * -1)",
        "--hit-area-b": "--spacing(--value(number) * -1)",
        "--hit-area-l": "--spacing(--value(number) * -1)",
        "--hit-area-r": "--spacing(--value(number) * -1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "var(--hit-area-t, 0px)",
          right: "var(--hit-area-r, 0px)",
          bottom: "var(--hit-area-b, 0px)",
          left: "var(--hit-area-l, 0px)",
          "pointer-events": "inherit",
        },
      },
      "@utility hit-area-l-*": {
        position: "relative",
        "--hit-area-l": "--spacing(--value(number) * -1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "var(--hit-area-t, 0px)",
          right: "var(--hit-area-r, 0px)",
          bottom: "var(--hit-area-b, 0px)",
          left: "var(--hit-area-l, 0px)",
          "pointer-events": "inherit",
        },
      },
      "@utility hit-area-r-*": {
        position: "relative",
        "--hit-area-r": "--spacing(--value(number) * -1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "var(--hit-area-t, 0px)",
          right: "var(--hit-area-r, 0px)",
          bottom: "var(--hit-area-b, 0px)",
          left: "var(--hit-area-l, 0px)",
          "pointer-events": "inherit",
        },
      },
      "@utility hit-area-t-*": {
        position: "relative",
        "--hit-area-t": "--spacing(--value(number) * -1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "var(--hit-area-t, 0px)",
          right: "var(--hit-area-r, 0px)",
          bottom: "var(--hit-area-b, 0px)",
          left: "var(--hit-area-l, 0px)",
          "pointer-events": "inherit",
        },
      },
      "@utility hit-area-b-*": {
        position: "relative",
        "--hit-area-b": "--spacing(--value(number) * -1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "var(--hit-area-t, 0px)",
          right: "var(--hit-area-r, 0px)",
          bottom: "var(--hit-area-b, 0px)",
          left: "var(--hit-area-l, 0px)",
          "pointer-events": "inherit",
        },
      },
      "@utility hit-area-x-*": {
        position: "relative",
        "--hit-area-l": "--spacing(--value(number) * -1)",
        "--hit-area-r": "--spacing(--value(number) * -1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "var(--hit-area-t, 0px)",
          right: "var(--hit-area-r, 0px)",
          bottom: "var(--hit-area-b, 0px)",
          left: "var(--hit-area-l, 0px)",
          "pointer-events": "inherit",
        },
      },
      "@utility hit-area-y-*": {
        position: "relative",
        "--hit-area-t": "--spacing(--value(number) * -1)",
        "--hit-area-b": "--spacing(--value(number) * -1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "var(--hit-area-t, 0px)",
          right: "var(--hit-area-r, 0px)",
          bottom: "var(--hit-area-b, 0px)",
          left: "var(--hit-area-l, 0px)",
          "pointer-events": "inherit",
        },
      },
    },
  },
];
