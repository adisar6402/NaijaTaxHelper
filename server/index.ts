import express from "express";
import { createServer } from "http";
import { contactHandler } from "./contactHandler";
import { registerRoutes } from "./routes";
import dotenv from "dotenv";
import { serveStatic } from "./vite";

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

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
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      console.log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(app);

  const isDev = app.get("env") === "development";

  if (isDev) {
    // ⛔ Avoid bundling Vite in production
    const { setupVite } = await import("./vite.js");
    await setupVite(app, httpServer);
  } else {
    serveStatic(app);
  }

  const PORT = process.env.PORT || 5000;
  httpServer.listen(PORT, () => {
    console.log(`✅ Express server running on http://localhost:${PORT}`);
  });
})();