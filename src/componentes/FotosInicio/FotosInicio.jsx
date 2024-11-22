import React, { useState, useEffect } from 'react';
import './FotosInicio.css';

function FotosInicio() {
  const [currentImages, setCurrentImages] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval)
  }, []);

  const images = [
    [
      "imagenes/fotozapasinicio.jpg", 
      "imagenes/fotozapasinicio2.jpg", 
      "imagenes/fotozapasinicio3.jpg"
    ],
    [
      "imagenes/fotozapasinicio4.jpg", 
      "imagenes/fotozapasinicio5.jpg", 
      "imagenes/fotozapasinicio6.jpg"
    ],
    [
      "imagenes/fotozapasinicio7.jpg", 
      "imagenes/fotozapasinicio8.jpg", 
      "imagenes/fotozapasinicio9.jpg"
    ],
    [
      "imagenes/fotozapasinicio10.jpg", 
      "imagenes/fotozapasinicio11.jpg", 
      "imagenes/fotozapasinicio12.jpg"
    ]
  ];

  return (
    <div className='contenedor-imagen-inicio'>
      {images[currentImages].map((image, index) => (
        <img src={image} alt={`imagen de la foto de inicio ${index}`} className='imagen-inicio' key={index} />
      ))}
    </div>
  );
}

export default FotosInicio;
