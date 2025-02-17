import React, { useState, useEffect } from 'react';
import { useProductos } from '../../context/ProductosContext';  
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Mujeres.css';

function Mujeres() {
  const { filtro } = useProductos(); 
  const [mujeres, setMujeres] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/mujeres_zapatillas')
      .then(response => response.json())
      .then(data => setMujeres(data));
  }, []);

  
  const mujeresFiltradas = mujeres.filter(mujer =>
    mujer.label.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Nav />
      <div className="mujeres-container">
        <div className="mujeres-header">
          <h1>Mujeres</h1>
        </div>
        <div className="lista-zapatillas">
          {mujeresFiltradas.length > 0 ? (
            mujeresFiltradas.map((item, index) => (
              <div key={index} className="caja-zapatillas">
                <img src={item.src} alt={item.alt} />
                <h2>{item.label}</h2>
                <p className="precio">{item.price}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mujeres;
