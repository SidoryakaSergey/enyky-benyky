import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/seo/SEOHead';
import './/../styles/pages/Contacts.css';

export const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contacts">
      <SEOHead page="contacts" />
      <div className="container">
        <section className="page-header">
          <h1>{t('contacts.title')}</h1>
          <h2 className="visit-title">{t('contacts.visit')}</h2>
          <p className="contacts-intro">{t('contacts.approach')}</p>
        </section>

        <section className="contacts-content">
          <div className="contacts-grid">
            <div className="contact-info">
              <div className="contact-item">
                <h3>📍 {t('contacts.address')}</h3>
              </div>

              <div className="contact-item">
                <h3>📧 Email</h3>
                <a href="mailto:info@enykybenyky.com.ua">
                  {t('contacts.email')}
                </a>
                <br />
                <a href="mailto:toenykybenyky@gmail.com">
                  toenykybenyky@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <h3>📞 Phone</h3>
                <a href="tel:+380672681717">{t('contacts.phone')}</a>
              </div>

              <div className="contact-form">
                <h3>Send us a message</h3>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2287665!2d30.5146!3d50.472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce4a4f4b4c4d%3A0x1a2b3c4d5e6f7a8b!2z0LLRg9C70LjRhtGPINCS0ZbQutC10L3RgtGW0Y8g0KXQstC-0LnQutC4LCAxNS8xNSwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Enyky-Benyky Studio Location"
                ></iframe>
              </div>

              <div className="location-info">
                <h3>🏢 Studio Location</h3>
                <p>Located in the heart of Kyiv's historic Podil district</p>
                <p>Easy access by public transport</p>
                <p>Parking available nearby</p>
              </div>
            </div>
          </div>
        </section>

        <section className="working-hours">
          <div className="hours-grid">
            <div className="hours-item">
              <h3>🕒 Working Hours</h3>
              <p>Monday - Friday: 9:00 - 18:00</p>
              <p>Saturday: 10:00 - 16:00</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="hours-item">
              <h3>⚡ Quick Response</h3>
              <p>We typically respond within 2 hours during business hours</p>
              <p>For urgent projects, call us directly</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
