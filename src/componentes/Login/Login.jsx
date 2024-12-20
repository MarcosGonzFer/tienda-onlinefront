import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";;

function Login() {
  return (
<div className="login-container">
      <Link to="/Registro">
        <button className='registrarse'>Registrar</button>
      </Link>
      <form className="login-formulario">
        <h2>Iniciar Sesión</h2>
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
        <button type="submit" className="login-boton">Ingresar</button>
        <Link to="/PerdidaContraseña">
          <button type="text" className='login-olvidado-contraseña'>¿Has olvidado tu contraseña?</button>
        </Link>
        <button type="submit" className="login-boton-continuar"><FaGoogle/> Continuar con Google</button>
        <button type="submit" className="login-boton-continuar"><FaFacebook />Continuar con Facebook</button>
        <button type="submit" className="login-boton-continuar"><FaApple/>Continuar con Apple</button>
      </form>
    </div>
  );
}

export default Login