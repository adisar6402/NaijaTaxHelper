import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import { registerRoutes } from "./routes.js";
import { setupStaticFiles } from "./serveStatic.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: any;

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
    const { setupDevServer } = await import("./devSetup.local.js");
    await setupDevServer(app);
  } else {
    setupStaticFiles(app);
  }

  const PORT = process.env.PORT || 5000;
  httpServer.listen(PORT, () => {
    console.log(`✅ Express server running on http://localhost:${PORT}`);
  });
})();