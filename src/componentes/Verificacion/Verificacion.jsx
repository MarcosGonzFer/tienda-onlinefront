import React, { useState } from 'react';
import './Verificacion.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function Verificacion() {
  const [verification, setCodigo] = useState(''); 
  const [producto, setProducto] = useState(null);  
  const [error, setError] = useState('');  

  
  const buscarProducto = () => {
    fetch(`http://localhost:3000/productos/verificacion/${verification}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setProducto(null);  
          setError(data.error);  
        } else {
          setProducto(data);  
          setError('');
        }
      })
      .catch(error => {
        console.error('Error al buscar el producto:', error);
        setError('Error al obtener el producto');
        setProducto(null);
      });
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="verificacion-container">
        <h1>Verificación de Producto</h1>
        <div className="buscador-container">
          <input
            type="text"
            value={verification}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Ingresa tu código de verificación"
          />
          <button onClick={buscarProducto}>Buscar</button>
        </div>

        {error && <p className="error">{error}</p>}

        {producto && (
          <div className="producto-found">
          <img src={producto.src} alt={producto.alt} />
            <h2>{producto.label}</h2>
            <p className="precio">{producto.price}</p>
            <p className="codigo-verificacion">
              Código de verificación: {producto.verification}
            </p>
          </div>
        )}

        {!producto && !error && (
          <p>Busca un producto ingresando el código de verificación.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Verificacion;
