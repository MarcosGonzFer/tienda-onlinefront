import React from 'react';
import './Section.css';
import FotosInicio from '../FotosInicio/FotosInicio';
import ListaZapatillasInicio from '../ListaZapatillasInicio/ListaZapatillasInicio';
import ListaZapatillasInicioColaboraciones from '../ListaZapatillasInicioColaboraciones/ListaZapatillasInicioColaboraciones';

function Section() {
  return (

    <div>
      <FotosInicio />
      <ListaZapatillasInicio />
      <ListaZapatillasInicioColaboraciones />
    </div>
  );
}

export default Section;
