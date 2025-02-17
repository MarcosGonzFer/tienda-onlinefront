import React, { useEffect, useState } from 'react';
import './ListaZapatillasInicioColaboraciones.css';
import { Link } from 'react-router-dom';

function ListaZapatillasInicioColaboraciones() {
  const [colaboraciones, setColaboraciones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/colaboraciones')
      .then(response => response.json())
      .then(data => setColaboraciones(data))
      .catch(error => console.error('Error al cargar colaboraciones:', error));
  }, []);

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
