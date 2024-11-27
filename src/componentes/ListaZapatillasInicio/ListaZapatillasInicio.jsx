import React from 'react'
import './ListaZapatillasInicio.css'
import { Link } from 'react-router-dom';
function ListaZapatillasInicio() {
    const zapatillas = [
        { src: 'imagenes/louisvuitton.png', alt: 'Louis Vuitton', label: 'Louis Vuitton', path: '/Louisvuitton'  },
        { src: 'imagenes/yeezy.png', alt: 'Yeezy', label: 'Yeezy', path: '/Yezzy' },
        { src: 'imagenes/nike.png', alt: 'Nike', label: 'Nike', path: '/Nike'  },
        { src: 'imagenes/adidas.png', alt: 'Adidas', label: 'Adidas', path: '/Adidas'  },
        { src: 'imagenes/newbalance.png', alt: 'New Balance', label: 'New Balance', path: '/NewBalance'  },
        { src: 'imagenes/jordan.png', alt: 'Jordan', label: 'Jordan', path: '/Jordan'  },
        { src: 'imagenes/balenciaga.png', alt: 'Balenciaga', label: 'Balenciaga', path: '/Balenciaga'  },
        { src: 'imagenes/gucci.png', alt: 'Gucci', label: 'Gucci', path: '/Gucci'  },
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

export default ListaZapatillasInicio