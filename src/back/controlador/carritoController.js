const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "", 
  database: "tiendaonline",
});


const obtenerProductos = (req, res) => {
  db.query("SELECT * FROM zapatillas", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};


const obtenerCarrito = (req, res) => {
  db.query("SELECT * FROM carrito", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};


const agregarAlCarrito = (req, res) => {
  const { id, src, alt, label, price } = req.body;
  db.query(
    "INSERT INTO carrito (id, src, alt, label, price) VALUES (?, ?, ?, ?, ?)",
    [id, src, alt, label, price],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Producto añadido al carrito" });
    }
  );
};


const eliminarDelCarrito = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM carrito WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Zapatilla eliminado del carrito" });
  });
};

module.exports = { obtenerProductos, obtenerCarrito, agregarAlCarrito, eliminarDelCarrito };
