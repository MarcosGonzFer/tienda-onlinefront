import React from 'react';
import Header from '../Header/Header'; 
import Nav from '../Nav/Nav'; 
import Footer from '../Footer/Footer'; 


function Mujeres() {
  return (
    <div className="mujeres-contenedor">
      {}
      <Header />

      {}
      <Nav />

      {}
      <section className="mujeres-seccion">
        <h1>Sección de Mujeres</h1>
        <p>Descubre nuestras zapatillas y productos exclusivos para mujeres.</p>
        {}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Mujeres;
