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
import Yeezy from './componentes/Yeezy/Yeezy';
import Louisvuitton from './componentes/Louisvuitton/Louisvuitton';
import Nike from './componentes/Nike/Nike';
import Adidas from './componentes/Adidas/Adidas';
import NewBalance from './componentes/NewBalance/NewBalance';
import Jordan from './componentes/Jordan/Jordan';
import Balenciaga from './componentes/Balenciaga/Balenciaga';
import Gucci from './componentes/Gucci/Gucci';
import ListaTiendaColaboraciones from './componentes/ListaTiendaColaboraciones/ListaTiendaColaboraciones';

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

          <Route path="/Louisvuitton" element={<Louisvuitton/>} />
          <Route path="/Yezzy" element={<Yeezy/>} />
          <Route path="/Nike" element={<Nike/>} />
          <Route path="/Adidas" element={<Adidas/>} />
          <Route path="/NewBalance" element={<NewBalance/>} />
          <Route path="/Jordan" element={<Jordan/>} />
          <Route path="/Balenciaga" element={<Balenciaga />} />
          <Route path="/Gucci" element={<Gucci/>} />
          <Route path="/ListaTiendaColaboraciones" element={<ListaTiendaColaboraciones/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
