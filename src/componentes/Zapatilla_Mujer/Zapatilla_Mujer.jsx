import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Zapatilla_Mujer.css';

function ZapatillaMujer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/mujeres_zapatillas/${id}`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(error => console.error('Error cargando el producto:', error));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  const tallas = ['38', '39', '40', '41', '42'];

  const agregarAlCarrito = () => {
    if (!tallaSeleccionada) return;

    const productoConTalla = { ...producto, talla: tallaSeleccionada };
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoActual.push(productoConTalla);
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    alert(`Producto agregado con talla ${tallaSeleccionada}`);
  };

  return (
    <>
      <Header />
      <Nav />
      <div className="contenedor-zapatilla">
        <h1>{producto.label}</h1>
        <img src={producto.src} alt={producto.alt} className="imagen-zapatilla" />
        <p className="precio">Precio: <span>{producto.price}</span></p>
        <div className="tallas">
          <p>Selecciona tu talla:</p>
          <div className="tallas-grid">
            {tallas.map(talla => (
              <button
                key={talla}
                className={`talla-btn ${tallaSeleccionada === talla ? 'seleccionada' : ''}`}
                onClick={() => setTallaSeleccionada(talla)}
              >
                {talla}
              </button>
            ))}
          </div>
        </div>
        <button className="boton-comprar" disabled={!tallaSeleccionada} onClick={agregarAlCarrito}>
          Comprar
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ZapatillaMujer;