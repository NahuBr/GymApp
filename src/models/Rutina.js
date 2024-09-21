import mongoose from "mongoose";
import { ejercicioSchema } from "./ejercicio.js";

export const rutinaSchema = new mongoose.Schema({
  nombre: String,
  ejercicios: [ejercicioSchema],
});

export const Rutina = mongoose.model("Rutina", rutinaSchema);
