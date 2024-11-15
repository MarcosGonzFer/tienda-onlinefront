import React from 'react'
import './Derecha-footer.css'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
function Derecha() {
  return (
    <div className="zona-derecha">
    <ul>
      <li><a className='legal'  href="#">Aviso Legal</a></li>
      <li><a className='cookies'  href="#">Política de cookies</a></li>
    </ul>
    <div className="redes-sociales">
      <a  href="#"><i className="twitter"></i><AiFillTwitterSquare /></a>
      <a href="#"><i className="instagram"></i><AiFillInstagram /></a>
      <a href="#"><i className="facebook"></i><AiFillFacebook /></a>
    </div>
  </div>
  )
}

export default Derecha