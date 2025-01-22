import React from 'react'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';

function Accesorios() {
  const accesorios = [
    {
      src: '/imagenes/louisvuitton10.jpg',
      alt: 'Baúl para zapatillas deportivas',
      label: 'Baúl para zapatillas deportivas',
      price: '180.000 €',
    },
    {
      src: '/imagenes/yeezy10.png',
      alt: 'Estuche de maquillaje House',
      label: 'Estuche de maquillaje House',
      price: '12.980 €',
    },
    {
      src: '/imagenes/Cordones3.png',
      alt: 'Cordones',
      label: 'Solid Gold Cordones',
      price: '2 Millones €',
    },
    {
      src: '/imagenes/adidas10.png',
      alt: 'NMD_Rimowa Backpack',
      label: 'NMD_Rimowa Backpack',
      price: '10.027 €',
    },
    {
      src: '/imagenes/Cordones2.png',
      alt: 'Cordones',
      label: 'Cordones Exclusive: 997G',
      price: '9.900 €',
    },
    {
      src: '/imagenes/Cordones.png',
      alt: 'Cordones',
      label: 'Cordones Off ',
      price: '12.908 €',
    },
    {
      src: '/imagenes/gucci10.png',
      alt: 'Microsoft Xbox x Gucci',
      label: 'Microsoft Xbox x Gucci',
      price: '21.503 €',
    },
    {
      src: '/imagenes/balenciaga10.png',
      alt: 'Le Cagole Shoulder Bag',
      label: 'Le Cagole Shoulder Bag',
      price: '10.821 €',
    },
    {
      src: '/imagenes/dior10.png',
      alt: 'Sorayama Android Ring Set ',
      label: 'Sorayama Android Ring Set ',
      price: '42.989 €',
    },
  ]
  return (
    <div>
      <Header />
      <Nav />
      <div className="lista-zapatillas-colaboraciones">
      <div className="colaboraciones">
        <h1>ACCESORIOS</h1>
      </div>
      {accesorios.map((acce, index) => (
        <Link to="/ListaTiendaColaboraciones" key={index} className="caja-zapatillas-colaboraciones">
          <div>
            <img src={acce.src} alt={acce.alt} />
            <h2>{acce.label}</h2>
            <p className="precio-zapatilla">{acce.price}</p>
          </div>
        </Link>
      ))}
    </div>
      <Footer />

    </div>
  )
}

export default Accesorios