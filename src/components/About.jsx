import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>{t('about.title')}</h2>
        </div>

        <div className="about-content">
          <div className="about-description card fade-in-up">
            <p>{t('about.description')}</p>
          </div>

          <div className="about-goals card fade-in-up">
            <h3>{t('about.goals.title')}</h3>
            <ul>
              {t('about.goals.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="vision-mission-grid grid grid-2">
            <div className="vision-card card fade-in-up">
              <div className="card-icon">🎯</div>
              <h3>{t('about.vision.title')}</h3>
              <p>{t('about.vision.description')}</p>
            </div>

            <div className="mission-card card fade-in-up">
              <div className="card-icon">🚀</div>
              <h3>{t('about.mission.title')}</h3>
              <p>{t('about.mission.description')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bg-pattern">
        <div className="pattern-element"></div>
        <div className="pattern-element"></div>
        <div className="pattern-element"></div>
      </div>
    </section>
  );
};

export default About; 