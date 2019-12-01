import React from 'react';
import Logo from '../componentes/template/Logo/Logo';
import Nav from '../componentes/template/Nav/Nav';
import Footer from '../componentes/template/Footer/Footer';
import Rotas from '../routes';
import { HashRouter } from 'react-router-dom';

// import Aluno from '../componentes/Aluno/Aluno';
// import Curso from '../componentes/Curso/Curso';

import './app.css';

function App (props) {
  return (
    <div className="app">
      <HashRouter>
        <Logo />
        <Nav />
        {/* <Curso /> */}
        <Rotas />
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App;