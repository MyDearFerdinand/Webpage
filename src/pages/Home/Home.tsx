import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
  return (
    <div id="home" className="home-container">
      <Header />
      <video 
        autoPlay 
        loop 
        muted 
        className="background-video"
        poster="/path/to/fallback-image.jpg"
      ><source src="/videos/portfoliobackground.mp4" type="video/mp4" />
      Your browser does not support the video tag.</video>
      <div className="content">
      <h1>Vladyslav Maidaniuk</h1>
      <p>Explore my work and contact me for collaborations.</p>
      </div>
    </div>
  );
};

export default Home;