import type { Registry } from "@/registry/schema";
import * as React from "react";

export const examples: Registry = [
  {
    name: "button-sizes",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/image-carousel-horizontal.json",
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

  // {
  //   name: "image-carousel-horizontal-ex-02",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/image-carousel-horizontal.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-02.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-02"
  //       )
  //   ),
  // },

  // {
  //   name: "image-carousel-horizontal-ex-03",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/image-carousel-horizontal.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-03.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-03"
  //       )
  //   ),
  // },

  // {
  //   name: "image-viewer-basic-ex-01",
  //   type: "registry:component",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/image-viewer-basic.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/image-viewer/basic/image-viewer-basic-ex-01.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/image-viewer/basic/image-viewer-basic-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "image-viewer-motion-ex-01",
  //   type: "registry:component",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/image-viewer-motion.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/image-viewer/motion/image-viewer-motion-ex-01.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/image-viewer/motion/image-viewer-motion-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "price-format-basic-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/price-format-basic.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/price-format/basic/price-format-basic-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/price-format/basic/price-format-basic-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "price-format-sale-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/price-format-sale.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/price-format/sale/price-format-sale-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/price-format/sale/price-format-sale-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "price-format-sale-ex-02",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/price-format-sale.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/price-format/sale/price-format-sale-ex-02.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/price-format/sale/price-format-sale-ex-02"
  //       )
  //   ),
  // },

  // {
  //   name: "face-rating-basic-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/face-rating-basic.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/face-rating/basic/face-rating-basic-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/face-rating/basic/face-rating-basic-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "face-rating-basic-ex-02",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/face-rating-basic.json"],

  //   files: [
  //     {
  //       path: "@/components/commerce-ui/face-rating/basic/face-rating-basic-ex-02.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/face-rating/basic/face-rating-basic-ex-02"
  //       )
  //   ),
  // },

  // {
  //   name: "face-rating-basic-ex-03",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/face-rating-basic.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/face-rating/basic/face-rating-basic-ex-03.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/face-rating/basic/face-rating-basic-ex-03"
  //       )
  //   ),
  // },
  // {
  //   name: "face-rating-gradient-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/face-rating-gradient.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/face-rating/gradient/face-rating-gradient-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/face-rating/gradient/face-rating-gradient-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "like-rating-basic-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/like-rating-basic.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/like-rating/basic/like-rating-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import("../components/commerce-ui/like-rating/basic/like-rating-ex-01")
  //   ),
  // },

  // {
  //   name: "star-rating-basic-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/star-rating-basic.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/star-rating/basic/star-rating-basic-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/star-rating/basic/star-rating-basic-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "star-rating-basic-ex-02",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/star-rating-basic.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/star-rating/basic/star-rating-basic-ex-02.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/star-rating/basic/star-rating-basic-ex-02"
  //       )
  //   ),
  // },

  // {
  //   name: "star-rating-basic-ex-03",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["https://ui.stackzero.co/r/star-rating-basic.json"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/star-rating/basic/star-rating-basic-ex-03.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/star-rating/basic/star-rating-basic-ex-03"
  //       )
  //   ),
  // },

  // {
  //   name: "star-rating-fractions-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/star-rating-fractions.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/star-rating/fractions/star-rating-fractions-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/star-rating/fractions/star-rating-fractions-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "star-rating-fractions-ex-02",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/star-rating-fractions.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/star-rating/fractions/star-rating-fractions-ex-02.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/star-rating/fractions/star-rating-fractions-ex-02"
  //       )
  //   ),
  // },

  // {
  //   name: "star-rating-fractions-ex-03",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/star-rating-fractions.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/star-rating/fractions/star-rating-fractions-ex-03.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/star-rating/fractions/star-rating-fractions-ex-03"
  //       )
  //   ),
  // },

  // {
  //   name: "upvote-rating-basic-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/upvote-rating-basic.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-rating/basic/upvote-rating-basic-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-rating/basic/upvote-rating-basic-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "upvote-rating-basic-ex-02",
  //   type: "registry:example",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/upvote-rating-basic.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-rating/basic/upvote-rating-basic-ex-02.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-rating/basic/upvote-rating-basic-ex-02"
  //       )
  //   ),
  // },

  // {
  //   name: "upvote-rating-animated-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react", "@number-flow/react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/upvote-rating-animated.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-rating/animated/upvote-rating-animated-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-rating/animated/upvote-rating-animated-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "upvote-rating-animated-ex-02",
  //   type: "registry:example",
  //   dependencies: ["lucide-react", "@number-flow/react"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/upvote-rating-animated.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-rating/animated/upvote-rating-animated-ex-02.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-rating/animated/upvote-rating-animated-ex-02"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-basic-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/variant-selector-basic.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/basic/variant-selector-basic-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/basic/variant-selector-basic-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-basic-ex-02",
  //   type: "registry:example",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/variant-selector-basic.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/basic/variant-selector-basic-ex-02.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/basic/variant-selector-basic-ex-02"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-images-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/variant-selector-images.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/images/variant-selector-images-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/images/variant-selector-images-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-animated-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/variant-selector-animated.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/animated/variant-selector-animated-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/animated/variant-selector-animated-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-animated-ex-02",
  //   type: "registry:example",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/variant-selector-animated.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/animated/variant-selector-animated-ex-02.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/animated/variant-selector-animated-ex-02"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-multiple-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/variant-selector-multiple.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/multiple/variant-selector-multiple-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/multiple/variant-selector-multiple-ex-01"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-color-selector-basic-ex-01",
  //   type: "registry:example",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
  //   registryDependencies: [
  //     "https://ui.stackzero.co/r/variant-color-selector-basic.json",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-color-selector/basic/variant-color-selector-basic-ex-01.tsx",
  //       type: "registry:example",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-color-selector/basic/variant-color-selector-basic-ex-01"
  //       )
  //   ),
  // },
];
