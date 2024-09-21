import mongoose from "mongoose";

export const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://gymappnahue:Vc6cMwjSfliNrsz4@gymapp.q5swa.mongodb.net/GymApp?retryWrites=true&w=majority&appName=GymAPP"
  );

  const db = mongoose.connection;

  // Evento para detectar si la conexión es exitosa
  db.on("connected", () => {
    console.log("Conectado a MongoDB correctamente");
  });

  // Evento para detectar si hay errores en la conexión
  db.on("error", (err) => {
    console.error("Error de conexión:", err);
  });

  // Evento para cuando se desconecta
  db.on("disconnected", () => {
    console.log("Desconectado de MongoDB");
  });
};
