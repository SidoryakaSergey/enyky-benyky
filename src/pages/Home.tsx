import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/seo/SEOHead';
import './/../styles/pages/Home.css';

export const Home: React.FC = () => {
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
    <div className="home">
      <SEOHead page="home" />
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t('home.welcome')}</h1>
            <p className="hero-description">{t('home.description')}</p>
            <p className="hero-talent">{t('home.talent')}</p>
            <Link to="/about" className="cta-button">
              {t('home.readMore')}
            </Link>
          </div>
          <div className="hero-visual">
            <div className="soundwave-animation">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>{t('services.title')}</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>{t('services.voiceover.title')}</h3>
              <p>{t('services.voiceover.description')}</p>
            </div>
            <div className="service-card">
              <h3>{t('services.dubbing.title')}</h3>
              <p>{t('services.dubbing.description')}</p>
            </div>
            <div className="service-card">
              <h3>{t('services.advertising.title')}</h3>
              <p>{t('services.advertising.description')}</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="cta-button">
              {t('home.readMore')}
            </Link>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="container">
          <h2>{t('footer.clients')}</h2>
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
      </section>
    </div>
  );
};
