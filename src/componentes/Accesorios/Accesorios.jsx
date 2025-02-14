import React, { useState, useEffect } from 'react'; // Importar useState y useEffect
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Accesorios() {
  const [accesorios, setAccesorios] = useState([]); 

  useEffect(() => {
   
    fetch('http://localhost:3000/accesorios')
      .then(response => response.json())
      .then(data => setAccesorios(data)); 
  }, []); 

  return (
    <div>
      <Header />
      <Nav />
      <div className="lista-zapatillas-colaboraciones">
        <div className="colaboraciones">
          <h1>ACCESORIOS</h1>
        </div>
        <div>
          {accesorios.map((item, index) => (
            <Link to="/ListaTiendaColaboraciones" key={index} className="caja-zapatillas-colaboraciones">
                <img src={item.src} alt={item.alt} />
                <h2>{item.label}</h2>
                <p className="precio-zapatilla">{item.price}</p>
            </Link>
          ))}
        </div>
        </div>
      <Footer />
    </div>
  );
}

export default Accesorios;
