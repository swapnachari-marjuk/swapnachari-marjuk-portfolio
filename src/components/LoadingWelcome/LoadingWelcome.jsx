import React, { useState, useEffect } from 'react';
import './LoadingWelcome.css';

const LoadingWelcome = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start fade-out animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(true);
      
      // Complete fade-out after animation duration
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete();
      }, 800); // Match CSS transition duration
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-welcome ${isAnimating ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-text">
          <h1>Welcome to my portfolio</h1>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingWelcome;