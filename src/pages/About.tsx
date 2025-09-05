import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/SEOHead';
import './About.css';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <SEOHead page="about" />
      <div className="container">
        <section className="page-header">
          <h1>{t('about.title')}</h1>
        </section>

        <section className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <div className="about-section">
                <p>{t('about.studio')}</p>
              </div>

              <div className="about-section">
                <p>{t('about.quality')}</p>
              </div>

              <div className="about-section">
                <p>{t('about.hours')}</p>
              </div>

              <div className="about-section highlight">
                <p>{t('about.showbiz')}</p>
              </div>

              <div className="about-section">
                <p>{t('about.approach')}</p>
              </div>

              <div className="about-section">
                <p>{t('about.budget')}</p>
              </div>
            </div>

            <div className="about-visual">
              <div className="studio-image">
                <div className="image-placeholder">
                  <h3>Studio Image</h3>
                  <p>Kyiv, Podil</p>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <h3>1000+</h3>
                  <p>Hours dubbed</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Celebrity voices</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
