"use client";

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";

export function CodeBlockCommand({ componentName }: { componentName: string }) {
  return (
    <Tabs items={["pnpm", "npm", "yarn", "bun"]} className="relative w-full">
      <Tab value="pnpm">
        <DynamicCodeBlock
          lang="bash"
          code={`pnpm dlx @sikka/naseem add ${componentName}`}
        />
      </Tab>
      <Tab value="npm">
        <DynamicCodeBlock
          lang="bash"
          code={`npx @sikka/naseem add ${componentName}`}
        />
      </Tab>
      <Tab value="yarn">
        <DynamicCodeBlock
          lang="bash"
          code={`yarn dlx @sikka/naseem add ${componentName}`}
        />
      </Tab>
      <Tab value="bun">
        <DynamicCodeBlock
          lang="bash"
          code={`bunx --bun @sikka/naseem add ${componentName}`}
        />
      </Tab>
    </Tabs>
  );
}
