import { postService } from "../services/userService.js";
import { getUser } from "../services/userService.js";

export const postController = async (req, res) => {
  try {
    const { nombre, mail, password, rutinas } = req.body;
    const newUser = await postService(nombre, mail, password, rutinas);
    res.status(200).json({ redirectUrl: "/user", newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const { mail, password } = req.body;
    const user = await getUser(mail, password);

    if (user) {
      res.status(200).json({ redirectUrl: "/user", user });
    } else {
      res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
};
