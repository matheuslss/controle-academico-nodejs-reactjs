import React from 'react';

import './nav.css';

function Nav (props) {

  return (
    <aside className="menu-area">
       <nav className="menu">
         <a href="#/cursos"> Cursos </a>
         <a href="#/alunos"> Alunos </a> 
       </nav>
    </aside>
  )
}

export default Nav;