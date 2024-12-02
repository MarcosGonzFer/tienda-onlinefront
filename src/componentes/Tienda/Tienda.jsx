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
                { src: '/imagenes/yeezy1.png', alt: 'YEEZY Boost 350 V2 Bone', label: 'Boost 350 V2 Bone', price: '344 €' },
                { src: '/imagenes/yeezy2.png', alt: 'sandalias YEEZY Bone', label: 'Sandalias YEEZY Bone', price: '344 €' },
                { src: '/imagenes/yeezy3.png', alt: 'Foam Runner Onyx', label: 'Foam Runner Onyx', price: '171 €' },
                { src: '/imagenes/yeezy4.png', alt: 'YEEZY Boost 350 V2 Onyx', label: 'YEEZY Boost 350 V2 Onyx', price: '333 €' },
                { src: '/imagenes/yeezy5.png', alt: 'YEEZY Boost 380 Covellite', label: 'YEEZY Boost 380 Covellite', price: '156 €' },
                { src: '/imagenes/yeezy6.png', alt: 'Zebra 2018/2019', label: 'Zebra 2018/2019', price: '533 €' },
                { src: '/imagenes/yeezy7.png', alt: '700 V3 Dark Glow', label: '700 V3 Dark Glow', price: '752 €' },
                { src: '/imagenes/yeezy8.png', alt: '750 "Grey Gum"', label: '750 "Grey Gum"', price: '2.913 €' },
                { src: '/imagenes/yeezy9.png', alt: '500 "Utility Black"', label: '500 "Utility Black"', price: '345 €' },
                { src: '/imagenes/louisvuitton1.png', alt: 'LV Trainer', label: 'LV Trainer', price: '1.130 €' },
                { src: '/imagenes/louisvuitton2.png', alt: 'LV Skate', label: 'LV Skate', price: '1.080 €' },
                { src: '/imagenes/louisvuitton3.png', alt: 'LV Trainer Maxi', label: 'LV Trainer Maxi', price: '1.390 €' },
                { src: '/imagenes/louisvuitton4.png', alt: 'LV Stadium', label: 'LV Stadium', price: '780 €' },
                { src: '/imagenes/louisvuitton5.png', alt: 'Mocasín LV Capri', label: 'Mocasín LV Capri', price: '920 €' },
                { src: '/imagenes/louisvuitton6.png', alt: 'Mule plano LV Sunset', label: 'Mule plano LV Sunset', price: '1.080 €' },
                { src: '/imagenes/louisvuitton7.png', alt: 'Zapato de salón Met', label: 'Zapato de salón Met', price: '1.100 €' },
                { src: '/imagenes/louisvuitton8.png', alt: 'Zapato de salón Shake', label: 'Zapato de salón Shake', price: '940 €' },
                { src: '/imagenes/louisvuitton9.png', alt: 'Zapato de salón Archlight', label: 'Zapato de salón Archlight', price: '920 €' },
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