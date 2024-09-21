import { Rutina } from "../models/Rutina.js";
import { Ejercicio } from "../models/ejercicio.js";

export const getservice = async () => {
  const rutinas = await Rutina.find();
  return rutinas;
};

export const postservice = async (nombre, ejercicios) => {
  const newRutina = await Rutina.create({ nombre, ejercicios });
  return newRutina;
};
