import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Zapatilla.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { FiCopy } from "react-icons/fi";

function Zapatilla() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/productos/${id}`)
      .then((response) => response.json())
      .then((data) => setProducto(data))
      .catch((error) => console.error("Error cargando el producto:", error));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  const tallas = ["38", "39", "40", "41", "42"];

  const agregarAlCarrito = () => {
    if (!tallaSeleccionada) return;

    const productoConTalla = { ...producto, talla: tallaSeleccionada };

    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

    carritoActual.push(productoConTalla);

    localStorage.setItem("carrito", JSON.stringify(carritoActual));

    alert(`Producto agregado con talla ${tallaSeleccionada}`);
  };

  const copiarCodigo = () => {
    navigator.clipboard.writeText(producto.verification);
    alert("Código de verificación copiado!");
  };

  return (
    <>
      <Header />
      <Nav />
      <div className="contenedor-zapatilla">
        <h1>{producto.label}</h1>
        <img src={producto.src} alt={producto.alt} className="imagen-zapatilla" />
        <p className="precio">
          Precio: <span>{producto.price}</span>
        </p>
        <p className="verificacion">
          Código de Verificación: {producto.verification}
          <button className="boton-copiar" onClick={copiarCodigo}>
            <FiCopy />
          </button>
        </p>

        <div className="tallas">
          <p>Selecciona tu talla:</p>
          <div className="tallas-grid">
            {tallas.map((talla) => (
              <button
                key={talla}
                className={`talla-btn ${tallaSeleccionada === talla ? "seleccionada" : ""}`}
                onClick={() => setTallaSeleccionada(talla)}
              >
                {talla}
              </button>
            ))}
          </div>
        </div>

        <button className="boton-comprar" disabled={!tallaSeleccionada} onClick={agregarAlCarrito}>
          Comprar
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Zapatilla;
