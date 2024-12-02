import './App.css';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import PerdidaContraseña from './componentes/PerdidaContraseña/PerdidaContraseña';
import Registro from './componentes/Registro/Registro';
import Marcas from './componentes/Marcas/Marcas';

import Mujeres from './componentes/Mujeres/Mujeres'; 
import Accesorios from './componentes/Accesorios/Accesorios'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Perdidacontraseña" element={<PerdidaContraseña />} />
          <Route path="/Marcas" element={<Marcas />} />
          
          <Route path="/Mujeres" element={<Mujeres />} /> {}
          <Route path="/Accesorios" element={<Accesorios />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
