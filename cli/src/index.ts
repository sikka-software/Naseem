#!/usr/bin/env node

import { Command } from "commander";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as https from "https";

const REGISTRY_URL = "https://naseem.sikka.io/r";

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf-8")
);

const program = new Command();

program
  .name("naseem")
  .description("Sikka's component registry")
  .version(pkg.version);

const downloadFile = (url: string, dest: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const doRequest = (targetUrl: string) => {
      const options = new URL(targetUrl);
      https
        .get(
          {
            hostname: options.hostname,
            port: options.port,
            path: options.pathname + options.search,
            headers: {
              "User-Agent":
                "Mozilla/5.0 (compatible; SikkaCLI/1.0)",
            },
          },
          (res) => {
          if (
            res.statusCode &&
            res.statusCode >= 300 &&
            res.statusCode < 400 &&
            res.headers.location
          ) {
            doRequest(new URL(res.headers.location, targetUrl).href);
            return;
          }
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode} from ${targetUrl}`));
            return;
          }
          const chunks: Buffer[] = [];
          res.on("data", (chunk: Buffer) => chunks.push(chunk));
          res.on("end", () => {
            fs.mkdirSync(path.dirname(dest), { recursive: true });
            fs.writeFileSync(dest, Buffer.concat(chunks));
            resolve();
          });
          res.on("error", reject);
        })
        .on("error", reject);
    };
    doRequest(url);
  });

program
  .command("add <component>")
  .description("Add a component from the Sikka registry")
  .action(async (component: string) => {
    if (component === "sikka-favicon") {
      const faviconUrl = "https://naseem.sikka.io/sikka-favicon.ico";
      const dest = path.join(process.cwd(), "public", "sikka-favicon.ico");
      console.log(`Adding sikka-favicon...`);
      try {
        await downloadFile(faviconUrl, dest);
        console.log(`✓ Added sikka-favicon.ico to public/`);
      } catch (error) {
        console.error(`Failed to download favicon:`, error);
        process.exit(1);
      }
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
