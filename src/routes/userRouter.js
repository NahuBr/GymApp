import { Router } from "express";
import { postController } from "../controllers/userController.js";
import { loginController } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post("/register", postController);
userRouter.post("/login", loginController);
