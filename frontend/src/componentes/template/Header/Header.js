import React from 'react';

import './header.css';

function Header (props) {
  
  return (
    <header className="header d-nome d-sm-flex flex-column">
      <h1 className="mt-1">
        {props.title}
      </h1>
    </header>
  );
}

export default Header;