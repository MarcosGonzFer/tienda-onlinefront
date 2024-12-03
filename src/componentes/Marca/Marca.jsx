import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Marca.css';


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

        Nike: {
            title: 'Nike',
            className: 'nike',
            zapatillas: [
                { src: '/imagenes/nike1.png', alt: 'Alphafly 3 Premium', label: 'Alphafly 3 Premium', price: '319,99 €' },
                { src: '/imagenes/nike2.png', alt: 'Air VaporMax 2023 Flyknit', label: 'Air VaporMax 2023 Flyknit', price: '229,99 €' },
                { src: '/imagenes/nike3.png', alt: 'ump 2 Electric', label: 'ump 2 Electric', price: '229,99 €' },
                { src: '/imagenes/nike4.png', alt: 'Nike Air Foamposite One', label: 'Nike Air Foamposite One', price: '229,99 €' },
                { src: '/imagenes/nike5.png', alt: 'Air Jordan 9 G', label: 'Air Jordan 9 G', price: '219,99 €' },
                { src: '/imagenes/nike6.png', alt: 'Nike G.T. Jump 2', label: 'Nike G.T. Jump 2', price: '219,99 €' },
                { src: '/imagenes/nike7.png', alt: 'Nike Air Zoom Victory Tour 3', label: 'Nike Air Zoom Victory Tour 3', price: '219,99 €' },
                { src: '/imagenes/nike8.png', alt: 'Nike Invincible 3 By You', label: 'Nike Invincible 3 By You', price: '219,99 €' },
                { src: '/imagenes/nike9.png', alt: 'Nike Air Max 95 By You', label: 'Nike Air Max 95 By You', price: '219,99 €' },
               
            ],
            exclusivo: {
                title: 'Solid Gold OVO',
                images: [
                    '/imagenes/nike10.png',
                    '/imagenes/nike11.png',
                    '/imagenes/nike12.png',
                    '/imagenes/nike13.png',
                ],
                price: '2 Millones €',

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
                price: '10.027 €',

            },
        },

        NewBalance: {
            title: 'New Balance',
            className: 'newBalance',
            zapatillas: [
                { src: '/imagenes/newbalance1.png', alt: '530 SL', label: '530 SL', price: '2.073 €' },
                { src: '/imagenes/newbalance2.png', alt: ' 530 SL Mule', label: ' 530 SL Mule', price: '2.378 €' },
                { src: '/imagenes/newbalance3.png', alt: '1906R', label: '1906R', price: '2.040 €' },
                { src: '/imagenes/newbalance4.png', alt: ' 990v6', label: ' 990v6', price: '3.572 €' },
                { src: '/imagenes/newbalance5.png', alt: '992', label: '992', price: '802 €' },
                { src: '/imagenes/newbalance6.png', alt: 'FuelCell SuperComp Elite v4', label: 'FuelCell SuperComp Elite v4', price: '618 €' },
                { src: '/imagenes/newbalance7.png', alt: '990v4', label: '990v4', price: '974 €' },
                { src: '/imagenes/newbalance8.png', alt: '2002R ', label: '2002R', price: '577 €' },
                { src: '/imagenes/newbalance9.png', alt: '550', label: '550', price: '809 €' },
            ],
            exclusivo: {
                title: 'DropX™ Exclusive: 997G',
                images: [
                    '/imagenes/newbalance10.png',
                    '/imagenes/newbalance11.png',
                    '/imagenes/newbalance12.png',
                    '/imagenes/newbalance13.png',
                ],
                price: '9.900 €',

            },
        },
        Jordan: {
            title: 'Jordan',
            className: 'jordan',
            zapatillas: [
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
            exclusivo: {
                title: 'Jordan 5 Retro Low CLOT Blanco Seda 20º Aniversario',
                images: [
                    '/imagenes/jordan10.png',
                    '/imagenes/jordan11.png',
                    '/imagenes/jordan10.png',
                    '/imagenes/jordan11.png',
                ],
                price: '12.908 €',

            },
        },

        Gucci: {
            title: 'Gucci',
            className: 'gucci',
            zapatillas: [
                { src: '/imagenes/gucci1.png', alt: 'Jordaan Loafer', label: 'Jordaan Loafer', price: '854 €' },
                { src: '/imagenes/gucci2.png', alt: 'Angelina Platform', label: 'Angelina Platform', price: '756 €' },
                { src: '/imagenes/gucci3.png', alt: 'Damensandale', label: 'Damensandale', price: '692 €' },
                { src: '/imagenes/gucci4.png', alt: 'Princetown Slipper', label: 'Princetown Slipper', price: '1.146 €' },
                { src: '/imagenes/gucci5.png', alt: 'GG Sneaker', label: 'GG Sneaker', price: '1.503 €' },
                { src: '/imagenes/gucci6.png', alt: 'Screener', label: 'Screener', price: '845 €' },
                { src: '/imagenes/gucci7.png', alt: 'Run', label: 'Run', price: '686 €' },
                { src: '/imagenes/gucci8.png', alt: 'GG High', label: 'GG High', price: '895 €' },
                { src: '/imagenes/gucci9.png', alt: 'Rhyton', label: 'Rhyton', price: '1.137 €' },
               
            ],
            exclusivo: {
                title: 'Microsoft Xbox x Gucci Series X Special Edition (US Plug) Console Bundle ',
                images: [
                    '/imagenes/gucci10.png',
                    '/imagenes/gucci11.png',
                    '/imagenes/gucci12.png',
                    '/imagenes/gucci13.png',
                ],
                price: '21.503 €',

            },
        },

        Balenciaga: {
            title: 'Balenciaga',
            className: 'Balenciaga',
            zapatillas: [
                { src: '/imagenes/balenciaga1.png', alt: 'Triple S All Over Logo', label: 'Triple S All Over Logo', price: '775 €' },
                { src: '/imagenes/balenciaga2.png', alt: ' Alaska Low Boot', label: ' Alaska Low Boot', price: '1.711 €' },
                { src: '/imagenes/balenciaga3.png', alt: 'Speed', label: 'Speed', price: '976 €' },
                { src: '/imagenes/balenciaga4.png', alt: '3XL', label: '3XL', price: '1.036 €' },
                { src: '/imagenes/balenciaga5.png', alt: 'Track LED', label: 'Track LED', price: '1.706 €' },
                { src: '/imagenes/balenciaga6.png', alt: ' Triple S', label: ' Triple S', price: '1.019 €' },
                { src: '/imagenes/balenciaga7.png', alt: 'Defender', label: 'Defender', price: '1.296 €' },
                { src: '/imagenes/balenciaga8.png', alt: 'Paris High Top', label: 'Paris High Top', price: '1097 €' },
                { src: '/imagenes/balenciaga9.png', alt: 'Runner High', label: 'Runner High', price: '1.015 €' },
               
            ],
            exclusivo: {
                title: 'Le Cagole Shoulder Bag',
                images: [
                    '/imagenes/balenciaga10.png',
                    '/imagenes/balenciaga11.png',
                    '/imagenes/balenciaga12.png',
                    '/imagenes/balenciaga10.png',
                ],
                price: '10.821 €',

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
