#!/usr/bin/env node

import { Command } from "commander";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as https from "https";

const REGISTRY_URL = "https://naseem.sikka.io/r";

const program = new Command();

program
  .name("naseem")
  .description("Sikka's component registry")
  .version("1.0.0");

const downloadFile = (url: string, dest: string): Promise<void> =>
  new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} from ${url}`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close(() => resolve());
        });
      })
      .on("error", (err) => {
        try { fs.unlinkSync(dest); } catch {}
        reject(err);
      });
  });

program
  .command("add <component>")
  .description("Add a component from the Sikka registry")
  .action(async (component: string) => {
    if (component === "sikka-favicon") {
      const faviconUrl = "https://naseem.sikka.io/sikka-favicon.ico";
      const dest = path.join(process.cwd(), "public", "sikka-favicon.ico");
      console.log(`Adding sikka-favicon...`);
      await downloadFile(faviconUrl, dest);
      console.log(`✓ Added sikka-favicon.ico to public/`);
      return;
    }

    const url = `${REGISTRY_URL}/${component}.json`;
    console.log(`Adding ${component} from ${url}...`);

    try {
      execSync(`pnpm dlx shadcn@latest add ${url}`, { stdio: "inherit" });
    } catch (error) {
      process.exit(1);
    }
  });

program.parse();
