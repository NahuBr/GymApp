import mongoose from "mongoose";
import { rutinaSchema } from "./Rutina.js";

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  mail: String,
  password: String,
  rutinas: [rutinaSchema],
});

export const Usuario = mongoose.model("Usuario", usuarioSchema);
