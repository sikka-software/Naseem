import type { ReactNode } from "react";
import { baseOptions, linkItems } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import NaseemLogo from "@/components/naseem-logo";
import { TooltipProvider } from "@/components/ui/tooltip";

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  i18n: false,
  links: linkItems,
  tree: source.pageTree,
  nav: {
    ...baseOptions.nav,
    title: (
      <div className="relative flex items-center space-x-2">
        <NaseemLogo className="-my-10 size-30" />
      </div>
    ),
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...docsOptions}>
      <TooltipProvider>{children}</TooltipProvider>
    </DocsLayout>
  );
}
