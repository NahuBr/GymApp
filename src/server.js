import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { router } from "./routes/main.js";
import { rutinaRouter } from "./routes/rutinas.js";
import { fileURLToPath } from "url";
import { verificarLocalhost } from "./middleware/verificarlocalhost.js";

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(express.json());

app.use(cors(corsOptions));
app.use(router);

app.use(rutinaRouter);
