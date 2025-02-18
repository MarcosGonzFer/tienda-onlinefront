import { useEffect, useState } from "react";

function MostrarQR({ verification }) {
  const [qr, setQr] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/productos/qr/${verification}`)
      .then((response) => response.json())
      .then((data) => setQr(data.qr))
      .catch((error) => console.error("Error cargando QR:", error));
  }, [verification]);

  return (
    <div className="qr-container">
      {qr ? <img src={qr} alt="Código QR" className="qr-image" /> : <p>Cargando QR...</p>}
    </div>
  );
}

export default MostrarQR;