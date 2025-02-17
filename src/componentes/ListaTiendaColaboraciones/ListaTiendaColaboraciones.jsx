import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './ListaTiendaColaboraciones.css';

function ListaTiendaColaboraciones() {
  const [colaboraciones, setColaboraciones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/colaboraciones') 
      .then(response => response.json())
      .then(data => setColaboraciones(data))
      .catch(error => console.error('Error al cargar colaboraciones:', error));
  }, []);

  return (
    <div>
      <Header />
      <Nav />
      <div className="colaboraciones-tienda-container">
        <div className="colaboraciones-tienda-header">
          <h1>Colaboraciones</h1> 
        </div>
        <div className="lista-zapatillas-tienda">
          {colaboraciones.map((item, index) => (
            <div key={index} className="caja-zapatillas-tienda">
              <img src={item.src} alt={item.alt} />
              <h2>{item.label}</h2>
              {item.price && <p className="precio">{item.price}€</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListaTiendaColaboraciones;
