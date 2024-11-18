import React from 'react'
import './ListaZapatillasInicio.css'
function ListaZapatillasInicio() {
    const zapatillas = [
        { src: 'imagenes/louisvuitton.png', alt: 'Louis Vuitton', label: 'Louis Vuitton' },
        { src: 'imagenes/yeezy.png', alt: 'Yeezy', label: 'Yeezy' },
        { src: 'imagenes/nike.png', alt: 'Nike', label: 'Nike' },
        { src: 'imagenes/adidas.png', alt: 'Adidas', label: 'Adidas' },
        { src: 'imagenes/newbalance.png', alt: 'New Balance', label: 'New Balance' },
        { src: 'imagenes/jordan.png', alt: 'Jordan', label: 'Jordan' },
        { src: 'imagenes/balenciaga.png', alt: 'Balenciaga', label: 'Balenciaga' },
        { src: 'imagenes/gucci.png', alt: 'Gucci', label: 'Gucci' },
      ];
    
      return (
        <div className="lista-zapatillas">
          {zapatillas.map((zap, index) => (
            <div key={index} className="caja-zapatillas">
              <img src={zap.src} alt={zap.alt} />
              <p>{zap.label}</p>
            </div>
          ))}
        </div>
      );
    }

export default ListaZapatillasInicio