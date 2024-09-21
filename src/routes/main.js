import { Router } from "express";
import { getController } from "../controllers/mainController.js";
export const router = Router();
router.get("/test", getController);
