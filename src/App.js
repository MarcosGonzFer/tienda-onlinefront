import './App.css';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import PerdidaContraseña from './componentes/PerdidaContraseña/PerdidaContraseña';
import Registro from './componentes/Registro/Registro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SobreNosotros from './componentes/SobreNosotros/SobreNosotros';
import Colaboraciones from './componentes/Colaboraciones/Colaboraciones';
import Contacto from './componentes/Contacto/Contacto';
import PoliticaCookies from './componentes/PoliticaCookies/PoliticaCookies';
import AvisoLegal from './componentes/AvisoLegal/AvisoLegal';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Perdidacontraseña" element={<PerdidaContraseña />} />
          <Route path="/SobreNosotros" element={<SobreNosotros/>} />
          <Route path="/Colaboraciones" element={<Colaboraciones/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/PoliticaCookies" element={<PoliticaCookies/>} />
          <Route path="/AvisoLegal" element={<AvisoLegal/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
