import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './Hombres.css';

function Hombres() {
  return (
    <div>
      <Header />
      <Nav />
      <section className="hombres-section">
        <div className="grid-container">
          <div className="grid-item">
            <img src="/imagenes/HombresZapas.png" alt="Hombre Zapatilla 1" />
            <p className="marca">Nike</p>
          </div>
          <div className="grid-item">
            <img src="/imagenes/HombresZapas.png" alt="Hombre Zapatilla 2" />
            <p className="marca">Adidas</p>
          </div>
          <div className="grid-item">
            <img src="/imagenes/HombresZapas.png" alt="Hombre Zapatilla 3" />
            <p className="marca">Louis Vuitton</p>
          </div>
          <div className="grid-item">
            <img src="/imagenes/HombresZapas.png" alt="Hombre Zapatilla 4" />
            <p className="marca">Gucci</p>
          </div>
          <div className="grid-item">
            <img src="/imagenes/HombresZapas.png" alt="Hombre Zapatilla 5" />
            <p className="marca">Valenciaga</p>
          </div>
          <div className="grid-item">
            <img src="/imagenes/HombresZapas.png" alt="Hombre Zapatilla 6" />
            <p className="marca">Dior</p>
          </div>
          <div className="grid-item">
            <img src="/imagenes/HombresZapas.png" alt="Hombre Zapatilla 7" />
            <p className="marca">Dolce Gabbana</p>
          </div>
          <div className="grid-item">
            <img src="/imagenes/HombresZapas.png" alt="Hombre Zapatilla 8" />
            <p className="marca">Off-White</p>
          </div>
          <div className="grid-item">
            <img src="/imagenes/HombresZapas.png" alt="Hombre Zapatilla 9" />
            <p className="marca">Jordan</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Hombres;
