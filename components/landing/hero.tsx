"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { GridPattern } from "../magicui/grid-pattern";
import { LineShadowText } from "../magicui/line-shadow-text";
import { Button } from "../ui/button";

const HeroTitle = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mb-3 hidden text-3xl leading-none font-semibold tracking-tighter text-balance sm:text-4xl md:block md:text-5xl lg:text-6xl">
          Build{" "}
          <span className="bg-linear-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">
            apps
          </span>{" "}
          <br />
          and sites{" "}
          <LineShadowText className="italic" shadowColor={shadowColor}>
            faster
          </LineShadowText>
        </h1>

        <h1 className="mb-3 block text-4xl leading-none font-semibold tracking-tighter text-balance sm:text-3xl md:hidden md:text-4xl lg:text-5xl">
          Build{" "}
          <span className="bg-linear-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">
            commerce
          </span>{" "}
          apps <span className="italic">faster</span>
        </h1>

        <p className="text-muted-foreground mb-4 text-lg text-balance md:text-base">
          <span className="text-foreground font-normal">
            Copy-paste components{" "}
          </span>{" "}
          and blocks that you can use in your next{" "}
          <span className="text-foreground font-normal">project</span>.
        </p>

        <div className="flex flex-row gap-3">
          <div>
            <Button
              className="group/arrow px-6 py-5 text-base font-bold md:px-4 md:py-4 md:text-sm"
              asChild
              size="lg"
            >
              <Link href="/docs">Components</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Button
              className="group/arrow px-6 py-5 text-base font-bold md:px-4 md:py-4 md:text-sm"
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href="/docs">
                Get Started
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-4 w-full text-center">
          <p className="text-sm">
            100% free and <span className="font-semibold">Open Source</span>
          </p>
        </div>
        <div className="mt-2 w-full text-center">
          <p className="text-xs">
            Tailored for{" "}
            <a
              href="https://sikka.io"
              target="_blank"
              className="font-semibold"
            >
              Sikka Software
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export function HeroSection() {
  return (
    <section className="relative h-full w-full rounded-xl px-4">
      <div className="absolute hidden size-full w-full items-center justify-center overflow-hidden mask-[radial-gradient(circle,#000_50%,transparent_80%)] md:flex">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          opacity={0.6}
          className={cn(
            "mask-[linear-gradient(to_bottom,white,transparent,transparent)]"
          )}
        />
      </div>
      <div className="grid h-full place-items-center gap-4">
        <div className="relative z-20 max-w-3xl space-y-4 text-center">
          <HeroTitle />
        </div>
      </div>
    </section>
  );
}
