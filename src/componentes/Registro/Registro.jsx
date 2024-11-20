import React from 'react'
import './Registro.css'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";;

function Login() {
  return (
<div className="login-container">
      <button className='login'>Iniciar Sesion</button>
      <form className="login-formulario">
        <h2>Crear Cuenta</h2>
        <div className="formulario-grupos">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="formulario-grupos">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="formulario-grupos">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="formulario-grupos">
          <label htmlFor="password">Repita la Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Repita tu contraseña"
          />
        </div>
        <button type="submit" className="login-boton">Registrarse</button>
      </form>
    </div>
  );
}

export default Login