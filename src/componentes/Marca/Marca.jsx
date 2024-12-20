import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Marca.css';
import Yeezy from '../Yeezy/Yeezy';

function Marca() {
    
    const marcasData = {
        LouisVuitton: {
            title: 'Louis Vuitton',
            className: 'louisvi',
            zapatillas: [
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
            exclusivo: {
                title: 'Baúl para zapatillas deportivas',
                images: [
                    '/imagenes/louisvuitton10.jpg',
                    '/imagenes/louisvuitton12.jpg',
                    '/imagenes/louisvuitton13.jpg',
                    '/imagenes/louisvuitton11.jpg',
                ],
                price: '180.000 €',
            },
        },
        Yeezy: {
            title: 'Yeezy',
            className: 'yeezy',
            zapatillas: [
                { src: '/imagenes/yeezy1.png', alt: 'YEEZY Boost 350 V2 Bone', label: 'Boost 350 V2 Bone', price: '344 €' },
                { src: '/imagenes/yeezy2.png', alt: 'sandalias YEEZY Bone', label: 'Sandalias YEEZY Bone', price: '344 €' },
                { src: '/imagenes/yeezy3.png', alt: 'Foam Runner Onyx', label: 'Foam Runner Onyx', price: '171 €' },
                { src: '/imagenes/yeezy4.png', alt: 'YEEZY Boost 350 V2 Onyx', label: 'YEEZY Boost 350 V2 Onyx', price: '333 €' },
                { src: '/imagenes/yeezy5.png', alt: 'YEEZY Boost 380 Covellite', label: 'YEEZY Boost 380 Covellite', price: '156 €' },
                { src: '/imagenes/yeezy6.png', alt: 'Zebra 2018/2019', label: 'Zebra 2018/2019', price: '533 €' },
                { src: '/imagenes/yeezy7.png', alt: '700 V3 Dark Glow', label: '700 V3 Dark Glow', price: '752 €' },
                { src: '/imagenes/yeezy8.png', alt: '750 "Grey Gum"', label: '750 "Grey Gum"', price: '2.913 €' },
                { src: '/imagenes/yeezy9.png', alt: '500 "Utility Black"', label: '500 "Utility Black"', price: '345 €' },
            ],
            exclusivo: {
                title: 'Estuche de maquillaje House',
                images: [
                    '/imagenes/yeezy10.png',
                    '/imagenes/yeezy11.png',
                    '/imagenes/yeezy12.png',
                    '/imagenes/yeezy13.png',
                ],
                price: '12.980 €',
            },
        },
        Adidas: {
            title: 'Adidas',
            className: 'adidas',
            zapatillas: [
                { src: '/imagenes/adidas1.png', alt: 'Micropacer', label: 'Micropacer', price: '1.139 €' },
                { src: '/imagenes/adidas2.png', alt: 'Bowling Shoe', label: 'Bowling Shoe', price: '2.065 €' },
                { src: '/imagenes/adidas3.png', alt: 'Samba Wales Bonne', label: 'Samba Wales Bonne', price: '1.780 €' },
                { src: '/imagenes/adidas4.png', alt: 'x Gucci Gazelle', label: 'x Gucci Gazelle', price: '1.440 €' },
                { src: '/imagenes/adidas5.png', alt: 'Campus Moncler', label: 'Campus Moncler', price: '1.514 €' },
                { src: '/imagenes/adidas6.png', alt: 'D Rose 7 Primeknit', label: 'D Rose 7 Primeknit', price: '2.349 €' },
                { src: '/imagenes/adidas7.png', alt: 'Human Race NMD', label: 'Human Race NMD', price: '9.543 €' },
                { src: '/imagenes/adidas8.png', alt: 'JS Wings 2.0 ', label: 'JS Wings 2.0', price: '1.051 €' },
                { src: '/imagenes/adidas9.png', alt: 'ZX 750', label: 'ZX 750', price: '12.275 €' },
            ],
            exclusivo: {
                title: 'NMD_Rimowa Backpack',
                images: [
                    '/imagenes/adidas10.png',
                    '/imagenes/adidas11.png',
                    '/imagenes/adidas12.png',
                    '/imagenes/adidas10.png',
                ],
                price: '180.000 €',
            },
        },
    };
    const { marca } = useParams();
    const marcaSeleccionada = marcasData[marca] || {};
    const { title, zapatillas, exclusivo, className } = marcaSeleccionada;
    

    return (
        <div>
            <Header />
            <Nav />
            <div className="marca-container">
                <div className="marca-header">
                    <h1>{title}</h1> 
                </div>
                
                <div className={`${className}-fondo-zapatillas`}>
                    <div className={className ? `marca-container` : 'marca-container'}>
                        <div className={className ? `lista-zapatillas` : 'lista-zapatillas'}>
                            {zapatillas.map((item, index) => (
                                <div key={index} className={className ? `caja-zapatillas` : 'caja-zapatillas'}>
                                    <img src={item.src} alt={item.alt} />
                                    <h2>{item.label}</h2>
                                    <p className="precio-zapatilla">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {exclusivo && (
                        <div className={className ? `caja-zapatillas-exclusivo` : 'exclusivo-container'}>
                            <div className={className ? `caja-imagenes-exclusivo` : 'imagenes-exclusivo'}>
                                {exclusivo.images.map((src, index) => (
                                    <img key={index} src={src} alt={`Exclusivo ${index + 1}`} />
                                ))}
                            </div>
                            <h2>{exclusivo.title}</h2>
                            <p className="precio-zapatilla">{exclusivo.price}</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Marca;
