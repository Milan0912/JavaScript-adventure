import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import GameCardSlider from './CampaignSlider.jsx';
import './index.css';

const App = () => {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Navbar />
      {!showSlider ? (
        <Hero onStart={() => setShowSlider(true)} />
      ) : (
        <GameCardSlider/>
      )}
    </div>
  );
};

export default App;