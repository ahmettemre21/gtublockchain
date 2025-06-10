import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/gtublockchain',
      icon: '/images/social/instagram.svg',
      color: 'linear-gradient(135deg, #E4405F, #F56040)',
      hoverColor: '#E4405F'
    },
    {
      name: 'X',
      url: 'https://x.com/gtublockchain',
      icon: '/images/social/x.svg',
      color: 'linear-gradient(135deg, #000000, #1a1a1a)',
      hoverColor: '#000000'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/gtublockchain',
      icon: '/images/social/linkedin.svg',
      color: 'linear-gradient(135deg, #0077B5, #005885)',
      hoverColor: '#0077B5'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@gtublockchain',
      icon: '/images/social/youtube.svg',
      color: 'linear-gradient(135deg, #FF0000, #CC0000)',
      hoverColor: '#FF0000'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.info')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <div className="info-card card">
              <div className="info-icon">📧</div>
              <h3>E-posta</h3>
              <a href="mailto:blockchain@gtu.edu.tr">blockchain@gtu.edu.tr</a>
            </div>

            <div className="social-media">
              <h3>Sosyal Medya</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ background: social.color }}
                  >
                    <img src={social.icon} alt={social.name} className="social-icon-img" />
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-in-up">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3>Bize Mesaj Gönderin</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${isSubmitted ? 'submitted' : ''}`}
                disabled={isSubmitted}
              >
                {isSubmitted ? '✓ Gönderildi!' : t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-bg-pattern">
        <div className="message-bubbles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`message-bubble bubble-${i + 1}`}>
              💬
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 