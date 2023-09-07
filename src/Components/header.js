import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="Images/back-icon.png" alt="back" className="back" />
      </Link>
      <h1>Countries</h1>
      <div className="icons-container">
        <img src="Images/mic-img.png" alt="Mic-icon" className="microphone" />
        <img src="Images/setting-img.png" alt="setting" className="setting" />
      </div>
    </div>
  );
}

export default Header;
