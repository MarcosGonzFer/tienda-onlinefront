import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Compra.css";

function Compra() {
  const productos = [
    {
      src: "imagenes/louisvuitton.png",
      nombre: "Nike Air Max",
      precio: "6635.95,00€",
      cantidad: 1,
    },
    {
      src: "imagenes/nike_travisscott.png",
      nombre: "Nike Travis Scott",
      precio: "3608,00€",
      cantidad: 2,
    },
    // Añadir más productos
  ];

  const total = productos.reduce(
    (acc, producto) =>
      acc +
      parseFloat(producto.precio.replace("€", "").replace(",", ".")) *
        producto.cantidad,
    0
  );

  return (
    <div>
      <Header />
      <Nav />
      <div className="compra-container">
        <div className="compra-left">
          <h2>Productos en tu carrito</h2>
          {productos.map((producto, index) => (
            <div key={index} className="producto">
              <img src={producto.src} alt={producto.nombre} />
              <div>
                <h3>{producto.nombre}</h3>
                <p>
                  {producto.precio} x {producto.cantidad}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="compra-right">
          <h2>Resumen de Compra</h2>
          <form>
            <div className="campo">
              <label htmlFor="direccion">Dirección de envío</label>
              <input
                type="text"
                id="direccion"
                placeholder="Introduce tu dirección"
              />
            </div>
            <div className="campo">
              <label htmlFor="metodo-pago">Método de pago</label>
              <select id="metodo-pago">
                <option value="tarjeta">Tarjeta de crédito</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
            <div className="total">
              <p>Total a pagar: {total.toFixed(2)}€</p>
            </div>
            <button type="submit" className="btn-compra">
              Confirmar compra
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Compra;
