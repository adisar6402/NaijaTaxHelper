// server/vite.ts
import type { Express } from "express";
import { fileURLToPath } from "url";
import path from "path";
import serveStatic from "serve-static"; // ✅ ESM compatible

// ES module dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(app: Express) {
  // ✅ Dynamically import Vite only in development
  const { createServer: createViteServer } = await import("vite");

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom",
    root: path.resolve(__dirname, ".."),
  });

  app.use(vite.middlewares);
}

export function serveStatic(app: Express) {
  const root = path.resolve(__dirname, "..", "client", "dist");
  app.use(serveStatic(root, { index: false }));
  app.use("*", async (_req, res) => {
    res.sendFile(path.join(root, "index.html"));
  });
}