import type { Registry } from "@/registry/schema";
import * as React from "react";

export const components: Registry = [
  {
    name: "button",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/naseem-ui/elements/button.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/button").then((mod) => ({
        default: mod.Button,
      }))
    ),
  },
  {
    name: "dialog",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/naseem-ui/elements/dialog.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/dialog").then((mod) => ({
        default: mod.Dialog,
      }))
    ),
  },
  {
    name: "loading-bar",
    type: "registry:component",
    dependencies: ["lucide-react", "nprogress"],
    files: [
      {
        path: "@/components/naseem-ui/elements/loading-bar.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(() =>
      import("@/components/naseem-ui/elements/loading-bar").then((mod) => ({
        default: mod.LoadingBar,
      }))
    ),
  },
  {
    name: "theme-switcher",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/naseem-ui/elements/theme-switcher.tsx",
        type: "registry:component",
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
    dependencies: ["lucide-react", "next-themes"],
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "@/components/naseem-ui/elements/language-switcher.tsx",
        type: "registry:component",
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
