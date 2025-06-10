import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">GTU</span>
                <span className="logo-accent">Blockchain</span>
              </div>
              <p className="footer-description">
                Blockchain teknolojisinin gücüyle geleceği şekillendiren 
                Gebze Teknik Üniversitesi öğrenci topluluğu.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Hızlı Linkler</h4>
                <ul>
                  <li><a href="#about">Hakkımızda</a></li>
                  <li><a href="#team">Ekibimiz</a></li>
                  <li><a href="#achievements">Başarılarımız</a></li>
                  <li><a href="#events">Etkinlikler</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>İletişim</h4>
                <ul>
                  <li><a href="mailto:blockchain@gtu.edu.tr">blockchain@gtu.edu.tr</a></li>
                  <li><a href="https://instagram.com/gtublockchain" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://x.com/gtublockchain" target="_blank" rel="noopener noreferrer">Twitter/X</a></li>
                  <li><a href="https://linkedin.com/company/gtublockchain" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Teknolojiler</h4>
                <ul>
                  <li>Blockchain</li>
                  <li>Smart Contracts</li>
                  <li>Web3</li>
                  <li>DeFi</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>{t('footer.copyright')}</p>
            </div>
            
            <button className="scroll-to-top" onClick={scrollToTop}>
              <span>⬆️</span>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-pattern">
        <div className="chain-pattern">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`chain-link-footer link-${i + 1}`}>
              ⧉
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 