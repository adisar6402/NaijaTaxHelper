// server/vite.ts
import type { Express } from "express";
import { fileURLToPath } from "url";
import path from "path";
import serveStatic from "serve-static"; // ESM compatible

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Dynamically import Vite only in dev
export async function setupVite(app: Express) {
  const { createServer } = await import("vite");
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    root: path.resolve(__dirname, ".."),
  });

  app.use(vite.middlewares);
}

// ✅ Renamed to avoid collision
export function serveStatic(app: Express) {
  const root = path.resolve(__dirname, "..", "client", "dist");
  app.use(serveStatic(root, { index: false }));
  app.use("*", (_req, res) => {
    res.sendFile(path.join(root, "index.html"));
  });
}