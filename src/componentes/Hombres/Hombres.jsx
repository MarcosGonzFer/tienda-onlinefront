import React from 'react';
import Header from '../Header/Header'; 
import Nav from '../Nav/Nav'; 
import Footer from '../Footer/Footer'; 


function Hombres() {
  return (
    <div className="hombres-contenedor">
      {}
      <Header />

      {}
      <Nav />

      {/* Sección principal */}
      <section className="hombres-seccion">
        <h1>Sección de Hombres</h1>
        <p>Explora nuestras zapatillas y productos exclusivos para hombres.</p>
        {/* Aquí puedes añadir más contenido específico para la sección de hombres */}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Hombres;
