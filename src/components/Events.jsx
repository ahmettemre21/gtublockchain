import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Events.css';

const Events = () => {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Placeholder etkinlik verileri
  const events = [
    {
      id: 1,
      title: 'ETHPrague 2025 Hackathon',
      date: '2025-01-15',
      type: 'Hackathon',
      participants: 12,
      image: '🏆',
      description: 'İlk uluslararası hackathon deneyimimiz',
      highlights: ['2 proje geliştirdik', 'Blockscout ödül havuzuna girdik', '12 kişilik büyük ekip']
    },
    {
      id: 2,
      title: 'Blockchain Workshop Serisi',
      date: '2024-12-10',
      type: 'Eğitim',
      participants: 35,
      image: '📚',
      description: 'Smart Contract geliştirme eğitimleri',
      highlights: ['Solidity temelleri', 'DeFi protokolleri', 'Web3 entegrasyonu']
    },
    {
      id: 3,
      title: 'DeFi Panel Tartışması',
      date: '2024-11-20',
      type: 'Panel',
      participants: 50,
      image: '💬',
      description: 'Merkeziyetsiz finans üzerine uzman görüşleri',
      highlights: ['Sektör uzmanları', 'Canlı soru-cevap', 'Networking fırsatı']
    },
    {
      id: 4,
      title: 'Web3 Geliştirici Meetup',
      date: '2024-10-15',
      type: 'Meetup',
      participants: 25,
      image: '🤝',
      description: 'Yerel blockchain geliştiricilerle buluşma',
      highlights: ['Proje paylaşımları', 'Kod incelemesi', 'İş birliği fırsatları']
    },
    {
      id: 5,
      title: 'NFT ve Dijital Sanat',
      date: '2024-09-30',
      type: 'Atölye',
      participants: 20,
      image: '🎨',
      description: 'NFT oluşturma ve pazarlama atölyesi',
      highlights: ['NFT mint süreci', 'Pazarlama stratejileri', 'Sanatçı görüşleri']
    },
    {
      id: 6,
      title: 'Blockchain Başlangıç Kursu',
      date: '2024-09-01',
      type: 'Kurs',
      participants: 40,
      image: '🔗',
      description: 'Blockchain teknolojisine giriş kursu',
      highlights: ['Temel kavramlar', 'Bitcoin ve Ethereum', 'Pratik uygulamalar']
    }
  ];

  const openEventModal = (event) => {
    setSelectedEvent(event);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section id="events" className="events section">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>{t('events.title')}</h2>
          <p>{t('events.gallery')}</p>
        </div>

        <div className="events-grid grid grid-3">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="event-card card fade-in-up" 
              onClick={() => openEventModal(event)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="event-image">
                <div className="event-emoji">{event.image}</div>
                <div className="event-type">{event.type}</div>
              </div>
              
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <span className="event-date">📅 {event.date}</span>
                  <span className="event-participants">👥 {event.participants} kişi</span>
                </div>
                <p>{event.description}</p>
              </div>

              <div className="event-overlay">
                <span>Detayları Gör</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="event-modal" onClick={closeEventModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-emoji">{selectedEvent.image}</div>
              <button className="close-button" onClick={closeEventModal}>×</button>
            </div>
            
            <div className="modal-body">
              <h3>{selectedEvent.title}</h3>
              <div className="modal-meta">
                <span>{selectedEvent.date}</span>
                <span>{selectedEvent.type}</span>
                <span>{selectedEvent.participants} Katılımcı</span>
              </div>
              
              <p>{selectedEvent.description}</p>
              
              <div className="event-highlights">
                <h4>Önemli Noktalar:</h4>
                <ul>
                  {selectedEvent.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="events-bg-pattern">
        <div className="calendar-icons">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`calendar-icon icon-${i + 1}`}>
              📅
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events; 