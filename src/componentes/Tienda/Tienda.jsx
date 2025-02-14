import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Tienda.css';

function Tienda() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/productos')
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Error cargando los productos:', error));
    }, []);

    return (
        <div>
            <Header />
            <Nav />
            <div className="tienda-container">
                <div className="tienda-header">
                    <h1>Tienda</h1>
                </div>
                <div className="lista-producto">
                    {productos.map((item) => (
                        <Link key={item.id} to={`/producto/${item.id}`} className="caja-zapatillas-tienda">
                            <img src={item.src} alt={item.alt} />
                            <h2>{item.label}</h2>
                            <p className="precio">{item.price}€</p>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Tienda;
