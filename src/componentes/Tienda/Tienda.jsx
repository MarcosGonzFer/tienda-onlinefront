import React, { useState, useEffect } from 'react';
import { useProductos } from '../../context/ProductosContext';  
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Tienda.css';

function Tienda() {
  const { filtro } = useProductos();  
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/productos')
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
      <div className="tienda-container">
        <div className="tienda-header">
          <h1>Tienda</h1>
        </div>
        <div className="lista-producto">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((item) => (
              <div key={item.id} className="caja-zapatillas-tienda">
                <img src={item.src} alt={item.alt} />
                <h2>{item.label}</h2>
                <p className="precio">{item.price}€</p>
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

export default Tienda;
