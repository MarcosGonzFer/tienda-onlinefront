import { useState } from "react";

const BotonAñadirCarrito = ({ id }) => {
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/zapatillas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error("Error al añadir al carrito");

      alert("Producto añadido al carrito");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={addToCart} disabled={loading} className="btn btn-primary">
      {loading ? "Añadiendo..." : "Añadir al carrito"}
    </button>
  );
};

export default BotonAñadirCarrito;
