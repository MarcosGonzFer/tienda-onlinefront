import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import "./Links.css";
import CarritoIcono from "../CarritoIcono/CarritoIcono";

function Links() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    navigate("/"); // Redirige al home después de cerrar sesión
  };

  return (
    <div className="navStyle">
      <Link to="/Ofertas" className="linkStyle">Ofertas</Link>
      <Link to="/Tienda" className="linkStyle">Tienda</Link>
      <Link to="/Ayuda" className="linkStyle">Ayuda</Link>

      {userLoggedIn ? (
        <div className="nav-item user-dropdown">
          <div className="user-icon">
            <AiOutlineUser />
          </div>
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        </div>
      ) : (
        <Link to="/Login" className="linkStyle">Log-in</Link>
      )}

      <Link to="/Compra">
        <CarritoIcono />
      </Link>
    </div>
  );
}

export default Links;
