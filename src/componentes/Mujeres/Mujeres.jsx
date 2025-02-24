import React, { useState, useEffect } from 'react';
import { useProductos } from '../../context/ProductosContext';  
import { Link } from 'react-router-dom';
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
      .then(data => setMujeres(data))
      .catch(error => console.error('Error cargando los productos:', error));
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
            mujeresFiltradas.map((item) => (
              <Link key={item.id} to={`/mujeres_zapatillas/${item.id}`} className="caja-zapatillas">
                <img src={item.src} alt={item.alt} />
                <h2>{item.label}</h2>
                <p className="precio">{item.price}€</p>
              </Link>
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