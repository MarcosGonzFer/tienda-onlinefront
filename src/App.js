import './App.css';
import Home from './componentes/Home/Home';
import Ofertas from './componentes/Ofertas/Ofertas';
import Ayuda from './componentes/Ayuda/Ayuda';
import Login from './componentes/Login/Login';
import Compra from './componentes/Compra/Compra';
import PerdidaContraseña from './componentes/PerdidaContraseña/PerdidaContraseña';
import Registro from './componentes/Registro/Registro';
import Hombres from './componentes/Hombres/Hombres';
import Mujeres from './componentes/Mujeres/Mujeres'; 
import Accesorios from './componentes/Accesorios/Accesorios'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tienda from './componentes/Tienda/Tienda';
import SobreNosotros from './componentes/SobreNosotros/SobreNosotros';
import Colaboraciones from './componentes/Colaboraciones/Colaboraciones';
import Contacto from './componentes/Contacto/Contacto';
import PoliticaCookies from './componentes/PoliticaCookies/PoliticaCookies';
import AvisoLegal from './componentes/AvisoLegal/AvisoLegal';
import ListaTiendaColaboraciones from './componentes/ListaTiendaColaboraciones/ListaTiendaColaboraciones';
import Marca from './componentes/Marca/Marca';
import Zapatilla from './componentes/Zapatilla/Zapatilla';
import PasarelaPago from './componentes/PasarelaPago/PasarelaPago';
import Verificacion from './componentes/Verificacion/Verificacion';
import { ProductosProvider } from './context/ProductosContext'; 
import ZapatillaHombre from './componentes/Zapatilla_Hombre/Zapatilla_Hombre';
import ZapatillaMujer from './componentes/Zapatilla_Mujer/Zapatilla_Mujer';

function App() {
  return (
    <ProductosProvider>
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
            <Route path="/Hombres" element={<Hombres />} />
            <Route path="/Mujeres" element={<Mujeres />} />
            <Route path="/Accesorios" element={<Accesorios />} />
            <Route path="/SobreNosotros" element={<SobreNosotros/>} />
            <Route path="/Colaboraciones" element={<Colaboraciones/>} />
            <Route path="/Contacto" element={<Contacto/>} />
            <Route path="/PoliticaCookies" element={<PoliticaCookies/>} />
            <Route path="/AvisoLegal" element={<AvisoLegal/>} />
            <Route path="/Marca/:marca" element={<Marca/>} />
            <Route path="/ListaTiendaColaboraciones" element={<ListaTiendaColaboraciones/>} />
            <Route path="/producto/:id" element={<Zapatilla />} />
            <Route path="/PasarelaPago" element={<PasarelaPago />} />
            <Route path="/hombres_zapatillas/:id" element={<ZapatillaHombre />} />
            <Route path="/mujeres_zapatillas/:id" element={<ZapatillaMujer />} />
            <Route path='/Verificacion' element={<Verificacion />} />

          </Routes>
        </div>
      </Router>
    </ProductosProvider> 
  );
}

export default App;