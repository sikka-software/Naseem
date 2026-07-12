import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

function TextSkeleton(props: React.ComponentProps<"span">) {
  return (
    <span
      {...props}
      className={cn("flex h-[1lh] items-center", props.className)}
    >
      <Skeleton className="h-[1em] w-full rounded-sm" />
    </span>
  );
}

export { TextSkeleton };
