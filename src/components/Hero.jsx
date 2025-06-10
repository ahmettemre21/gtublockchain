import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blockchain-animation">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`block block-${i + 1}`}>
              <div className="block-content">⧉</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              {t('home.title')}
            </h1>
            <p className="hero-subtitle">
              {t('home.subtitle')}
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                {t('home.joinUs')}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('events')}
              >
                {t('home.viewEvents')}
              </button>
            </div>
          </div>
          
          <div className="hero-visual floating">
            <div className="blockchain-logo">
              <div className="chain-link"></div>
              <div className="chain-link"></div>
              <div className="chain-link"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 