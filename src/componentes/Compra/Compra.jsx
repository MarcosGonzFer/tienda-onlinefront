import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Compra.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Compra() {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener carrito desde localStorage
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  const irAPasarelaPago = () => {
    navigate("/PasarelaPago"); 
  };

  return (
    <div>
      <Header />
      <Nav />
      <h2>Tu Compra</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <div className="cart-list">
          {carrito.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.src} alt={item.label} className="cart-image" />
              <h3>{item.label}</h3>
              <p>Precio: ${item.price}</p>
              <p><strong>Talla:</strong> {item.talla}</p>
            </div>
          ))}
          <button onClick={irAPasarelaPago} className="btn btn-success">
            Confirmar Compra
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Compra;

