import React, { useState } from 'react';
import logo1 from '../assets/logos/logo1.jpg';
import logo2 from '../assets/logos/logo2.jpg';
import logo3 from '../assets/logos/logo3.jpg';
import './LogoSelector.css';

const logos = [
  { id: 1, src: logo1, alt: 'Logo 1' },
  { id: 2, src: logo2, alt: 'Logo 2' },
  { id: 3, src: logo3, alt: 'Logo 3' },
];

export const LogoSelector: React.FC = () => {
  const [selectedLogo, setSelectedLogo] = useState(logos[0]);

  return (
    <div className="logo-selector">
      <div className="current-logo">
        <img
          src={selectedLogo.src}
          alt={selectedLogo.alt}
          className="logo-image"
        />
      </div>
      <div className="logo-options">
        {logos.map(logo => (
          <button
            key={logo.id}
            onClick={() => setSelectedLogo(logo)}
            className={`logo-option ${
              selectedLogo.id === logo.id ? 'active' : ''
            }`}
          >
            <img src={logo.src} alt={logo.alt} />
          </button>
        ))}
      </div>
    </div>
  );
};
