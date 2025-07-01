// server/devSetup.ts
import { createServer as createViteServer } from "vite";
import type { Express } from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupDevServer(app: Express) {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    root: path.resolve(__dirname, ".."),
  });

  app.use(vite.middlewares);
}