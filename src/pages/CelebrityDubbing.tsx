import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/SEOHead';
import './CelebrityDubbing.css';

export const CelebrityDubbing: React.FC = () => {
  const { t } = useTranslation();

  const celebrities = [
    {
      name: 'Дмитро Кулеба',
      role: 'Politician, Former Minister of Foreign Affairs',
      image: '/images/kuleba.jpg',
    },
    {
      name: 'Олена Кравець',
      role: 'Comedian, Actress',
      image: '/images/kravets.jpg',
    },
    {
      name: 'Олег Скрипка',
      role: 'Musician, Singer',
      image: '/images/skrypka.jpg',
    },
  ];

  return (
    <div className="celebrity-dubbing">
      <SEOHead page="celebrity" />
      <div className="container">
        <section className="page-header">
          <h1>{t('celebrity.title')}</h1>
          <p className="celebrity-intro">{t('celebrity.description')}</p>
        </section>

        <section className="celebrities-showcase">
          <h2>Featured Celebrity Voices</h2>
          <div className="celebrities-grid">
            {celebrities.map((celebrity, index) => (
              <div key={index} className="celebrity-card">
                <div className="celebrity-image">
                  <div className="image-placeholder">
                    {celebrity.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </div>
                </div>
                <div className="celebrity-info">
                  <h3>{celebrity.name}</h3>
                  <p>{celebrity.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="celebrity-services">
          <div className="services-grid">
            <div className="service-item">
              <h3>🎬 Film Dubbing</h3>
              <p>Professional dubbing for feature films and documentaries</p>
            </div>
            <div className="service-item">
              <h3>📺 TV Series</h3>
              <p>Series and episode dubbing with consistent character voices</p>
            </div>
            <div className="service-item">
              <h3>🎥 Commercials</h3>
              <p>Celebrity endorsements and advertising campaigns</p>
            </div>
            <div className="service-item">
              <h3>📻 Radio Shows</h3>
              <p>Radio program hosting and voice-over work</p>
            </div>
          </div>
        </section>

        <section className="celebrity-cta">
          <div className="cta-content">
            <h2>Want to work with celebrity voices?</h2>
            <p>
              We have connections with virtually any Ukrainian show business
              representative
            </p>
            <a href="/contacts" className="cta-button">
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
