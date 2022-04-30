import i18n from 'i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: require('./assets/localization/en.json')
};

i18n.init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
