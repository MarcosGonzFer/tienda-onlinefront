const express = require("express");
const { obtenerProductos, obtenerCarrito, agregarAlCarrito, eliminarDelCarrito } = require("../controlador/carritoController");

const router = express.Router();

router.get("/zapatillas", obtenerProductos);
router.get("/", obtenerCarrito);
router.post("/", agregarAlCarrito);
router.delete("/:id", eliminarDelCarrito);

module.exports = router;
