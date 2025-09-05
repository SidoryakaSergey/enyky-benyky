import React from 'react';
import { useTranslation } from 'react-i18next';
import './../../styles/components/Footer.css';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const clients = [
    'BBC Worldwide',
    'Technicolor',
    'UIP',
    'Fox',
    'DreamWorks',
    'SVT',
    'Nickelodeon',
    'TV4',
    'Warner Bros',
    'NBCUniversal',
    'Nordisk Film',
    'Entertainment One',
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="clients-section">
          <h3>{t('footer.clients')}</h3>
          <div className="clients-banner">
            <div className="clients-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="client-logo">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>

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
