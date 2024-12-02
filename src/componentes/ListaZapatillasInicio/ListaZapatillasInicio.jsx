import React from 'react';
import './ListaZapatillasInicio.css';
import { Link } from 'react-router-dom';

function ListaZapatillasInicio() {
  const zapatillas = [
    { src: 'imagenes/louisvuitton.png', alt: 'Louis Vuitton', label: 'Louis Vuitton', path: '/Marca/LouisVuitton' },
    { src: 'imagenes/yeezy.png', alt: 'Yeezy', label: 'Yeezy', path: '/Marca/Yeezy' },
    { src: 'imagenes/nike.png', alt: 'Nike', label: 'Nike', path: '/Marca/Nike' },
    { src: 'imagenes/adidas.png', alt: 'Adidas', label: 'Adidas', path: '/Marca/Adidas' },
    { src: 'imagenes/newbalance.png', alt: 'New Balance', label: 'New Balance', path: '/Marca/NewBalance' },
    { src: 'imagenes/jordan.png', alt: 'Jordan', label: 'Jordan', path: '/Marca/Jordan' },
    { src: 'imagenes/balenciaga.png', alt: 'Balenciaga', label: 'Balenciaga', path: '/Marca/Balenciaga' },
    { src: 'imagenes/gucci.png', alt: 'Gucci', label: 'Gucci', path: '/Marca/Gucci' },
    { src: 'imagenes/dior.png', alt: 'Gucci', label: 'Dior', path: '/Marca/Dior' },
  ];

  return (
    <div className="lista-zapatillas">
      {zapatillas.map((zap, index) => (
        <Link key={index} to={zap.path} className="caja-zapatillas">
          <div>
            <img src={zap.src} alt={zap.alt} />
            <p>{zap.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListaZapatillasInicio;
