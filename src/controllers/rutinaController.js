import { getservice } from "../services/rutinaService.js";
import { postservice } from "../services/rutinaService.js";

export const rutinaget = async (req, res) => {
  try {
    const rutinas = await getservice();
    res.status(200).json(rutinas);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const rutinapost = async (req, res) => {
  try {
    const { nombre, ejercicios } = req.body;
    const newRutina = await postservice(nombre, ejercicios);
    res.status(200).json(newRutina);
  } catch (error) {
    res.status(400).json(error);
  }
};
