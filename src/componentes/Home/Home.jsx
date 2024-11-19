import React from 'react'
import Header from './componentes/header/Header.jsx'
import Footer from './componentes/Footer/Footer.jsx';
import Section from './componentes/section/Section.jsx';
import Nav from './componentes/Nav/Nav.jsx';
function Home() {
  return (
    <div>
    <Header/>
    <Nav/>
    <Section/>
    <Footer/></div>
  )
}

export default Home