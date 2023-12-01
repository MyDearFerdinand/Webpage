import React from 'react';
import './Tech.css'; 
import SpinningCube from '../../components/SpinningCube/SpinningCube';
import Technology from '../../components/Technology/Technology';

const technologies1 = [
  {
    title: 'React',
    imageUrl: '/technologies/react.png',
  },{
    title: 'TypeScript',
    imageUrl: '/technologies/typescript.png',
  },
  {
    title: 'JavaScript',
    imageUrl: '/technologies/javascript.png',
  },
  
];
const technologies2 = [
  
  {
    title: 'MongoDB',
    imageUrl: '/technologies/mongo.png',
  },{
    title: 'NodeJS',
    imageUrl: '/technologies/node-js.png',
  },
  {
    title: 'C#',
    imageUrl: '/technologies/c_sharp.png',
  }
];

function Tech() {
  return (
    <section id="tech" className="tech-container">
      <h2>Tech Stack</h2>
      <div className="technologies-grid">
        {technologies1.map((project, index) => (
          <Technology key={index} {...project} />
        ))}
      </div>
      <div className="technologies-grid">
        {technologies2.map((project, index) => (
          <Technology key={index} {...project} />
        ))}
      </div>
      <SpinningCube />
    </section>
  );
}

export default Tech;