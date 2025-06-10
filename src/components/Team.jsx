import React from 'react';
import { useTranslation } from 'react-i18next';
import './Team.css';

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Ahmet Emre Yavuz',
      role: t('team.members.president'),
      emoji: '👑',
      gradient: 'linear-gradient(135deg, #ff6b6b, #feca57)'
    },
    {
      name: 'Yusuf Alperen Çelik',
      role: t('team.members.vicePresident'),
      emoji: '🚀',
      gradient: 'linear-gradient(135deg, #5f27cd, #a55eea)'
    },
    {
      name: 'Emirhan Güney',
      role: t('team.members.vicePresident'),
      emoji: '⚡',
      gradient: 'linear-gradient(135deg, #00d2d3, #54a0ff)'
    },
    {
      name: 'Hüseyin Umut Satır',
      role: t('team.members.techLead'),
      emoji: '💻',
      gradient: 'linear-gradient(135deg, #2ed573, #7bed9f)'
    },
    {
      name: 'Eren Yılmaz',
      role: t('team.members.sponsorshipLead'),
      emoji: '🤝',
      gradient: 'linear-gradient(135deg, #ff7675, #fd79a8)'
    },
    {
      name: 'Salih Cengiz',
      role: t('team.members.financeDirector'),
      emoji: '💰',
      gradient: 'linear-gradient(135deg, #fdcb6e, #e17055)'
    }
  ];

  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>{t('team.title')}</h2>
        </div>

        <div className="team-grid grid grid-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card card fade-in-up">
              <div className="member-avatar" style={{ background: member.gradient }}>
                <span className="member-emoji">{member.emoji}</span>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
              <div className="member-overlay">
                <div className="social-links">
                  <div className="link-placeholder">LinkedIn</div>
                  <div className="link-placeholder">GitHub</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="team-bg-elements">
        <div className="floating-element element-1">👥</div>
        <div className="floating-element element-2">🎯</div>
        <div className="floating-element element-3">⚡</div>
        <div className="floating-element element-4">🚀</div>
      </div>
    </section>
  );
};

export default Team; 