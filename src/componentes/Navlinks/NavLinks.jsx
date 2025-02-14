import React from 'react';
import { Link } from 'react-router-dom'; 
import './NavLinks.css';
import NavBuscador from '../NavBuscador/NavBuscador';

function NavLinks() {
  return (
    <nav className="contenedor-nav">
      
      <div className="nav-item marcas">
        <Link to="#" className="nav-link">Marcas</Link>

        <div className="dropdown-menu">
          <Link to="/Marca/LouisVuitton" className="dropdown-link">Louis Vuitton</Link>
          <Link to="/Marca/Nike" className="dropdown-link">Nike</Link>
          <Link to="/Marca/Gucci" className="dropdown-link">Gucci</Link>
          <Link to="/Marca/Adidas" className="dropdown-link">Adidas</Link>
          <Link to="/Marca/Yeezy" className="dropdown-link">Yeezy</Link>
          <Link to="/Marca/NewBalance" className="dropdown-link">New Balance</Link>
          <Link to="/Marca/Balenciaga" className="dropdown-link">Balenciaga</Link>
          <Link to="/Marca/Jordan" className="dropdown-link">Jordan</Link>
          <Link to="/Marca/Dior" className="dropdown-link">Dior</Link>
          
        </div>
      </div>

      
      <Link to="/Hombres" className="nav-link">Hombres</Link>
      <Link to="/Mujeres" className="nav-link">Mujeres</Link>
      <Link to="/Accesorios" className="nav-link">Accesorios</Link>

      
      <NavBuscador />
    </nav>
  );
}

export default NavLinks;
