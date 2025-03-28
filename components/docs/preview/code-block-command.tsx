import { Button } from "@/components/ui/button";
import { Tab as FumaTab, Tabs as FumaTabs } from "fumadocs-ui/components/tabs";
import { Copy } from "lucide-react";

export function CodeBlockCommand({ componentName }: { componentName: string }) {
  return (
    <FumaTabs
      items={["npm", "yarn", "pnpm", "bun"]}
      className="relative w-full"
    >
      <Button
        size={"icon"}
        variant={"outline"}
        className="absolute top-12 right-2 h-8 w-8"
      >
        <Copy className="!size-3"/>
      </Button>
      <FumaTab value="npm" className="font-mono text-sm">
        npx shadcn@latest add https://ui.sikka.io/r/{componentName}.json
      </FumaTab>
      <FumaTab value="yarn" className="font-mono text-sm">
        npx shadcn@latest add https://ui.sikka.io/r/{componentName}.json
      </FumaTab>
      <FumaTab value="pnpm" className="font-mono text-sm">
        pnpm dlx shadcn@latest add https://ui.sikka.io/r/{componentName}.json
      </FumaTab>
      <FumaTab value="bun" className="font-mono text-sm">
        bunx --bun shadcn@latest add https://ui.sikka.io/r/{componentName}
        .json
      </FumaTab>
    </FumaTabs>
  );
}
