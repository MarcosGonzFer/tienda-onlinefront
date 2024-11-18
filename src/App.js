import './App.css';
import Header from './componentes/header/Header.jsx'
import Footer from './componentes/Footer/Footer.jsx';
import Section from './componentes/section/Section.jsx';
import Nav from './componentes/Nav/Nav.jsx';
function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Section/>
      <Footer/>
    </div>
  );
}


export default App;
