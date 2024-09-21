import path from "path"; // Usar import en lugar de require

export default {
  entry: "./src/public/js/index.js", // Archivo de entrada
  output: {
    filename: "bundle.js", // Nombre del archivo de salida
    path: path.resolve("./src/public", "dist"), // Carpeta de salida
  },
  mode: "development", // Modo de desarrollo
};
