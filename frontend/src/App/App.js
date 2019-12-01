import React from 'react';
import Logo from '../componentes/template/Logo/Logo';
import Nav from '../componentes/template/Nav/Nav';
import Aluno from '../componentes/Aluno/Aluno';
// import Rotas from '../rotas';
import Footer from '../componentes/template/Footer/Footer';
// import { HashRouter } from 'react-router-dom';


import './app.css';

function App (props) {
  return (
    <div className="app">
      {/* <HashRouter> */}
        <Logo />
        <Nav />
        <Aluno />
        {/* <Rotas /> */}
        <Footer />
      {/* </HashRouter> */}
    </div>
  )
}

export default App;