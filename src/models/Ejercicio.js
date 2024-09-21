import mongoose from "mongoose";

export const ejercicioSchema = new mongoose.Schema({
  ejercicio: String,
  series: Number,
  repeticiones: Number,
  descanso: Number,
});

export const Ejercicio = mongoose.model("Ejercicio", ejercicioSchema);
