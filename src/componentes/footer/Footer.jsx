import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="zona-izquierda">
        <ul>
          <li><a className='Nosotros' href="#">Sobre Nosotros</a></li>
          <li><a className='Ayuda'   href="#">Ayuda</a></li>
          <li><a className='Colaboraciones' href="#">Colaboraciones</a></li>
          <li><a className='Tienda'  href="#">Tienda</a></li>
          <li><a className='Contacto'  href="#">Contacto</a></li>
        </ul>
      </div>

      <div className="zona-centro">
        <p>No te pierdas ninguna de nuestras ofertas</p>
        <div className="Correo">
          <input type="email" placeholder="Correo" />
          <button type="submit">x</button>
        </div>
      </div>

      <div className="zona-derecha">
        <ul>
          <li><a className='legal'  href="#">Aviso Legal</a></li>
          <li><a className='cookies'  href="#">Política de cookies</a></li>
        </ul>
        <div className="redes-sociales">
          <a  href="#"><i className="twitter"></i></a>
          <a href="#"><i className="instagram"></i></a>
          <a href="#"><i className="facebook"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
