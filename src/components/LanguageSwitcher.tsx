import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

interface Language {
  code: string;
  name: string;
  flag: string;
  fullName: string;
}

const languages: Language[] = [
  { code: 'uk', name: 'УКР', flag: '🇺🇦', fullName: 'Українська' },
  { code: 'ru', name: 'РУС', flag: '🇷🇺', fullName: 'Русский' },
  { code: 'en', name: 'ENG', flag: '🇺🇸', fullName: 'English' },
  { code: 'fr', name: 'FR', flag: '🇫🇷', fullName: 'Français' },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="lang-name">{currentLanguage.name}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map(language => (
            <button
              key={language.code}
              className={`language-option ${
                i18n.language === language.code ? 'active' : ''
              }`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="flag">{language.flag}</span>
              <span className="lang-details">
                <span className="lang-name">{language.name}</span>
                <span className="lang-full">{language.fullName}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
