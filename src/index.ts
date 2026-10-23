export * from "./add.ts";

/**
 * Run the CLI when the module is the main module.
 *
 * For older target runtimes without `import.meta.main`, use this fallback
 * instead:
 *
 * import { argv } from "node:process";
 * import { fileURLToPath } from "node:url";
 * if (import.meta.url.startsWith("file:")) {
 *   const modulePath = fileURLToPath(import.meta.url);
 *   if (argv[1] === modulePath) {
 *     await import("./cli.ts");
 *   }
 * }
 */
if (import.meta.main) {
  await import("./cli.ts"); // TypeScript rewrites this import to ./cli.js
}
