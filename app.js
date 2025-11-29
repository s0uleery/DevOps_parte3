const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// ruta inicial
app.get("/", (req, res) => {
  res.send("Ruta inicial funcionando *-*");
});

// ruta nueva
app.get("/nueva", (req, res) => {
  res.send("Nueva ruta para Azure *o* ");
});

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
