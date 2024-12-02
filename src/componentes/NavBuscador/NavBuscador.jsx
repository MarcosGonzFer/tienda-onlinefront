import React, { useState } from 'react';
import './NavBuscador.css';
import { AiOutlineSearch } from "react-icons/ai";

function NavBuscador() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const manejarCambio = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  return (
    <div className="contenedor-buscador">
      <div className="input-con-icono">
        <input
          type="text"
          value={terminoBusqueda}
          onChange={manejarCambio}
          placeholder="Buscar..."
          className="input-buscador"
        />
        <AiOutlineSearch className="icono-lupa" />
      </div>
    </div>
  );
}

export default NavBuscador;
