import React from 'react';
import { useTranslation } from 'react-i18next';
import './../../styles/components/Footer.css';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Еники-Беники</h3>
            <p>{t('contacts.address')}</p>
            <p>{t('contacts.phone')}</p>
            <p>{t('contacts.email')}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Еники-Беники. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
