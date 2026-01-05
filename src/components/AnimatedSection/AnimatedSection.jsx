import React from 'react';
import './AnimatedSection.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const animationStyle = {
    '--animation-delay': `${delay}s`,
    '--animation-duration': `${duration}s`
  };

  return (
    <div
      ref={ref}
      className={`animated-section ${animation} ${isVisible ? 'animate' : ''} ${className}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;