import axios from "axios";

export async function login(mail, password) {
  try {
    const response = await axios.post("http://192.168.0.244:3000/login", {
      mail: mail,
      password: password,
    });

    if (response.status === 200) {
      // Redirigir si el login es exitoso
      const user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = response.data.redirectUrl;
    }
  } catch (error) {
    // Verificar el estado de la respuesta del error
    if (error.response && error.response.status === 401) {
      alert("Usuario o contraseña incorrectos");
    } else {
      alert("Error en la solicitud: " + (error.message || error));
    }
  }
}
