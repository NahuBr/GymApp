import axios from "axios";

//186.127.47.23
//192.168.0.244

export async function register(nombre, mail, password, rutinas) {
  try {
    const response = await axios.post("http://192.168.0.244:3000/register", {
      nombre: nombre,
      mail: mail,
      password: password,
      rutinas: rutinas,
    });
    if (response.status === 200) {
      const user = response.data.newUser;
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = response.data.redirectUrl;
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("Usuario o contraseña incorrectos");
    } else {
      alert("Error en la solicitud: " + (error.message || error));
    }
  }
}
