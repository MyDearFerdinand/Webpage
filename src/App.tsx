import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import './App.css';
import Tech from './pages/Tech/Tech';

const App: React.FC = () => {
  return (
    <div>
    <Home />
    <About/>
    <Tech/>
    <Portfolio />
    <Contact />
    <Footer />
  </div>
  );
};

export default App;