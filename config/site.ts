export const siteConfig = {
  name: "naseem",
  creator: "@sikka_sa",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://ui.sikka.io",
  ogImage: "https://ui.sikka.io/opengraph-image.png",
  description:
    "naseem is a set of components and hooks that can be used to build a custom storefront for your commerce site.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "UI Library",
    "UI Kit",
    "UI Components",
    "UI Elements",
    "Open Source",
    "shadcn/ui",
  ],
  links: {
    portfolio: "https://sikka.io",
    github: "https://github.com/sikka-software/naseem",
  },
};

export type SiteConfig = typeof siteConfig;
