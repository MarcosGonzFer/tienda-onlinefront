import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Ofertas.css";

function Ofertas() {
  const ofertasData = {
    Ofertas: {
      title: "Ofertas",
      className: "ofertas",
      zapatillas: [
        {
          src: "imagenes/pngegg.png",
          alt: "Air Jordan 1 Retro OG",
          label: "Air Jordan 1 Retro OG Chicago",
          originalPrice: "560,00€",
          discountedPrice: "400,00€",
        },
        {
          src: "imagenes/Balenciaga-Triple-S-All-Over-Logo-Black-White-Womens.png",
          alt: "Balenciaga",
          label: "Balenciaga Triple S",
          originalPrice: "825,00€",
          discountedPrice: "725,00€",
        },
        {
          src: "imagenes/Nike-Back-To-The-Future-2011.png",
          alt: "Nike MAG Back to the future",
          label: "Nike MAG Back to the future",
          originalPrice: "27871,00€",
          discountedPrice: "26432,00€",
        },
        {
          src: "imagenes/Gucci-GG-Sneaker-removebg.png",
          alt: "Gucci GG Sneaker 4",
          label: "Gucci GG Sneaker 4",
          originalPrice: "1503,00€",
          discountedPrice: "1279,00€",
        },
        {
          src: "imagenes/Gucci-GG-Sneaker-removebg.png",
          alt: "Gucci GG Sneaker 4",
          label: "Gucci GG Sneaker 4",
          originalPrice: "1503,00€",
          discountedPrice: "1279,00€",
        },
        {
          src: "imagenes/Gucci-GG-Sneaker-removebg.png",
          alt: "Gucci GG Sneaker 4",
          label: "Gucci GG Sneaker 4",
          originalPrice: "1503,00€",
          discountedPrice: "1279,00€",
        },
        {
          src: "imagenes/Gucci-GG-Sneaker-removebg.png",
          alt: "Gucci GG Sneaker 4",
          label: "Gucci GG Sneaker 4",
          originalPrice: "1503,00€",
          discountedPrice: "1279,00€",
        },
        {
          src: "imagenes/Gucci-GG-Sneaker-removebg.png",
          alt: "Gucci GG Sneaker 4",
          label: "Gucci GG Sneaker 4",
          originalPrice: "1503,00€",
          discountedPrice: "1279,00€",
        },
        {
          src: "imagenes/Gucci-GG-Sneaker-removebg.png",
          alt: "Gucci GG Sneaker 4",
          label: "Gucci GG Sneaker 4",
          originalPrice: "1503,00€",
          discountedPrice: "1279,00€",
        },
        {
          src: "imagenes/Balenciaga-Triple-S-All-Over-Logo-Black-White-Womens.png",
          alt: "Balenciaga",
          label: "Balenciaga Triple S",
          originalPrice: "825,00€",
          discountedPrice: "725,00€",
        },
      ],
    },
  };

  const ofertaSeleccionada = ofertasData.Ofertas;
  const { title, zapatillas, className } = ofertaSeleccionada;

  return (
    <div>
      <Header />
      <Nav />
      <div className="ofertas-container">
        <div className="ofertas-header">
          <h1>{title}</h1>
        </div>
        <div
          className={
            className ? `lista-zapatillas-${className}` : "lista-zapatillas"
          }
        >
          {zapatillas.map((item, index) => (
            <div
              key={index}
              className={
                className ? `caja-zapatillas-${className}` : "caja-zapatillas"
              }
            >
              <img src={item.src} alt={item.alt} />
              <h2>{item.label}</h2>
              <p className="precio-original">{item.originalPrice}</p>
              <p className="precio-oferta">{item.discountedPrice}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ofertas;
