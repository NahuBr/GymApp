import { Usuario } from "../models/Usuario.js";

export const postService = async (nombre, mail, password, rutinas) => {
  // Verificar si el usuario ya existe
  const existingUser = await Usuario.findOne({ mail });
  console.log(existingUser);

  if (existingUser) {
    throw new Error("El usuario ya existe con ese correo"); // O puedes devolver un mensaje
  }

  // Crear un nuevo usuario si no existe
  const newUser = await Usuario.create({ nombre, mail, password, rutinas });
  return newUser;
};

export const getUser = async (mail, password) => {
  const user = await Usuario.findOne({ mail, password });
  if (user) {
    return user;
  } else {
    throw new Error("Usuario no encontrado");
  }
};
