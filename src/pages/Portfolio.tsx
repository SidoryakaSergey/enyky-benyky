import React from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      title: 'Feature Film Dubbing',
      category: 'dubbing',
      type: 'video',
      description: 'Full dubbing for international blockbuster',
    },
    {
      title: 'Documentary Voice-over',
      category: 'voiceover',
      type: 'video',
      description: 'Professional voice-over for nature documentary',
    },
    {
      title: 'TV Series Episode',
      category: 'dubbing',
      type: 'video',
      description: 'Multi-character dubbing for popular TV series',
    },
    {
      title: 'Commercial Advertisement',
      category: 'advertising',
      type: 'audio',
      description: 'Celebrity voice commercial for major brand',
    },
    {
      title: 'Radio Program',
      category: 'advertising',
      type: 'audio',
      description: 'Weekly radio show production and hosting',
    },
    {
      title: 'Animation Dubbing',
      category: 'dubbing',
      type: 'video',
      description: "Children's animated series dubbing",
    },
  ];

  const categories = ['all', 'dubbing', 'voiceover', 'advertising'];

  return (
    <div className="portfolio">
      <div className="container">
        <section className="page-header">
          <h1>{t('portfolio.title')}</h1>
          <p>Showcase of our professional dubbing and voice-over work</p>
        </section>

        <section className="portfolio-filters">
          <div className="filter-buttons">
            {categories.map(category => (
              <button key={category} className="filter-btn active">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </section>

        <section className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`portfolio-item ${item.category}`}>
              <div className="portfolio-media">
                {item.type === 'video' ? (
                  <div className="video-placeholder">
                    <div className="play-button">▶️</div>
                    <span className="media-type">VIDEO</span>
                  </div>
                ) : (
                  <div className="audio-placeholder">
                    <div className="audio-icon">🎵</div>
                    <span className="media-type">AUDIO</span>
                  </div>
                )}
              </div>
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <p className="category-tag">{item.category.toUpperCase()}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="portfolio-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Hours of Content</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Celebrity Collaborations</p>
            </div>
            <div className="stat-item">
              <h3>6</h3>
              <p>Languages Supported</p>
            </div>
          </div>
        </section>

        <section className="portfolio-cta">
          <div className="cta-content">
            <h2>Impressed by our work?</h2>
            <p>Let's discuss your next project</p>
            <a href="/contacts" className="cta-button">
              Start Your Project
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
