import type { ReactNode } from "react";
import { baseOptions, linkItems } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/notebook";

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  i18n: false,
  links: linkItems,
  tree: source.pageTree,
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
