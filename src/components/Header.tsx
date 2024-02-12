import React from 'react';
import logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img alt="logo" src={logo}/>
      </div>
      <h1>
        Проекты
      </h1>
    </header>
  )
}

export default Header
