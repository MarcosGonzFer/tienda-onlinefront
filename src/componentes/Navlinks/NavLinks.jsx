import React from 'react';
import './NavLinks.css';
import NavBuscador from '../NavBuscador/NavBuscador';
import { Link } from 'react-router-dom'; 

function NavLinks() {
  return (
    <div className='contenedor-nav'>
      <Link to="/Marcas">Marcas</Link>
      <Link to="/Hombres">Hombres</Link>
      <Link to="/Mujeres">Mujeres</Link>
      <Link to="/Zapatillas">Zapatillas</Link>
      <NavBuscador />
    </div>
  );
}

export default NavLinks;
