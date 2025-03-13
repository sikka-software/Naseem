import { cn } from "@/lib/utils";
import { RootProvider } from "fumadocs-ui/provider";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./global.css";
// import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();
  
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-website-id="b4c4225c-b9a3-4199-bd56-d9fc8d987e1a"
    >
      {/* {!isDev ? (
        <Script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="b4c4225c-b9a3-4199-bd56-d9fc8d987e1a"
        />
      ) : null} */}
      <body
        className={cn(
          GeistSans.variable,
          geistSans.className,
          "bg-background relative flex min-h-screen flex-col antialiased"
        )}
      >
        <NextIntlClientProvider
          messages={messages}
          locale={locale}
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
          </RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  description:
    "The Commerce UI is a set of components and hooks that can be used to build a custom storefront for your commerce site.",
  metadataBase: new URL("https://ui.stackzero.co"),
  title: "Commerce UI",
};
