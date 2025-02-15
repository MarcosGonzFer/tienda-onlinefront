import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Compra.css";
import { useEffect, useState } from "react";

const Compra = () => {
  const [zapatillas, setZapatillas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/zapatillas")  // 🔹 Nueva URL para obtener zapatillas
      .then((res) => res.json())
      .then((data) => setZapatillas(data))
      .catch((err) => console.error("Error cargando las zapatillas:", err));
  }, []);

  const confirmarCompra = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/confirmar-compra", {
        method: "POST",
      });

      if (!response.ok) throw new Error("Error al confirmar la compra");

      alert("¡Compra confirmada con éxito!");
      setZapatillas([]); 
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <Header />
      <Nav />
      <h2>Tu Compra</h2>
      {zapatillas.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <div className="cart-list">
          {zapatillas.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.nombre} className="cart-image" />
              <h3>{item.nombre}</h3>
              <p>Precio: ${item.precio}</p>
            </div>
          ))}
          <button 
            onClick={confirmarCompra} 
            className="btn btn-success"
          >
            Confirmar Compra
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Compra;

