import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Tienda.css';

function Tienda() {
    const tiendaData = {
        Tienda: {
            title: 'Tienda',
            className: 'tienda',
            zapatillas: [
                { src: 'imagenes/louisvuitton.png', alt: 'Louis Vuitton', label: 'Louis Vuitton red', price: '6635,95€' },
                { src: 'imagenes/nike_travisscott.png', alt: 'Nike Travis Scott', label: 'Nike Travis Scott', price: '3608,00€' },
                { src: 'imagenes/nike_offwhite.png', alt: 'Nike Offwhite', label: 'Nike Offwhite', price: '1447,00€' },
                { src: 'imagenes/gucci.png', alt: 'Gucci Basket', label: 'Gucci Basket', price: '520,00€' },
                { src: 'imagenes/LouisVuitton-x-Nike-removebg.png', alt: 'Louis Vuitton x Nike', label: 'Louis Vuitton x Nike', price: '14030,23' },
                { src: 'imagenes/air-jordan-1-high-dior-removebg.png', alt: 'Jordan 1 Retro High Dior', label: 'Jordan 1 Retro High Dior', price: '7626,00€' },
            ],
        },
    };

    const tiendaSeleccionada = tiendaData.Tienda;
    const { title, zapatillas, className } = tiendaSeleccionada;

    return (
        <div>
            <Header />
            <Nav />
            <div className="tienda-container">
                <div className="tienda-header">
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

export default Tienda;