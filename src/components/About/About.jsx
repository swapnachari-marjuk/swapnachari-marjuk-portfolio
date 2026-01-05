import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title fade-in-up">About Me</h2>
        
        <div className="about-text fade-in-up">
          <p>
            I'm a passionate Junior MERN Stack Developer with hands-on experience in building 
            full-stack web applications. My journey in web development has been focused on 
            creating practical, real-world solutions that solve genuine problems.
          </p>
          
          <p>
            I have successfully developed authentication systems and role-based dashboard 
            projects, giving me solid experience in user management and secure application 
            architecture. My approach to development emphasizes clean code, user experience, 
            and scalable solutions.
          </p>
          
          <p>
            What drives me is my adaptability and problem-solving mindset. I thrive on 
            learning new technologies and tackling complex challenges. Currently, I'm 
            expanding my skills with Next.js to build even more powerful and performant 
            web applications.
          </p>
          
          <p>
            I believe in continuous growth and staying updated with the latest industry 
            trends. My goal is to contribute to meaningful projects while constantly 
            improving my technical expertise and development practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;