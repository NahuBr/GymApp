import axios from "axios";

(async function obtenerDatos() {
  try {
    const respuesta = await axios.get("http://186.127.47.23:3000/rutina");
    const div = document.getElementById("div");
    div.innerHTML = "GymAPP";
  } catch (error) {
    const div = document.getElementById("div");
    div.innerHTML = error;
    try {
      const respuesta = await axios.get("http://192.168.0.244:3000/rutina");
      const div = document.getElementById("div");
      div.innerHTML = "GymAPP";
    } catch (error) {
      const div = document.getElementById("div");
      div.innerHTML = error;
    }
  }
})();
