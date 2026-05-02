import { cn } from "@/lib/utils";
import { RootProvider } from "fumadocs-ui/provider/next";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./global.css";
// import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          geistSans.className
          // "bg-background relative flex min-h-screen flex-col antialiased"
        )}
      >
        <NextIntlClientProvider
          messages={messages}
          locale="en"
          timeZone="Asia/Riyadh"
          now={new Date()}
        >
          <RootProvider
            search={{
              options: {
                type: "static",
              },
            }}
          >
            {children}
            <Toaster />
          </RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  description:
    "The Commerce UI is a set of components and hooks that can be used to build a custom storefront for your commerce site.",
  metadataBase: new URL("https://ui.sikka.io"),
  title: "Commerce UI",
};
