import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo">
          <span>JA</span>
        </div>
        <div className="brand">JavaScript Adventures</div>
      </div>
      <div className="nav-links">
        <a href="#games">Games</a>
        <a href="#leaderboard">Leaderboard</a>
        <a href="#profile">Profile</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
