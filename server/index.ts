import express from "express";
import { createServer } from "http";
import { contactHandler } from "./contactHandler";
import { registerRoutes } from "./routes";
import dotenv from "dotenv";
import { serveStatic } from "./serveStatic"; // ⬅️ NEW FILE
dotenv.config();

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      console.log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(app);

  if (process.env.NODE_ENV === "development") {
    const { createServer } = await import("vite");
    const path = (await import("path")).default;
    const { fileURLToPath } = await import("url");

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const vite = await createServer({
      server: { middlewareMode: true },
      appType: "custom",
      root: path.resolve(__dirname, ".."),
    });

    app.use(vite.middlewares);
  } else {
    serveStatic(app);
  }

  const PORT = process.env.PORT || 5000;
  httpServer.listen(PORT, () => {
    console.log(`✅ Express server running on http://localhost:${PORT}`);
  });
})();