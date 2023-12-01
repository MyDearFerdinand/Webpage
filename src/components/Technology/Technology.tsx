import React from 'react';
import './Technology.css';

interface TechnologyProps {
  title: string;
  imageUrl?: string;
}

const Technology: React.FC<TechnologyProps> = ({ title, imageUrl }) => {
  return (
    <div className="technology">
    <img className="technology-img" src={imageUrl} alt={title} />
      <h3>{title}</h3>
      
    </div>
  );
};

export default Technology;