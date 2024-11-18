import React from 'react';
import './Footer.css'; 
import Izquierda from '../Izquierda-footer/Izquierda-footer'
import Centro from '../Centro-footer/Centro-footer';
import Derecha from '../Derecha-footer/Derecha-footer';
function Footer() {
  return (
    <footer className="footer">

    <Izquierda/>
    <Centro/>
    <Derecha/>

    </footer>
  );
}

export default Footer;
