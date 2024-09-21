import path from "path";

export const getController = (req, res) => {
  res.status(200).sendFile(path.resolve("src/public/index.html"));
};
