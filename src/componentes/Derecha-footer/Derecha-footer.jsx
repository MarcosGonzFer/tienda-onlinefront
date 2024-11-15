import React from 'react'
import './Derecha-footer.css'

function Derecha() {
  return (
    <div className="zona-derecha">
    <ul>
      <li><a className='legal'  href="#">Aviso Legal</a></li>
      <li><a className='cookies'  href="#">Política de cookies</a></li>
    </ul>
    <div className="redes-sociales">
      <a  href="#"><i className="twitter"></i><img src="imagenes/twitter.png" alt="" /></a>
      <a href="#"><i className="instagram"></i><img src="imagenes/instagram.png" alt="" /></a>
      <a href="#"><i className="facebook"></i><img src="imagenes/facebook.png" alt="" /></a>
    </div>
  </div>
  )
}

export default Derecha