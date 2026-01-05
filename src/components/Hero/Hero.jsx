import React from 'react';
import './Hero.css';
import profileImage from '../../assets/marjuk-p.jpg'
import AnimatedSection from '../AnimatedSection/AnimatedSection';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <h1 className="hero-greeting">
              Hi, I'm <span className="highlight">Ahmad Marjuk</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={0.2}>
            <h2 className="hero-title">
              MERN-focused Junior Developer
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={0.3}>
            <p className="hero-description">
              Building practical, real-world full-stack web applications with modern technologies
            </p>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="scale-in" delay={0.4}>
          <div className="hero-image">
            <img src={profileImage} alt="Ahmad Marjuk" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;