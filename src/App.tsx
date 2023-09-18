import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import './App.css'; // Add your styles here

const App: React.FC = () => {
  return (
    <div>
    <Header />
    <Home />
    <About/>
    <Portfolio />
    <Contact />
    <Footer />
  </div>
  );
};

export default App;