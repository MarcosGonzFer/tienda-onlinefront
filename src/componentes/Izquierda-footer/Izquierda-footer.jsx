import React from 'react'
 import './Izquierda-footer.css'
 import { Link } from "react-router-dom"; 
function Izquierda() {
  return (
    <div className="zona-izquierda">
    <ul>
    <div className="zona-izquierda">
  <ul>
    <li>
      <Link to="/SobreNosotros">
        <button className="sobrenosotros-footer">Sobre Nosotros</button>
      </Link>
    </li>
    <li>
      <Link to="/Ayuda">
        <button className="ayuda-footer">Ayuda</button>
      </Link>
    </li>
    <li>
      <Link to="/Colaboraciones">
        <button className="colaboraciones-footer">Colaboraciones</button>
      </Link>
    </li>
    <li>
      <Link to="/Tienda">
        <button className="tienda-footer">Tienda</button>
      </Link>
    </li>
    <li>
      <Link to="/Contacto">
        <button className="contacto-footer">Contacto</button>
      </Link>
    </li>
  </ul>
</div>

    </ul>
    </div>
  )
}

export default Izquierda