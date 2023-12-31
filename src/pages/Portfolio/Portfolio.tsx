import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'JobAutopilot.com',
      description: 'JobAutopilot is a job search management hub for IT professionals in Canada and the US. A team of virtual AI assistants and actual career advisers transform information chaos into a clear plan of action to help you find a job faster',
      link: 'https://jobautopilot.com',
      imageUrl: '/projects/JobAutopilot.png',
    },{
      title: 'Colombia Moto Tour',
      description: 'Website for booking moto trips to Colombia',
      link: 'https://colombiamototour.com/',
      imageUrl: '/projects/ColombiaMoto.jpg',
    },
    {
      title: 'New Horizon',
      description: 'Platform for assistance in matters of migration and education abroad',
      link: 'https://new-horizon-poland.netlify.app',
      imageUrl: '/projects/NewHorizon.png',
    }
  ];

  return (
    <div id="portfolio" className="portfolio-container">
      <h1 className="portfolio-header">Some of my previous works</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <PortfolioItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;