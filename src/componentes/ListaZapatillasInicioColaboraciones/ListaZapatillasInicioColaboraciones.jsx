import React from 'react';
import './ListaZapatillasInicioColaboraciones.css';
import { Link } from 'react-router-dom';

function ListaZapatillasInicioColaboraciones() {
  const colaboraciones = [
    { src: 'imagenes/nike_offwhite.png', alt: 'Nike x Off-White', label: 'Nike x Off-White' },
    { src: 'imagenes/adidas_badbunny.png', alt: 'Adidas Campus Bad Bunny', label: 'Adidas Campus Bad Bunny' },
    { src: 'imagenes/nike_travisscott.png', alt: 'Nike x Travis Scott', label: 'Nike x Travis Scott' },
  ];

  return (
    <div className="lista-zapatillas-colaboraciones">
      <div className="colaboraciones">
        <h1>COLABORACIONES</h1>
      </div>
      {colaboraciones.map((colab, index) => (
        <Link to="/ListaTiendaColaboraciones" key={index} className="caja-zapatillas-colaboraciones">
          <div>
            <img src={colab.src} alt={colab.alt} />
            <h2>{colab.label}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListaZapatillasInicioColaboraciones;
