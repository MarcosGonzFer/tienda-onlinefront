import React from 'react';
import './Section.css';

function Section() {
  return (
    <div>
      {/* Imagen de inicio */}
      <div className='contenedor-imagen-inicio'>
        <img src="imagenes/fotozapasinicio.jpg" alt="imagen de la foto de inicio" className='imagen-inicio' />
        <img src="imagenes/fotozapasinicio2.jpg" alt="imagen de la foto de inicio" className='imagen-inicio' />
        <img src="imagenes/fotozapasinicio3.jpg" alt="imagen de la foto de inicio" className='imagen-inicio' />
      </div>

      {/* Lista de zapatillas */}
      <div className='lista-zapatillas'>
        <div className='caja-zapatillas'>
          <img src="imagenes/louisvuitton.png" alt="Louis Vuitton" />
          <p>Louis Vuitton</p>
        </div>
        <div className='caja-zapatillas'>
          <img src="imagenes/yeezy.png" alt="Yeezy" />
          <p>Yeezy</p>
        </div>
        <div className='caja-zapatillas'>
          <img src="imagenes/nike.png" alt="Nike" />
          <p>Nike</p>
        </div>
        <div className='caja-zapatillas'>
          <img src="imagenes/adidas.png" alt="Adidas" />
          <p>Adidas</p>
        </div>
        <div className='caja-zapatillas'>
          <img src="imagenes/newbalance.png" alt="New Balance" />
          <p>New Balance</p>
        </div>
        <div className='caja-zapatillas'>
          <img src="imagenes/jordan.png" alt="Jordan" />
          <p>Jordan</p>
        </div>
        <div className='caja-zapatillas'>
          <img src="imagenes/balenciaga.png" alt="Balenciaga" />
          <p>Balenciaga</p>
        </div>
        <div className='caja-zapatillas'>
          <img src="imagenes/gucci.png" alt="Gucci" />
          <p>Gucci</p>
        </div>


        {/* Título de colaboraciones */}
        <div className='colaboraciones'>
          <h2>COLABORACIONES</h2>
        </div>

        {/* Colaboraciones */}
        <div className='caja-zapatillas'>
          <img src="imagenes/nike_offwhite.png" alt="Nike x Off-White" />
          <p>Nike x Off-White</p>
        </div>
        <div className='caja-zapatillas'>
          <img src="imagenes/adidas_badbunny.png" alt="Adidas Campus Bad Bunny" />
          <p>Adidas Campus Bad Bunny</p>
        </div>
        <div className='caja-zapatillas'>
          <img src="imagenes/nike_travisscott.png" alt="Nike x Travis Scott" />
          <p>Nike x Travis Scott</p>
        </div>
      </div>
    </div>
  );
}

export default Section;
