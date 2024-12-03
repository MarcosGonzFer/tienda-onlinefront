import React from 'react';
import Header from '../Header/Header'; 
import Nav from '../Nav/Nav'; 
import Footer from '../Footer/Footer'; 
import './Mujeres.css'; 

function Mujeres() {
  const MujeresData = {
    Mujeres: {
      title: 'Mujeres',
      className: 'mujeres',
      zapatillas: [
        { src: '/imagenes/yeezy8.png', alt: '750 "Grey Gum"', label: '750 "Grey Gum"', price: '2.913 €' },
        { src: '/imagenes/yeezy2.png', alt: 'sandalias YEEZY Bone', label: 'Sandalias YEEZY Bone', price: '344 €' },
        { src: '/imagenes/louisvuitton2.png', alt: 'LV Skate', label: 'LV Skate', price: '1.080 €' },
        { src: '/imagenes/louisvuitton4.png', alt: 'LV Stadium', label: 'LV Stadium', price: '780 €' },
        { src: '/imagenes/louisvuitton5.png', alt: 'Mocasín LV Capri', label: 'Mocasín LV Capri', price: '920 €' },
        { src: '/imagenes/louisvuitton6.png', alt: 'Mule plano LV Sunset', label: 'Mule plano LV Sunset', price: '1.080 €' },
        { src: '/imagenes/louisvuitton7.png', alt: 'Zapato de salón Met', label: 'Zapato de salón Met', price: '1.100 €' },
        { src: '/imagenes/louisvuitton8.png', alt: 'Zapato de salón Shake', label: 'Zapato de salón Shake', price: '940 €' },
        { src: '/imagenes/louisvuitton9.png', alt: 'Zapato de salón Archlight', label: 'Zapato de salón Archlight', price: '920 €' },
        { src: '/imagenes/adidas2.png', alt: 'Bowling Shoe', label: 'Bowling Shoe', price: '2.065 €' },
        { src: '/imagenes/adidas3.png', alt: 'Samba Wales Bonne', label: 'Samba Wales Bonne', price: '1.780 €' },
        { src: '/imagenes/adidas4.png', alt: 'x Gucci Gazelle', label: 'x Gucci Gazelle', price: '1.440 €' },
        { src: '/imagenes/adidas5.png', alt: 'Campus Moncler', label: 'Campus Moncler', price: '1.514 €' },
        { src: '/imagenes/newbalance2.png', alt: '530 SL Mule', label: '530 SL Mule', price: '2.378 €' },
        { src: '/imagenes/newbalance4.png', alt: '990v6', label: '990v6', price: '3.572 €' },
       
      ],
    },
  };

  // Extraemos los datos necesarios del objeto
  const MujeresSeleccionada = MujeresData.Mujeres;
  const { title, zapatillas, className } = MujeresSeleccionada;

  return (
    <div>
      <Header />
      <Nav />
      <div className="mujeres-container">
        <div className="mujeres-header">
          <h1>{title}</h1>
        </div>
        <div className={`lista-zapatillas-${className}`}>
          {zapatillas.map((item, index) => (
            <div key={index} className={`caja-zapatillas-${className}`}>
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

export default Mujeres;
