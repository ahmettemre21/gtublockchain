import React from 'react';
import { useTranslation } from 'react-i18next';
import './Achievements.css';

const Achievements = () => {
  const { t } = useTranslation();

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>{t('achievements.title')}</h2>
        </div>

        <div className="achievement-showcase">
          <div className="main-achievement card fade-in-up">
            <div className="achievement-header">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-badge">2025</div>
            </div>
            
            <div className="achievement-content">
              <h3>{t('achievements.ethprague.title')}</h3>
              <p className="achievement-desc">{t('achievements.ethprague.description')}</p>
              
              <div className="achievement-stats">
                <div className="stat-item">
                  <div className="stat-number">12</div>
                  <div className="stat-label">Ekip Üyesi</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Proje</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">$10K</div>
                  <div className="stat-label">Ödül Havuzu</div>
                </div>
              </div>

              <div className="achievement-details">
                {t('achievements.ethprague.details', { returnObjects: true }).map((detail, index) => (
                  <div key={index} className="detail-item">
                    <span className="detail-icon">✨</span>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="achievement-glow"></div>
          </div>

          <div className="future-achievements">
            <div className="future-card card fade-in-up">
              <div className="future-icon">🚀</div>
              <h4>Gelecek Hedeflerimiz</h4>
              <p>Daha büyük hackathonlar, açık kaynak projeler ve blockchain eğitimleri...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="achievements-bg">
        <div className="trophy-pattern">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`trophy-icon trophy-${i + 1}`}>
              🏆
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 