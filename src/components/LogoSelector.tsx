import React from 'react';
import logo1 from '../assets/logos/logo1.jpg';
import './LogoSelector.css';

export const LogoSelector: React.FC = () => {
  return (
    <div className="logo-selector">
      <div className="current-logo">
        <img src={logo1} alt="Еники-Беники" className="logo-image" />
      </div>
    </div>
  );
};
