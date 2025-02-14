import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import "./Links.css";
import CarritoIcono from "../CarritoIcono/CarritoIcono";

function Links() {
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Verifica si hay un token al cargar la página
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserLoggedIn(!!token); // ✅ Si hay token, el usuario está logueado
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    setShowDropdown(false);
    navigate("/"); // ✅ Redirige al home después de cerrar sesión
    window.location.reload();
  };

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navStyle">
      <Link to="/Ofertas" className="linkStyle">Ofertas</Link>
      <Link to="/Tienda" className="linkStyle">Tienda</Link>
      <Link to="/Ayuda" className="linkStyle">Ayuda</Link>

      {userLoggedIn ? (
        <div className="nav-item user-menu" ref={dropdownRef}>
          <div
            className="nav-link"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <AiOutlineUser className="user-icon" />
          </div>

          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={handleLogout} className="dropdown-link">
                Cerrar Sesión
              </button>
            </div>
          )}
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
