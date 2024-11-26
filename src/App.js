import './App.css';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import PerdidaContraseña from './componentes/PerdidaContraseña/PerdidaContraseña';
import Registro from './componentes/Registro/Registro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SobreNosotros from './componentes/SobreNosotros/SobreNosotros';
import Colaboraciones from './componentes/Colaboraciones/Colaboraciones';
import Contacto from './componentes/Contacto/Contacto';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
