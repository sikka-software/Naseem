import type { Registry } from "@/registry/schema";
import * as React from "react";

export const examples: Registry = [
  {
    name: "button-sizes",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.sikka.io/r/image-carousel-horizontal.json",
    ],
    files: [
      {
        path: "@/components/demos/button-sizes.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(() => import("../components/demos/button-sizes")),
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
        path: "@/components/demos/multulang-input-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () => import("../components/demos/multulang-input-demo")
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
];
