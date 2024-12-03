import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './ListaTiendaColaboraciones.css';

function ListaTiendaColaboraciones() {
 const tiendaData = {
        Tienda: {
            title: 'Colaboraciones',
            className: 'colaboraciones',
            zapatillas: [
              { src: 'imagenes/nike_offwhite.png', alt: 'Nike x Off-White', label: 'Nike x Off-White', price: '1.847 €'},
              { src: 'imagenes/adidas_badbunny.png', alt: 'Adidas Campus Bad Bunny', label: 'Adidas Campus Bad Bunny', price: '1.847 €' },
              { src: 'imagenes/nike_travisscott.png', alt: 'Nike x Travis Scott', label: 'Nike x Travis Scott', price: '1.847 €' },
              { src: 'imagenes/nike_offwhite.png', alt: 'Nike x Off-White', label: 'Nike x Off-White', price: '1.847 €'},
              { src: 'imagenes/adidas_badbunny.png', alt: 'Adidas Campus Bad Bunny', label: 'Adidas Campus Bad Bunny', price: '1.847 €' },
              { src: 'imagenes/nike_travisscott.png', alt: 'Nike x Travis Scott', label: 'Nike x Travis Scott', price: '1.847 €' },
              { src: 'imagenes/nike_offwhite.png', alt: 'Nike x Off-White', label: 'Nike x Off-White', price: '1.847 €'},
              { src: 'imagenes/adidas_badbunny.png', alt: 'Adidas Campus Bad Bunny', label: 'Adidas Campus Bad Bunny', price: '1.847 €' },
              { src: 'imagenes/nike_travisscott.png', alt: 'Nike x Travis Scott', label: 'Nike x Travis Scott', price: '1.847 €' },
              { src: 'imagenes/nike_offwhite.png', alt: 'Nike x Off-White', label: 'Nike x Off-White', price: '1.847 €'},
              { src: 'imagenes/adidas_badbunny.png', alt: 'Adidas Campus Bad Bunny', label: 'Adidas Campus Bad Bunny', price: '1.847 €' },
              { src: 'imagenes/nike_travisscott.png', alt: 'Nike x Travis Scott', label: 'Nike x Travis Scott', price: '1.847 €' },
              { src: 'imagenes/nike_offwhite.png', alt: 'Nike x Off-White', label: 'Nike x Off-White', price: '1.847 €'},
              { src: 'imagenes/adidas_badbunny.png', alt: 'Adidas Campus Bad Bunny', label: 'Adidas Campus Bad Bunny', price: '1.847 €' },
              { src: 'imagenes/nike_travisscott.png', alt: 'Nike x Travis Scott', label: 'Nike x Travis Scott', price: '1.847 €' },
              { src: 'imagenes/nike_offwhite.png', alt: 'Nike x Off-White', label: 'Nike x Off-White', price: '1.847 €'},
              { src: 'imagenes/adidas_badbunny.png', alt: 'Adidas Campus Bad Bunny', label: 'Adidas Campus Bad Bunny', price: '1.847 €' },
              { src: 'imagenes/nike_travisscott.png', alt: 'Nike x Travis Scott', label: 'Nike x Travis Scott', price: '1.847 €' },
              { src: 'imagenes/nike_offwhite.png', alt: 'Nike x Off-White', label: 'Nike x Off-White', price: '1.847 €'},
              { src: 'imagenes/adidas_badbunny.png', alt: 'Adidas Campus Bad Bunny', label: 'Adidas Campus Bad Bunny', price: '1.847 €' },
              { src: 'imagenes/nike_travisscott.png', alt: 'Nike x Travis Scott', label: 'Nike x Travis Scott', price: '1.847 €' },
             
            ],
        },
    };

    const tiendaSeleccionada = tiendaData.Tienda;
    const { title, zapatillas, className } = tiendaSeleccionada;

    return (
        <div>
            <Header />
            <Nav />
            <div className="colaboraciones-container">
                <div className="colaboraciones-header">
                    <h1>{title}</h1>
                </div>
                <div className={className ? `lista-zapatillas-${className}` : 'lista-zapatillas'}>
                    {zapatillas.map((item, index) => (
                        <div key={index} className={className ? `caja-zapatillas-${className}` : 'caja-zapatillas'}>
                            <img src={item.src} alt={item.alt} />
                            <h2>{item.label}</h2>
                            <p className="precio">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ListaTiendaColaboraciones;
