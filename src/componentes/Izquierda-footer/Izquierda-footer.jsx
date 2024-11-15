import React from 'react'
   import './Izquierda-footer.css'
function Izquierda() {
  return (
    <div className="zona-izquierda">
    <ul>
      <li><a className='Nosotros' href="#">Sobre Nosotros</a></li>
      <li><a className='Ayuda'   href="#">Ayuda</a></li>
      <li><a className='Colaboraciones' href="#">Colaboraciones</a></li>
      <li><a className='Tienda'  href="#">Tienda</a></li>
      <li><a className='Contacto'  href="#">Contacto</a></li>
    </ul>
    </div>
  )
}

export default Izquierda