export const verificarLocalhost = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;

  // Verificar si la IP es localhost (127.0.0.1 o ::1)
  if (
    ip === "::1" ||
    ip === "127.0.0.1" ||
    ip === "::ffff:127.0.0.1" ||
    ip === "192.168.0.244"
  ) {
    next(); // Permitir el acceso
  } else {
    res
      .status(403)
      .json({ message: "Acceso denegado. Solo permitido desde localhost." });
  }
};
