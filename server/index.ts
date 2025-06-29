import express, { Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { setupVite, serveStatic } from "./vite";
import { contactHandler } from "./contactHandler";
import { registerRoutes } from "./routes"; // ✅ ADD THIS
import dotenv from "dotenv";
dotenv.config();

const app = express();
const httpServer = createServer(app);

// ✅ Needed to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Logging Middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

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

// ✅ Register ALL API routes
(async () => {
  await registerRoutes(app); // ✅ Register backend logic

  if (app.get("env") === "development") {
    await setupVite(app, httpServer);
  } else {
    serveStatic(app);
  }

  const PORT = 5000;
  httpServer.listen(PORT, () => {
    console.log(`✅ Express API server running on http://localhost:${PORT}`);
  });
})();

// 🔁 This one line can be removed now because `registerRoutes()` already includes the contactHandler route
// app.post("/api/contact", contactHandler);
