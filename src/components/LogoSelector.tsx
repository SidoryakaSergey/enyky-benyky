import React from 'react';
import logo3 from '../assets/logos/logo3.jpg';
import './LogoSelector.css';

export const LogoSelector: React.FC = () => {
  return (
    <div className="logo-selector">
      <div className="current-logo">
        <img src={logo3} alt="Еники-Беники" className="logo-image" />
      </div>
    </div>
  );
};
