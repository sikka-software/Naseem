import type { Registry } from "@/registry/schema";
import * as React from "react";

export const components: Registry = [
  // {
  //   name: "dialog",
  //   type: "registry:component",
  //   dependencies: ["lucide-react"],
  //   files: [
  //     {
  //       path: "@/components/naseem-ui/elements/dialog.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(() =>
  //     import("@/components/naseem-ui/elements/dialog").then((mod) => ({
  //       default: mod.Dialog,
  //     }))
  //   ),
  // },
  // {
  //   name: "loading-bar",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "nprogress"],
  //   files: [
  //     {
  //       path: "@/components/naseem-ui/elements/loading-bar.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(() =>
  //     import("@/components/naseem-ui/elements/loading-bar").then((mod) => ({
  //       default: mod.LoadingBar,
  //     }))
  //   ),
  // },
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
        target: "components/ui/naseem/theme-switcher.tsx", // add this
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
];
