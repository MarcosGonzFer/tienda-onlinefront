import React from "react";
import { Link } from "react-router-dom"; 
import './Links.css';
import CarritoIcono from "../CarritoIcono/CarritoIcono";

function Links() {
  return (
    <div className="navStyle">
      <Link to="/Ofertas" className="linkStyle">
        Ofertas
      </Link>
      <Link to="/tienda" className="linkStyle">
        Tienda
      </Link>
      <Link to="/ayuda" className="linkStyle">
        Ayuda
      </Link>
      <Link to="/Login" className="linkStyle">
        Log-in
      </Link>
      <CarritoIcono />
    </div>
  );
}

export default Links;