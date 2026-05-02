import { createMDX } from "fumadocs-mdx/next";
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = createMDX();

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  env: {
    NEXT_PUBLIC_VERSION: process.env.npm_package_version,
  },
};

export default withMDX(withNextIntl(config));
