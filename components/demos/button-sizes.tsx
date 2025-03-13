import { Button } from "@/components/naseem-ui/elements/button";

export default function ButtonSizesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  );
}
