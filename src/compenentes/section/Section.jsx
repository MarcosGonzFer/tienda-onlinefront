import React from 'react';
import './Section.css';
import FotosInicio from '../FotosInicio/FotosInicio';

function Section() {
  return (
    <div>
    
    <FotosInicio/> 

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

        <div className='lista-zapatillas-colaboraciones'>
        <div className='colaboraciones'>
          <h1>COLABORACIONES</h1>
        </div>

        <div className='caja-zapatillas-colaboraciones'>
          <img src="imagenes/nike_offwhite.png" alt="Nike x Off-White" />
          <h2>Nike x Off-White</h2>
        </div>
        <div className='caja-zapatillas-colaboraciones'>
          <img src="imagenes/adidas_badbunny.png" alt="Adidas Campus Bad Bunny" />
          <h2>Adidas Campus Bad Bunny</h2>
        </div>
        <div className='caja-zapatillas-colaboraciones'>
          <img src="imagenes/nike_travisscott.png" alt="Nike x Travis Scott" />
          <h2>Nike x Travis Scott</h2>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Section;
