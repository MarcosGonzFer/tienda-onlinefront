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
                { src: '/imagenes/nike1.png', alt: 'Alphafly 3 Premium', label: 'Alphafly 3 Premium', price: '319,99 €' },
                { src: '/imagenes/nike2.png', alt: 'Air VaporMax 2023 Flyknit', label: 'Air VaporMax 2023 Flyknit', price: '229,99 €' },
                { src: '/imagenes/nike3.png', alt: 'ump 2 Electric', label: 'ump 2 Electric', price: '229,99 €' },
                { src: '/imagenes/nike4.png', alt: 'Nike Air Foamposite One', label: 'Nike Air Foamposite One', price: '229,99 €' },
                { src: '/imagenes/nike5.png', alt: 'Air Jordan 9 G', label: 'Air Jordan 9 G', price: '219,99 €' },
                { src: '/imagenes/nike6.png', alt: 'Nike G.T. Jump 2', label: 'Nike G.T. Jump 2', price: '219,99 €' },
                { src: '/imagenes/nike7.png', alt: 'Nike Air Zoom Victory Tour 3', label: 'Nike Air Zoom Victory Tour 3', price: '219,99 €' },
                { src: '/imagenes/nike8.png', alt: 'Nike Invincible 3 By You', label: 'Nike Invincible 3 By You', price: '219,99 €' },
                { src: '/imagenes/nike9.png', alt: 'Nike Air Max 95 By You', label: 'Nike Air Max 95 By You', price: '219,99 €' },
                { src: '/imagenes/adidas1.png', alt: 'Micropacer', label: 'Micropacer', price: '1.139 €' },
                { src: '/imagenes/adidas2.png', alt: 'Bowling Shoe', label: 'Bowling Shoe', price: '2.065 €' },
                { src: '/imagenes/adidas3.png', alt: 'Samba Wales Bonne', label: 'Samba Wales Bonne', price: '1.780 €' },
                { src: '/imagenes/adidas4.png', alt: 'x Gucci Gazelle', label: 'x Gucci Gazelle', price: '1.440 €' },
                { src: '/imagenes/adidas5.png', alt: 'Campus Moncler', label: 'Campus Moncler', price: '1.514 €' },
                { src: '/imagenes/adidas6.png', alt: 'D Rose 7 Primeknit', label: 'D Rose 7 Primeknit', price: '2.349 €' },
                { src: '/imagenes/adidas7.png', alt: 'Human Race NMD', label: 'Human Race NMD', price: '9.543 €' },
                { src: '/imagenes/adidas8.png', alt: 'JS Wings 2.0 ', label: 'JS Wings 2.0', price: '1.051 €' },
                { src: '/imagenes/adidas9.png', alt: 'ZX 750', label: 'ZX 750', price: '12.275 €' },
                { src: '/imagenes/jordan1.png', alt: 'Jordan 4 Retro Kaws', label: 'Jordan 4 Retro Kaws', price: '1.847 €' },
                { src: '/imagenes/jordan2.png', alt: '1 Retro High Fragment', label: '1 Retro High Fragment', price: '1.952 €' },
                { src: '/imagenes/jordan3.png', alt: '1 Mid Negro Blanco Dorado', label: '1 Mid Negro Blanco Dorado', price: '582 €' },
                { src: '/imagenes/jordan4.png', alt: '4 Retro Doernbecher', label: '4 Retro Doernbecher', price: '2.294 €' },
                { src: '/imagenes/jordan5.png', alt: 'Jordan 1 Retro Iglú Alto', label: 'Jordan 1 Retro Iglú Alto', price: '3.669 €' },
                { src: '/imagenes/jordan6.png', alt: 'Jordan MVP 678 Raptors', label: 'Jordan MVP 678 Raptors', price: '254 €' },
                { src: '/imagenes/jordan7.png', alt: '1 Retro Alto Rosa Óxido', label: '1 Retro Alto Rosa Óxido', price: '5.030 €' },
                { src: '/imagenes/jordan8.png', alt: 'Jordan MVP Cardenal Rojo', label: 'Jordan MVP Cardenal Rojo', price: '267 €' },
                { src: '/imagenes/jordan9.png', alt: 'Jordan 1 Retro Bred (1994)', label: 'Jordan 1 Retro Bred (1994)', price: '2.065 €' },
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