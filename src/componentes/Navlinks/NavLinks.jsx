import React, { useState } from 'react';
import './NavLinks.css';
import NavBuscador from '../NavBuscador/NavBuscador';

function NavLinks() {
  return (
    <div className="contenedor-nav">
      {}
      <div className="nav-item marcas">
        <a href="#">Marcas</a>
        
        <div className="dropdown-menu">
          <a href="/marcas/louis-vuitton">Louis Vuitton</a>
          <a href="/marcas/nike">Nike</a>
          <a href="/marcas/gucci">Gucci</a>
          <a href="/marcas/adidas">Adidas</a>
        </div>
      </div>

      
      <a href="/hombres">Hombres</a>
      <a href="/mujeres">Mujeres</a>
      <a href="/Accesorios">Accesorios</a>

      
      <NavBuscador />
    </div>
  );
}

export default NavLinks;
