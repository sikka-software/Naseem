"use client";

import { useState } from "react";
import { TextSkeleton } from "@/components/naseem-ui/elements/text-skeleton";
import { Button } from "@/components/ui/button";

const TextSkeletonDemo = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="space-y-3">
        <p className="text-xs">
          {loading ? (
            <TextSkeleton className="w-[18ch]" />
          ) : 'Small text line using xs size'}
        </p>
        <p className="text-sm">
          {loading ? (
            <TextSkeleton className="w-[18ch]" />
          ) : 'Small text line using sm size'}
        </p>
        <p className="text-lg">
          {loading ? (
            <TextSkeleton className="w-[18ch]" />
          ) : 'Small text line using lg size'}
        </p>
        <p className="text-xl">
          {loading ? (
            <TextSkeleton className="w-[18ch]" />
          ) : 'Small text line using xl size'}
        </p>
        <p className="text-2xl">
          {loading ? (
            <TextSkeleton className="w-[18ch]" />
          ) : 'Small text line using 2xl size'}
        </p>
      </div>

      <Button size="sm" onClick={() => setLoading(!loading)}>
        {loading ? "Show Content" : "Show Skeleton"}
      </Button>
    </div>
  );
};

export default TextSkeletonDemo;
