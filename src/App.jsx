import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import GameCardSlider from './CampaignSlider.jsx';
import './index.css';
import ArrayQuest from './components/Intro'
import DataDungeon from './components/Level1'
import DataDungeonLevel2 from './components/Level2'
import DataDungeonLevel3 from './components/level21'
import DataDungeonLevel4 from './components/level22'
import LevelCompletionPopup from './components/pop'
import {Route,Routes} from 'react-router-dom' 
const App = () => {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <Routes>
      <Route path='/' element={<ArrayQuest />} />
      <Route path='/Level1' element={<DataDungeon />} />
      <Route path="/Level2" element={<DataDungeonLevel2 />} /> 
      <Route path="/level21" element={<DataDungeonLevel3 />} />
      <Route path="/level22" element={<DataDungeonLevel4 />} />
      <Route path="/pop" element={<LevelCompletionPopup />} />  
      </Routes>
    // <div className="min-h-screen bg-[#1a1a2e]">
    //   <Navbar />
    //   {!showSlider ? (
    //     <Hero onStart={() => setShowSlider(true)} />
    //   ) : (
    //     <GameCardSlider/>
    //   )}
    // </div>
  );
};

export default App;