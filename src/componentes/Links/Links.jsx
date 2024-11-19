import React from "react";
import './Links.css'
import CarritoIcono from "../CarritoIcono/CarritoIcono";

function Links() {
  return (
    <div className="navStyle">
      <a href="#" className="linkStyle">
        Ofertas
      </a>
      <a href="#" className="linkStyle">
        Tienda
      </a>
      <a href="#" className="linkStyle">
        Ayuda
      </a>
      <a href="#" className="linkStyle">
        Log-in
      </a>
      <CarritoIcono />
    </div>
  );
}
export default Links;
