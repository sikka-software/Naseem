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
      <div className="bg--400 flex flex-col items-center">
        <h1 className="mb-4 hidden text-4xl leading-none font-semibold tracking-tighter text-balance sm:text-5xl md:block md:text-6xl lg:text-7xl">
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

        <h1 className="mb-4 block text-6xl leading-none font-semibold tracking-tighter text-balance sm:text-5xl md:hidden md:text-6xl lg:text-7xl">
          Build{" "}
          <span className="bg-linear-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">
            commerce
          </span>{" "}
          apps <span className="italic">faster</span>
        </h1>

        <p className="text-muted-foreground mb-8 text-2xl font-light text-balance md:text-xl">
          <span className="text-foreground font-normal">
            Copy-paste components{" "}
          </span>{" "}
          and blocks that you can use in your next{" "}
          <span className="text-foreground font-normal">project</span>.
        </p>

        <div className="flex flex-row gap-4">
          <div>
            <Button
              className="group/arrow px-7 py-7 text-lg font-bold md:px-4 md:py-4 md:text-sm"
              asChild
              size="lg"
            >
              <Link href="/docs">Components</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Button
              className="group/arrow px-7 py-7 text-lg font-bold md:px-4 md:py-4 md:text-sm"
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href="/docs">
                Get Started
                <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 w-full text-center">
          <p>
            100% free and <span className="font-semibold">Open Source</span>
          </p>
        </div>
        <div className="mt-6 w-full text-center">
          <p className="text-sm">
            This is tailored for{" "}
            <a
              href="https://sikka.io"
              target="_blank"
              className="font-semibold"
            >
              Sikka Software
            </a>
            , but you're free to use it as you like
          </p>
        </div>

        <div className="text-fd-muted-foreground mt-10 text-sm">
          v{process.env.NEXT_PUBLIC_VERSION}
        </div>
      </div>
    </>
  );
};

export function HeroSection() {
  return (
    <section className="relative rounded-xl px-4">
      <div className="h250 absolute hidden size-full w-full items-center justify-center overflow-hidden mask-[radial-gradient(circle,#000_50%,transparent_80%)] md:flex">
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
      <div className="mx-auto my-6 grid place-items-center gap-8">
        <div className="relative z-20 max-w-3xl space-y-8 text-center">
          <HeroTitle />
        </div>
      </div>
    </section>
  );
}
