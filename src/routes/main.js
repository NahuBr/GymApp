import { Router } from "express";
import path from "path";

import { getController } from "../controllers/mainController.js";
export const router = Router();
router.get("/test", getController);
router.get("/user", (req, res) => {
  res.sendFile(path.resolve("src/public/pages/user.html"));
});
