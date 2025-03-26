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
        default: mod.Input,
      }))
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

  // {
  //   name: "face-rating-basic",
  //   type: "registry:component",
  //   dependencies: ["lucide-react"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/face-rating/basic/face-rating-basic.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import("../components/commerce-ui/face-rating/basic/face-rating-basic")
  //   ),
  // },

  // {
  //   name: "face-rating-gradient",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "tinycolor2"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/face-rating/gradient/face-rating-gradient.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/face-rating/gradient/face-rating-gradient"
  //       )
  //   ),
  // },

  // {
  //   name: "image-viewer-basic",
  //   type: "registry:component",
  //   dependencies: [
  //     "@radix-ui/react-dialog",
  //     "lucide-react",
  //     "react-zoom-pan-pinch",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/image-viewer/basic/image-viewer-basic.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/image-viewer/basic/image-viewer-basic"
  //       )
  //   ),
  // },

  // {
  //   name: "image-viewer-motion",
  //   type: "registry:component",
  //   dependencies: [
  //     "@radix-ui/react-dialog",
  //     "lucide-react",
  //     "react-zoom-pan-pinch",
  //     "tailwind-motion",
  //   ],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/image-viewer/motion/image-viewer-motion.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/image-viewer/motion/image-viewer-motion"
  //       )
  //   ),
  // },

  // {
  //   name: "upvote-downvote-rating-01",
  //   type: "registry:component",
  //   dependencies: ["lucide-react"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-01.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-01"
  //       )
  //   ),
  // },
  // {
  //   name: "upvote-downvote-rating-02",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@number-flow/react"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-02.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-02"
  //       )
  //   ),
  // },

  // {
  //   name: "upvote-downvote-rating-03",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@number-flow/react"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-03.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-03"
  //       )
  //   ),
  // },
  // {
  //   name: "upvote-downvote-rating-04",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@number-flow/react"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-04.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-04"
  //       )
  //   ),
  // },

  // {
  //   name: "upvote-downvote-rating-05",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@number-flow/react"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-05.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-05"
  //       )
  //   ),
  // },

  // {
  //   name: "star-rating-basic",
  //   type: "registry:component",
  //   dependencies: ["lucide-react"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/star-rating/basic/star-rating-basic.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import("../components/commerce-ui/star-rating/basic/star-rating-basic")
  //   ),
  // },

  // {
  //   name: "star-rating-fractions",
  //   type: "registry:component",
  //   dependencies: ["lucide-react"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/star-rating/fractions/star-rating-fractions.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/star-rating/fractions/star-rating-fractions"
  //       )
  //   ),
  // },

  // {
  //   name: "like-rating-basic",
  //   type: "registry:component",
  //   dependencies: ["lucide-react"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/like-rating/basic/like-rating-basic.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import("../components/commerce-ui/like-rating/basic/like-rating-basic")
  //   ),
  // },

  // {
  //   name: "variant-color-selector-basic",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-color-selector/basic/variant-color-selector-basic.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-color-selector/basic/variant-color-selector-basic"
  //       )
  //   ),
  // },

  // {
  //   name: "image-carousel-horizontal",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "embla-carousel-react", "embla-carousel"],
  //   registryDependencies: ["button"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal"
  //       )
  //   ),
  // },

  // {
  //   name: "price-format-basic",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "react-number-format"],
  //   registryDependencies: ["button"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/price-format/basic/price-format-basic.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/price-format/basic/price-format-basic"
  //       )
  //   ),
  // },

  // {
  //   name: "price-format-sale",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "react-number-format"],
  //   registryDependencies: ["button"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/price-format/sale/price-format-sale.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import("../components/commerce-ui/price-format/sale/price-format-sale")
  //   ),
  // },

  // {
  //   name: "upvote-rating-basic",
  //   type: "registry:component",
  //   dependencies: ["lucide-react"],
  //   registryDependencies: ["button"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-rating/basic/upvote-rating-basic.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-rating/basic/upvote-rating-basic"
  //       )
  //   ),
  // },

  // {
  //   name: "upvote-rating-animated",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@number-flow/react"],
  //   registryDependencies: ["button"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/upvote-rating/animated/upvote-rating-animated.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/upvote-rating/animated/upvote-rating-animated"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-basic",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
  //   registryDependencies: ["button"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/basic/variant-selector-basic.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/basic/variant-selector-basic"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-images",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/images/variant-selector-images.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/images/variant-selector-images"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-animated",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/animated/variant-selector-animated.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/animated/variant-selector-animated"
  //       )
  //   ),
  // },

  // {
  //   name: "variant-selector-multiple",
  //   type: "registry:component",
  //   dependencies: ["lucide-react", "@radix-ui/react-toggle-group"],
  //   files: [
  //     {
  //       path: "@/components/commerce-ui/variant-selector/multiple/variant-selector-multiple.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   component: React.lazy(
  //     () =>
  //       import(
  //         "../components/commerce-ui/variant-selector/multiple/variant-selector-multiple"
  //       )
  //   ),
  // },
];
