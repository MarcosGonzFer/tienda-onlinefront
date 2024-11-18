import React from 'react'
import './NavLinks.css'
import NavBuscador from '../NavBuscador/NavBuscador'


function NavLinks() {
  return (
    <div className='contenedor-nav'>
    <a href="#">Marcas</a>
    <a href="#">Hombres</a>
    <a href="#">Mujeres</a>
    <a href="#">Zapatillas</a>
    <NavBuscador/>

</div>
  )
}

export default NavLinks