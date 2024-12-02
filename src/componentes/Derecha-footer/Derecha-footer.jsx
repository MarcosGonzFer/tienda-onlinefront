import React from 'react'
import './Derecha-footer.css'
import { Link } from "react-router-dom"; 
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
function Derecha() {
  return (
    <div className="zona-derecha">
    <ul>
    <li>
      <Link to="/AvisoLegal">
        <button className="legal">Aviso Legal</button>
      </Link>
    </li>
    <li>
      <Link to="/PoliticaCookies">
        <button className="cookies">Politica de Cookies</button>
      </Link>
    </li>
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