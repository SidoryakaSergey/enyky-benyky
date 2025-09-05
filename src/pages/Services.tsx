import React from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'voiceover',
      icon: '🎤',
    },
    {
      key: 'dubvoice',
      icon: '🎬',
    },
    {
      key: 'dubbing',
      icon: '🎭',
    },
    {
      key: 'dcp',
      icon: '🎞️',
    },
    {
      key: 'advertising',
      icon: '📢',
    },
    {
      key: 'complex',
      icon: '📚',
    },
    {
      key: 'additional',
      icon: '⚙️',
    },
  ];

  return (
    <div className="services">
      <div className="container">
        <section className="page-header">
          <h1>{t('services.title')}</h1>
          <p className="services-intro">{t('services.intro')}</p>
        </section>

        <section className="services-grid">
          {services.map(service => (
            <div key={service.key} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="service-description">
                {t(`services.${service.key}.description`)}
              </p>
            </div>
          ))}
        </section>

        <section className="services-cta">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>Contact us to discuss your project and get a quote</p>
            <a href="/contacts" className="cta-button">
              {t('nav.contacts')}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
