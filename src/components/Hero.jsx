import React from 'react';
import FloatingElements from './FloatingElements';
import '../index.css';

const Hero = ({ onStart }) => {
  return (
    <div className="hero">
      <FloatingElements />
      <h1>JavaScript Adventures</h1>
      <p>Learn JavaScript Through Interactive Gaming</p>
      <button className="cta-button" onClick={onStart}>Start Your Adventure</button>
    </div>
  );
};

export default Hero;
