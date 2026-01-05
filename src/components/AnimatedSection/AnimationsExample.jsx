import React from 'react';
import AnimatedSection from './AnimatedSection';

// Example component showing different animation patterns
const AnimationExamples = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Animation Examples</h2>
      
      {/* Basic fade up */}
      <AnimatedSection animation="fade-up">
        <div style={{ background: '#1a1a1a', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
          Fade Up Animation
        </div>
      </AnimatedSection>

      {/* Slide from left with delay */}
      <AnimatedSection animation="slide-left" delay={0.2}>
        <div style={{ background: '#1a1a1a', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
          Slide Left with 0.2s delay
        </div>
      </AnimatedSection>

      {/* Scale in animation */}
      <AnimatedSection animation="scale-in" delay={0.4}>
        <div style={{ background: '#1a1a1a', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
          Scale In Animation
        </div>
      </AnimatedSection>

      {/* Staggered animations */}
      <div>
        <h3>Staggered List Items:</h3>
        {[1, 2, 3, 4].map((item, index) => (
          <AnimatedSection 
            key={item} 
            animation="fade-up" 
            delay={index * 0.1}
          >
            <div style={{ 
              background: '#1a1a1a', 
              padding: '0.5rem 1rem', 
              margin: '0.5rem 0', 
              borderRadius: '4px' 
            }}>
              Staggered Item {item}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default AnimationExamples;