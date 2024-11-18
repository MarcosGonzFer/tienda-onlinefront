import React from "react";
import "./Header.css";
import CarritoIcono from "../carritoIcono/CarritoIcono";
import Logo from "../logo/Logo";
import Links from "../links/Links";

function Header() {
  return (
    <div className="headerStyle">
      <Logo />
      <Links />
      <CarritoIcono />
    </div>
  );
}

export default Header;
