import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ButtonSizesDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ButtonSizesDemo;
