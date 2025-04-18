import React, { useEffect } from 'react';
import '../index.css';

const FloatingElements = () => {
  useEffect(() => {
    const container = document.querySelector('.floating-elements');
    const createdElements = [];

    for (let i = 0; i < 10; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.width = Math.random() * 30 + 20 + 'px';
      element.style.height = element.style.width;
      element.style.left = Math.random() * 100 + '%';
      element.style.top = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(element);
      createdElements.push(element);
    }

    // Cleanup on unmount
    return () => {
      createdElements.forEach(el => container.removeChild(el));
    };
  }, []);

  return <div className="floating-elements"></div>;
};

export default FloatingElements;
