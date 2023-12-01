import React from 'react';
import './About.css'; 


function About() {
  return (
    <section id="about" className="about-container">
      <h2>About Me</h2>
      <p>
      As a Frontend Web Developer at Job Autopilot, I work with the team of developers to improve software capabilities, optimisation and impact for corporate and non-corporate users. I developed from scratch a fully responsive and adaptive kanban board-like tool with drag-and-drop features, using ReactTS and Redux technologies. I also collaborated with the UI/UX team to create an outstanding and minimalistic design for our website and a Chrome extension that collected data about job applications from LinkedIn.</p>
      <p>I have an Associate's degree in Computer Software Technology/Technician from College TEB Poland, where I learned the fundamentals of web development, such as HTML, CSS, JavaScript, and WordPress. I also have certifications in C++, Angular, and Mimo. I have strong skills in collecting, processing, and mathematical analysis of data structures. My goal is to create user-friendly and innovative web solutions that solve real-world problems and enhance user experience.</p>
      
      <a href="/resume.pdf" download className="resume-button">
        My Resume
      </a>
    </section>
  );
}

export default About;