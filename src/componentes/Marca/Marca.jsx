import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Marca.css';

function Marca() {
    const { marca } = useParams();
    const marcasData = {
        LouisVuitton: {
            title: 'Louis Vuitton',
            className: 'louisvi',
            zapatillas: [
                { src: 'imagenes/louisvuitton1.png', alt: 'LV Trainer', label: 'LV Trainer', price: '1.130,00€' },
                { src: 'imagenes/louisvuitton2.png', alt: 'LV Skate', label: 'LV Skate', price: '1.080,00€' },
                { src: 'imagenes/louisvuitton3.png', alt: 'LV Trainer Maxi', label: 'LV Trainer Maxi', price: '1.390,00€' },
                { src: 'imagenes/louisvuitton4.png', alt: 'LV Stadium', label: 'LV Stadium', price: '780,00€' },
                { src: 'imagenes/louisvuitton5.png', alt: 'Mocasín LV Capri', label: 'Mocasín LV Capri', price: '920,00€' },
                { src: 'imagenes/louisvuitton6.png', alt: 'Mule plano LV Sunset Comfort', label: 'Mule plano LV Sunset Comfort', price: '1.080,00€' },
                { src: 'imagenes/louisvuitton7.png', alt: 'Zapato de salón Met', label: 'Zapato de salón Met', price: '1.100,00€' },
                { src: 'imagenes/louisvuitton8.png', alt: 'Zapato de salón Shake', label: 'Zapato de salón Shake', price: '940,00€' },
                { src: 'imagenes/louisvuitton9.png', alt: 'Zapato de salón Archlight', label: 'Zapato de salón Archlight', price: '920,00€' },
            ],
            exclusivo: {
                title: 'Baúl para zapatillas deportivas',
                images: [
                    'imagenes/louisvuitton10.jpg',
                    'imagenes/louisvuitton12.jpg',
                    'imagenes/louisvuitton13.jpg',
                    'imagenes/louisvuitton11.jpg',
                ],
                price: '180.000,00€',
            },
        },
    };

    const marcaSeleccionada = marcasData.LouisVuitton;
    const { title, zapatillas, exclusivo, className } = marcaSeleccionada;

    return (
        <div>
            <Header />
            <Nav />
            <div className="luisvi-fondo-zapatillas">
                <div className={className ? `marca-container ${className}` : 'marca-container'}>
                    <div className="marca-header">
                        <h1>{title}</h1>
                    </div>
                    <div className={className ? `lista-zapatillas-${className}` : 'lista-zapatillas'}>
                        {zapatillas.map((item, index) => (
                            <div key={index} className={className ? `caja-zapatillas-${className}` : 'caja-zapatillas'}>
                                <img src={item.src} alt={item.alt} />
                                <h2>{item.label}</h2>
                                <p className="precio-zapatilla">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {exclusivo && (
                    <div className={className ? `caja-zapatillas-${className}-exclusivo` : 'exclusivo-container'}>
                        <div className={className ? `caja-imagenes-${className}-exclusivo` : 'imagenes-exclusivo'}>
                            {exclusivo.images.map((src, index) => (
                                <img key={index} src={src} alt={`Exclusivo ${index + 1}`} />
                            ))}
                        </div>
                        <h2>{exclusivo.title}</h2>
                        <p className="precio-zapatilla">{exclusivo.price}</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Marca;
