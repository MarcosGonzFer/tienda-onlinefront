import './App.css';
import Home from './componentes/Home/Home';
import Ofertas from './componentes/Ofertas/Ofertas';
import Ayuda from './componentes/Ayuda/Ayuda';
import Login from './componentes/Login/Login';
import Compra from './componentes/Compra/Compra';
import PerdidaContraseña from './componentes/PerdidaContraseña/PerdidaContraseña';
import Registro from './componentes/Registro/Registro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tienda from './componentes/Tienda/Tienda';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Compra" element={<Compra />}/>
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Perdidacontraseña" element={<PerdidaContraseña />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
