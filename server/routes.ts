import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the 3D model files from the attached_assets directory
  app.use("/attached_assets", (req, res, next) => {
    const filePath = path.join(__dirname, "..", "attached_assets", req.path);
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(`Error serving file ${filePath}:`, err);
        next();
      }
    });
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
