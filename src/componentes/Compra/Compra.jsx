import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Compra.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillCloseSquare } from "react-icons/ai";


function Compra() {
  const [carrito, setCarrito] = useState([]);
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    apartamento: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const formularioCompleto = Object.values(formulario).every((campo) => campo.trim() !== "");

  const eliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const irAPasarelaPago = () => {
    if (formularioCompleto) {
      navigate("/PasarelaPago");
    }
  };

  return (
    <div>
      <Header />
      <Nav />
      <h2>Tu Compra</h2>
      <div className="compra-container">
        <div className="cart-section">
          {carrito.length === 0 ? (
            <p>No hay productos en tu carrito.</p>
          ) : (
            <div className="cart-list">
            {carrito.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.src} alt={item.label} className="cart-image" />
                <div>
                  <h3>{item.label}</h3>
                  <p>Precio: ${item.price}</p>
                  <p><strong>Talla:</strong> {item.talla}</p>
                </div>
                <AiFillCloseSquare
                  className="remove-button"
                  onClick={() => eliminarProducto(index)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
        <div className="form-section">
          <h3>Datos de Envío</h3>
          <form>
            <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={manejarCambio} required />
            <input type="text" name="apellidos" placeholder="Apellidos" value={formulario.apellidos} onChange={manejarCambio} required />
            <input type="text" name="direccion" placeholder="Dirección" value={formulario.direccion} onChange={manejarCambio} required />
            <input type="text" name="apartamento" placeholder="Apartamento (piso, letra)" value={formulario.apartamento} onChange={manejarCambio} required />
            <button type="button" onClick={irAPasarelaPago} className="btn btn-success" disabled={!formularioCompleto}>
              Confirmar Compra
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Compra;


