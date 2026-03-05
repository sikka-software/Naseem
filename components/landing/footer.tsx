import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NaseemSymbol from "../naseem-symbol";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    href: "/docs",
    title: "Overview",
  },
  {
    href: "/docs",
    title: "Components",
  },
];

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex shrink-0 flex-col", className)}>
      <footer className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center py-6">
            {/* Logo */}
            <div className="relative flex items-center space-x-2">
              <NaseemSymbol className="size-6 text-[#4c88f2]" />
            </div>

            <ul className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {footerLinks.map(({ href, title }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground text-sm font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-3 px-6 py-4 sm:flex-row xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                commerce-ui
              </Link>
              . All rights reserved.
            </span>

            <div className="text-muted-foreground flex items-center gap-4">
              <Link
                href="https://github.com/sikka-software/naseem"
                target="_blank"
                className="flex flex-row gap-2 text-xs"
              >
                Source code
                <GithubIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
