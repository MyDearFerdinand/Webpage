import React from 'react';
import './About.css'; // We will create this CSS file in the next step

function About() {
  return (
    <section id="about" className="about-container">
      <h2>About Me</h2>
      <p>
      Responsible Full-Stack Developer with almost 3 years of experience in creating projects with perfect
UI/UX solutions, solving and detecting bugs, and testing. Equally adept at developing software for PC's, online environments, and mobile devices.
      </p>
      <p>Have strong skills of collecting, processing and mathematical analysis of data structures. I have excellent collaboration and communication skills as with teammates, as with other departments.</p>
      <a href="/resume.pdf" download className="resume-button">
        My Resume
      </a>
    </section>
  );
}

export default About;