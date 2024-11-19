import React from "react";
import "./Header.css";

import Logo from "../Logo/Logo";
import Links from "../Links/Links";

function Header() {
  return (
    <div className="headerStyle">
      <Logo />
      <Links />
    </div>
  );
}

export default Header;
