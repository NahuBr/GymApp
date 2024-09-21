import { register } from "./register.js";
import { login } from "./login.js";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario
    const username = document.getElementById("username").value;
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;
    const rutinas = [];
    register(username, regEmail, regPassword, rutinas);
  });
