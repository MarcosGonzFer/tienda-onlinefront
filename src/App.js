import './App.css';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import PerdidaContraseña from './componentes/PerdidaContraseña/PerdidaContraseña';
import Registro from './componentes/Registro/Registro';

function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
      <Registro/>
      <PerdidaContraseña/>
    </div>
  );
}


export default App;
