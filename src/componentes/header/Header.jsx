import React from "react";
import "./Header.css";

import Logo from "../logo/Logo";
import Links from "../links/Links";

function Header() {
  return (
    <div className="headerStyle">
      <Logo />
      <Links />
    </div>
  );
}

export default Header;
