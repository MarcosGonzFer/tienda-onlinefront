import React, { useState, useEffect } from 'react';
import { useProductos } from '../../context/ProductosContext';  
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Hombre.css';

function Hombres() {
  const { filtro } = useProductos(); 
  const [zapatillas, setZapatillas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hombres_zapatillas')
      .then(response => response.json())
      .then(data => setZapatillas(data));
  }, []);

 
  const zapatillasFiltradas = zapatillas.filter(zapatilla =>
    zapatilla.label.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Nav />
      <div className="hombres-container">
        <div className="hombres-header">
          <h1>Hombre</h1>
        </div>
        <div className="lista-zapatillas">
          {zapatillasFiltradas.length > 0 ? (
            zapatillasFiltradas.map((item, index) => (
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

export default Hombres;
