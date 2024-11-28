import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Louisvuitton.css';

function Louisvuitton() {
  const louisvuitton = [
    {
      src: 'imagenes/louisvuitton1.png',
      alt: 'LV Trainer',
      label: 'LV Trainer',
      price: '1.130,00€'
    },
    {
      src: 'imagenes/louisvuitton2.png',
      alt: 'LV Skate',
      label: 'LV Skate',
      price: '1.080,00€'
    },
    {
      src: 'imagenes/louisvuitton3.png',
      alt: 'LV Trainer Maxi',
      label: 'LV Trainer Maxi',
      price: '1.390,00€'
    },
    {
      src: 'imagenes/louisvuitton4.png',
      alt: 'LV Stadium',
      label: 'LV Stadium',
      price: '780,00€'
    },
    {
      src: 'imagenes/louisvuitton5.png',
      alt: 'Mocasín LV Capri',
      label: 'Mocasín LV Capri',
      price: '920,00€'
    },
    {
      src: 'imagenes/louisvuitton6.png',
      alt: 'Mule plano LV Sunset Comfort',
      label: 'Mule plano LV Sunset Comfort',
      price: '1.080,00€'
    },
    {
      src: 'imagenes/louisvuitton7.png',
      alt: 'Zapato de salón Met',
      label: 'Zapato de salón Met',
      price: '1.100,00€'
    },
    {
      src: 'imagenes/louisvuitton8.png',
      alt: 'Zapato de salón Shake',
      label: 'Zapato de salón Shake',
      price: '940,00€'
    },
    {
      src: 'imagenes/louisvuitton9.png',
      alt: 'Zapato de salón Archlight',
      label: 'Zapato de salón Archlight',
      price: '920,00€'
    },
   
  ];

  return (
    <div>
      <Header />
      <Nav />
      <div className="louisvi">
          <h1>LOUIS VUITTON</h1>
        </div>
      <div className="lista-zapatillas-louisvi">
        
        {louisvuitton.map((louis, index) => (
          <div key={index} className="caja-zapatillas-louisvi">
            <img src={louis.src} alt={louis.alt} />
            <h2>{louis.label}</h2>
            <p className="precio-zapatilla">{louis.price}</p>
          </div>
        ))}
      <div className='caja-zapatillas-louisvi-exclusivo'>
      
      <div className='caja-imagenes-exclusivo'>
      <img src="imagenes/louisvuitton10.jpg" alt="" />
      <img src="imagenes/louisvuitton12.jpg" alt="" />
      <img src="imagenes/louisvuitton13.jpg" alt="" />
      <img src="imagenes/louisvuitton11.jpg" alt="" />
      </div>
      <h2>Baúl para zapatillas deportivas</h2>
      <p className="precio-zapatilla">180.000,00€</p>
      </div>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default Louisvuitton;
