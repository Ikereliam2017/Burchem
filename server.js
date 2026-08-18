const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS, IMG)
app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "img")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "usuario.html"));
});

// Simulación de base de datos en memoria
let ventas = [];

// Recibir compras
app.post("/ventas", (req, res) => {
  const venta = req.body;
  ventas.push(venta);

  console.log("🛒 Nueva venta:", venta);

  res.json({
    mensaje: "Compra registrada correctamente",
    venta
  });
});

// Ver todas las ventas (opcional)
app.get("/ventas", (req, res) => {
  res.json(ventas);
});

// Servidor activo
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});