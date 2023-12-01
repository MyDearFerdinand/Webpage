import React from 'react';
import './PortfolioItem.css';

interface PortfolioItemProps {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, link, imageUrl }) => {
  return (
    <div className="portfolio-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="portfolio-img">
      {imageUrl && <img src={imageUrl} alt={title} />}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}</div>
    </div>
  );
};

export default PortfolioItem;