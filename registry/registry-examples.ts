import type { Registry } from "@/registry/schema";
import * as React from "react";

export const examples: Registry = [
  {
    name: "button-demo",
    type: "registry:example",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/demos/button-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(() =>
      import("../components/demos/button-demo")
    ),
  },
  {
    name: "button-sizes-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/demos/button-sizes-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(() =>
      import("../components/demos/button-sizes-demo")
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
  {
    name: "app-stores-demo",
    type: "registry:example",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/app-stores-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(() => import("../components/demos/app-stores-demo")),
  },
  {
    name: "auth-buttons-demo",
    type: "registry:example",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/auth-buttons-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () => import("../components/demos/auth-buttons-demo")
    ),
  },
  {
    name: "loading-bar-demo",
    type: "registry:example",
    dependencies: ["nprogress"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/demos/loading-bar-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(() => import("../components/demos/loading-bar-demo")),
  },
];
