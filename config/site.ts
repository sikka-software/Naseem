export const siteConfig = {
  name: "Naseem",
  creator: "@sikka_sa",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://ui.sikka.io",
  ogImage: "https://ui.sikka.io/opengraph-image.png",
  description:
    "Naseem is a set of components and hooks that can be used to build a custom storefront for your commerce site.",
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
    portfolio: "https://sikka.io?utm_source=naseem&utm_medium=referral&utm_campaign=cross-promo&utm_content=site-config-portfolio",
    github: "https://github.com/sikka-software/naseem",
  },
};

export type SiteConfig = typeof siteConfig;
