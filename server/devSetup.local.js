// server/devSetup.local.js
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import path from "path";

/**
 * @param {import("express").Express} app
 */
export async function setupDevServer(app) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    root: path.resolve(__dirname, ".."),
  });

  app.use(vite.middlewares);
}