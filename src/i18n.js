import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import trTranslation from '../public/locales/tr/translation.json';
import enTranslation from '../public/locales/en/translation.json';

const resources = {
  tr: {
    translation: trTranslation
  },
  en: {
    translation: enTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // default language
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 