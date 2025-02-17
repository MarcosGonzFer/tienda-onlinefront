import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Ofertas.css";
import { useProductos } from "../../context/ProductosContext"; // Importar el contexto

function Ofertas() {
  const { filtro } = useProductos();  // Obtener el filtro global
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/ofertas') 
      .then(response => response.json())
      .then(data => setOfertas(data)) 
  }, []);

  // Filtrar las ofertas basadas en el filtro de búsqueda
  const ofertasFiltradas = ofertas.filter(oferta =>
    oferta.label.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Nav />
      <div className="ofertas-container">
        <div className="ofertas-header">
          <h1>Ofertas</h1> 
        </div>
        <div className="lista-zapatillas">
          {ofertasFiltradas.length > 0 ? (
            ofertasFiltradas.map((item, index) => (
              <div key={index} className="caja-zapatillas">
                <img src={item.src} alt={item.alt} />
                <h2>{item.label}</h2>
                <p className="precio-original">{item.originalPrice}€</p>
                <p className="precio-oferta">{item.discountedPrice}€</p>
              </div>
            ))
          ) : (
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ofertas;
