import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Role-Based Dashboard',
      description: 'A comprehensive admin dashboard with role-based access control, user management, and secure authentication system.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with shopping cart, payment integration, and order management system.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      name: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and project tracking features.',
      techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      name: 'Blog Platform',
      description: 'Modern blogging platform with rich text editor, comment system, and user authentication.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Quill.js'],
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/400/250'
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
                <div className="placeholder-image">
                  <span>Project Screenshot</span>
                </div>
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
                  <a href={project.liveLink} className="project-link live-link">
                    <span>Live Demo</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a href={project.githubLink} className="project-link github-link">
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