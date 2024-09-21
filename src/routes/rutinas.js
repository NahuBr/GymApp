import { Router } from "express";
import { rutinaget } from "../controllers/rutinaController.js";
import { rutinapost } from "../controllers/rutinaController.js";

export const rutinaRouter = Router();

rutinaRouter.get("/rutina", rutinaget);
rutinaRouter.post("/rutina", rutinapost);
