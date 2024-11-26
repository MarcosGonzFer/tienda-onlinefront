import React from 'react';
import './NavLinks.css';
import NavBuscador from '../NavBuscador/NavBuscador';
import { Link } from 'react-router-dom'; 

function NavLinks() {
  return (
    <div className='contenedor-nav'>
      <Link to="/marcas">Marcas</Link>
      <Link to="/hombres">Hombres</Link>
      <Link to="/mujeres">Mujeres</Link>
      <Link to="/zapatillas">Zapatillas</Link>
      <NavBuscador />
    </div>
  );
}

export default NavLinks;
