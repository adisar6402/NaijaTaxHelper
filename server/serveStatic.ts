// server/serveStatic.ts
import type { Express } from "express";
import path from "path";
import serveStatic from "serve-static";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function serveStatic(app: Express) {
  const root = path.resolve(__dirname, "..", "client", "dist");
  app.use(serveStatic(root, { index: false }));
  app.use("*", (_req, res) => {
    res.sendFile(path.join(root, "index.html"));
  });
}