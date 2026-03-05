"use client";

import { LoadingBar } from "@/components/naseem-ui/elements/loading-bar";
import Link from "next/link";

const LoadingBarDemo = () => {
  return (
    <div className="w-full max-w-[600px] space-y-6">
      <div className="space-y-2">
        <h3 className="font-medium">Loading Bar Demo</h3>
        <p className="text-sm text-muted-foreground">
          The loading bar automatically shows during page navigation. Click the
          link below to see it in action.
        </p>
      </div>

      <LoadingBar color="hsl(var(--primary))" height={4} />

      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Navigate to Home (see loading bar)
        </Link>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <h4 className="mb-2 font-medium">Features:</h4>
        <ul className="list-inside list-disc text-sm space-y-1">
          <li>Automatic page navigation detection</li>
          <li>Customizable color and height</li>
          <li>Smooth progress animation</li>
          <li>Spinner indicator for loading state</li>
        </ul>
      </div>
    </div>
  );
};

export default LoadingBarDemo;
