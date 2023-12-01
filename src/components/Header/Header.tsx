import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
  
      <a href="#home"><img className="logo-img" src={'logo192.png'} alt={'MyDearFerdinand'} /></a>  
      <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      
  <a href="#tech">My Stack</a>
  <a href="#portfolio">Portfolio</a>
  <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;