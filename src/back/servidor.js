const express = require("express");
const cors = require("cors");
const conectarDB = require('./configuracion/db'); 
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

conectarDB();

const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "", 
  database: "tiendaonline",
});

db.connect(err => {
  if (err) {
    console.error("Error conectando a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL - tiendaonline");
});


const routes = require("./rutas/routes");
app.use("/api/auth", routes);

const carritoRoutes = require("./rutas/carritoRoutes");
app.use("/api/carrito", carritoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));





