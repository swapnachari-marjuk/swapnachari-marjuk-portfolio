import React from 'react';
import './Projects.css';
import buzzsHub from '../../assets/Projecs/buzzsHub.png';
import iehub from '../../assets/Projecs/IEHub.png';
import heroIo from "../../assets/Projecs/hero_io.png"
import weather from '../../assets/Projecs/weather-app.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Buzz'sHub",
      description: "Buzz’sHub is a full-stack MERN Web Application designed to manage local community clubs such as Photography, Hiking, Tech, and Book Clubs. The platform helps users discover clubs, join memberships, participate in events, and enables club managers and admins to manage members, payments, and events efficiently.",
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebas Authentication', 'Stripe'],
      liveLink: 'https://buzzs-hub.web.app/',
      githubLink: 'https://github.com/swapnachari-marjuk/BuzzsHub-Client',
      image: buzzsHub
    },
    {
      id: 2,
      name: 'IEHub',
      description: 'IEHub is a full-stack web application designed for export-import management. It enables users to seamlessly add, track, and manage their export and import transactions. Users can view their specific export/import data across different routes, providing a structured and personalized experience.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: 'https://import-export-hub.web.app/',
      githubLink: 'https://github.com/swapnachari-marjuk/iehub-client-side',
      image: iehub
    },
    {
      id: 3,
      name: 'Hero IO',
      description: 'This is a demo project to further improve my React skills. I created fake JSON data and fetched it to display dynamically across different pages in the UI.',
      techStack: ['Tailwind', 'Javascript', 'React'],
      liveLink: 'https://hero-io-by-marjuk.netlify.app',
      githubLink: 'https://github.com/swapnachari-marjuk/hero_io',
      image: heroIo
    },
    {
      id: 4,
      name: 'Weather App',
      description: `A simple and interactive web application where users can search for any city and instantly view its current weather information. 
      This project was developed as a practice exercise focused on DOM manipulation. It integrates the OpenWeather (OpenAPI) service to fetch real-time weather data. The application is built entirely with vanilla JavaScript, and Tailwind CSS is used to ensure a clean and responsive user interface.`,
      techStack: ["HTML", "Tailwind", "Javascript"],
      liveLink: 'https://swapnachari-marjuk.github.io/weather-app',
      githubLink: 'https://github.com/swapnachari-marjuk/weather-app',
      image: weather
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="section-title fade-in-up">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card fade-in-up">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="project-img"
                />
              </div>

              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveLink} target="_blank" className="project-link live-link">
                    <span>Live Demo</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a href={project.githubLink} target="_blank" className="project-link github-link">
                    <span>GitHub</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;