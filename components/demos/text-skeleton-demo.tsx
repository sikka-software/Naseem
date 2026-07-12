import { TextSkeleton } from "@/components/naseem-ui/elements/text-skeleton";

const TextSkeletonDemo = () => {
  return (
    <div className="space-y-1.5">
      <TextSkeleton className="w-3/4 text-sm" />
      <TextSkeleton className="w-full text-sm" />
      <TextSkeleton className="w-1/2 text-sm" />
    </div>
  );
};

export default TextSkeletonDemo;
