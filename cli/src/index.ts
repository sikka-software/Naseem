#!/usr/bin/env node

import { Command } from "commander";
import { execSync } from "child_process";

const REGISTRY_URL = "https://naseem.sikka.io/r";

const program = new Command();

program
  .name("naseem")
  .description("Sikka's component registry")
  .version("1.0.0");

program
  .command("add <component>")
  .description("Add a component from the Sikka registry")
  .action((component: string) => {
    const url = `${REGISTRY_URL}/${component}.json`;
    console.log(`Adding ${component} from ${url}...`);

    try {
      execSync(`pnpm dlx shadcn@latest add ${url}`, {
        stdio: "inherit",
      });
    } catch (error) {
      process.exit(1);
    }
  });

program.parse();
