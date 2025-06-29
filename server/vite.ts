// server/vite.ts
import type { Express } from "express";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import path from "path";

// ES module dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(app: Express) {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom",
    root: path.resolve(__dirname, ".."),
  });

  app.use(vite.middlewares); // ✅ Only middleware, no listen()
}

export function serveStatic(app: Express) {
  const root = path.resolve(__dirname, "..", "client", "dist");
  app.use(require("serve-static")(root, { index: false }));
  app.use("*", async (_req, res) => {
    res.sendFile(path.join(root, "index.html"));
  });
}
