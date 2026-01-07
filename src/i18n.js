import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation }
  },
  lng: 'en',
  interpolation: { escapeValue: false }
});

export { default } from 'i18next';