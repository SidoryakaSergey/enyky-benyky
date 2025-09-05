import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { LogoSelector } from '../ui/LogoSelector';
import './../../styles/components/Header.css';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-container">
          <LogoSelector />
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/services"
            className={`nav-link ${isActiveLink('/services') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.services')}
          </Link>
          <Link
            to="/celebrity-dubbing"
            className={`nav-link ${
              isActiveLink('/celebrity-dubbing') ? 'active' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.celebrity')}
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${isActiveLink('/portfolio') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.portfolio')}
          </Link>
          <Link
            to="/contacts"
            className={`nav-link ${isActiveLink('/contacts') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.contacts')}
          </Link>
        </nav>

        <div className="header-controls">
          <LanguageSwitcher />
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
