import type { Registry } from "@/registry/schema";
import * as React from "react";

export const examples: Registry = [
  {
    name: "button-sizes-demo",
    type: "registry:example",
    dependencies: [],
    registryDependencies: ["https://ui.sikka.io/r/button.json"],
    files: [
      {
        path: "@/components/demos/button-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(() =>
      import("../components/demos/button-demo").then((module) => ({
        default: module.ButtonSizesDemo,
      }))
    ),
  },
  {
    name: "button-demo",
    type: "registry:example",
    dependencies: [],
    registryDependencies: ["https://ui.sikka.io/r/button.json"],
    files: [
      {
        path: "@/components/demos/button-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(() =>
      import("../components/demos/button-demo").then((module) => ({
        default: module.ButtonDemo2,
      }))
    ),
  },

  {
    name: "theme-switcher-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/theme-switcher-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () => import("../components/demos/theme-switcher-demo")
    ),
  },
  {
    name: "language-switcher-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/language-switcher-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () => import("../components/demos/language-switcher-demo")
    ),
  },
  {
    name: "dialog-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/dialog-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(() => import("../components/demos/dialog-demo")),
  },
  {
    name: "multilang-input-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/multilang-input-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () => import("../components/demos/multilang-input-demo")
    ),
  },
  {
    name: "multilang-textarea-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/multilang-textarea-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () => import("../components/demos/multilang-textarea-demo")
    ),
  },
  {
    name: "currency-input-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/currency-input-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () => import("../components/demos/currency-input-demo")
    ),
  },
  {
    name: "destroyable-card-demo",
    type: "registry:example",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/card-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(() => import("../components/demos/card-demo")),
  },
];
