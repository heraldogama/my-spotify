import app from "./app.js";

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor está ativo na porta ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("root");
});
