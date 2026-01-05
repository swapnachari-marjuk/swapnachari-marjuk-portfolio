import React from 'react';
import './Skills.css';
import AnimatedSection from '../AnimatedSection/AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'React','Tailwind CSS', 'HTML5',  'Responsive Design', 'CSS3', ]
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Firebase Token']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Database Design', 'CRUD Operations']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Thunder Client', 'npm']
    },
    {
      title: 'Currently Learning',
      skills: ['Next.js', 'TypeScript']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <AnimatedSection animation="fade-up">
          <h2 className="section-title">Skills & Technologies</h2>
        </AnimatedSection>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={index} 
              animation="fade-up-scale" 
              delay={index * 0.1}
            >
              <div className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;