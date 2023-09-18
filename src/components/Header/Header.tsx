import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css'; // Add your styles here

const Header: React.FC = () => {
  return (
    <header>
      <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
  <a href="#portfolio">Portfolio</a>
  <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;