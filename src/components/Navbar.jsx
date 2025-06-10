import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <img src="/images/logo-with-text.svg" alt="GTU Blockchain" className="nav-logo-img" />
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => scrollToSection('home')}>{t('navigation.home')}</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>{t('navigation.about')}</a></li>
            <li><a href="#team" onClick={() => scrollToSection('team')}>{t('navigation.team')}</a></li>
            <li><a href="#achievements" onClick={() => scrollToSection('achievements')}>{t('navigation.achievements')}</a></li>
            <li><a href="#events" onClick={() => scrollToSection('events')}>{t('navigation.events')}</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>{t('navigation.contact')}</a></li>
          </ul>

          <div className="nav-actions">
            <div className="language-switcher">
              <button 
                onClick={() => changeLanguage('tr')}
                className={i18n.language === 'tr' ? 'active' : ''}
              >
                🇹🇷
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'active' : ''}
              >
                🇬🇧
              </button>
            </div>

            <div 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 