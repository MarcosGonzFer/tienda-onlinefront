import React, { useState, useEffect } from 'react';
import { useProductos } from '../../context/ProductosContext';  
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Hombre.css';

function Hombres() {
  const { filtro } = useProductos();  
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hombres_zapatillas')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error cargando los productos:', error));
  }, []);

  const productosFiltrados = productos.filter(producto =>
    producto.label.toLowerCase().includes(filtro.toLowerCase())
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
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((item) => (
              <Link key={item.id} to={`/hombres_zapatillas/${item.id}`} className="caja-zapatillas">
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

export default Hombres;
