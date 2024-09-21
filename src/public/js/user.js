const user = JSON.parse(localStorage.getItem("user"));

document.getElementsByTagName("h1")[0].innerHTML = `Bienvenido ${user.nombre}`;
