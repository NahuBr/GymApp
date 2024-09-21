import { app } from "./src/server.js";
import { dbCon } from "./src/config/dbCon.js";

dbCon().then((res) => {
  app.listen(3000, "0.0.0.0", () => {
    console.log("Servidor escuchando en el puerto");
  });
});
