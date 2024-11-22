import React from 'react'
import './PerdidaContraseña.css'
import { Link } from "react-router-dom"; 

function PerdidaContraseña() {
  return (
    <div className="login-container">
      <Link to="/Login">
        <button className='login'>Volver</button>
      </Link>
      <form className="login-formulario">
        <h2>¿Perdiste tu contraseña? Por favor, introduce tu nombre de usuario o correo electrónico.</h2>
        <div className="formulario-grupos">
          <label htmlFor="name">Nombre de usuario o correo electrónico
          :</label>
          <input
            type="text"
            id="nameGmail"
          />
        </div>
        <button type="submit" className="login-boton">Restablecer Contraseña</button>
        </form>
        </div>
  )
}

export default PerdidaContraseña