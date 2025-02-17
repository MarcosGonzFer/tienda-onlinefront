import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Accesorios.css';
import Footer from '../Footer/Footer';
import { useProductos } from '../../context/ProductosContext';

function Accesorios() {
  const { filtro } = useProductos();
  const [accesorios, setAccesorios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/accesorios')
      .then(response => response.json())
      .then(data => setAccesorios(data))
      .catch(error => console.error('Error al cargar los accesorios:', error));
  }, []);

  const accesoriosFiltrados = accesorios.filter(accesorio =>
    accesorio.label.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Nav />
      <div className="accesorios-tienda-container">
        <div className="accesorios-tienda-header">
          <h1>Accesorios</h1>
        </div>
        <div className="lista-accesorios-tienda">
          {accesoriosFiltrados.length > 0 ? (
            accesoriosFiltrados.map((item, index) => (
              <div key={index} className="caja-accesorios-tienda">
                <img src={item.src} alt={item.alt} />
                <h2>{item.label}</h2>
                {item.price && <p className="precio">{item.price}€</p>}
              </div>
            ))
          ) : (
            <p>No se encontraron accesorios que coincidan con tu búsqueda.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accesorios;
