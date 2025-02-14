import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import './Login.css';

function Login() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const response = await fetch('http://localhost:5000/api/auth/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); 
        setFormData({ email: '', password: '' }); 
        navigate('/'); 
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error en el servidor:', error);
      alert('Error al intentar iniciar sesión');
    }
  };

  return (
    <div className="login-container">
      <Link to="/Registro">
        <button className="registrarse">Registrar</button>
      </Link>
      <form className="login-formulario" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div className="formulario-grupo">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-boton">Ingresar</button>
        <Link to="/PerdidaContraseña">
          <button type="button" className="login-olvidado-contraseña">
            ¿Has olvidado tu contraseña?
          </button>
        </Link>
        <button type="button" className="login-boton-continuar">
          <FaGoogle /> Continuar con Google
        </button>
        <button type="button" className="login-boton-continuar">
          <FaFacebook /> Continuar con Facebook
        </button>
        <button type="button" className="login-boton-continuar">
          <FaApple /> Continuar con Apple
        </button>
      </form>
    </div>
  );
}

export default Login;

