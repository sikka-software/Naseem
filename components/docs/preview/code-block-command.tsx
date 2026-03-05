import { Button } from "@/components/ui/button";
import { Tab as FumaTab, Tabs as FumaTabs } from "fumadocs-ui/components/tabs";
import { Copy } from "lucide-react";

export function CodeBlockCommand({ componentName }: { componentName: string }) {
  return (
    <FumaTabs
      items={["pnpm", "npm", "yarn", "bun"]}
      className="relative w-full"
    >
      <Button
        size={"icon"}
        variant={"outline"}
        className="absolute top-12 right-2 h-8 w-8"
      >
        <Copy className="size-3!" />
      </Button>
      <FumaTab value="pnpm" className="font-mono text-sm">
        pnpm dlx @sikka/naseem add {componentName}
      </FumaTab>
      <FumaTab value="npm" className="font-mono text-sm">
        npx @sikka/naseem add {componentName}
      </FumaTab>
      <FumaTab value="yarn" className="font-mono text-sm">
        yarn @sikka/naseem add {componentName}
      </FumaTab>
      <FumaTab value="bun" className="font-mono text-sm">
        bunx --bun @sikka/naseem add {componentName}
      </FumaTab>
    </FumaTabs>
  );
}
