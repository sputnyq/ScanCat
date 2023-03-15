import i18next from 'i18next';
import * as RNLocalize from 'react-native-localize';

import en from './en';
import de from './de';

const locales = RNLocalize.getLocales();

i18next.init({
  compatibilityJSON: 'v3',
  debug: true,
  //TODO: select right code
  lng: locales[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {translation: en},
    de: {translation: de},
  },
});

function i18n(key: keyof typeof en) {
  return i18next.t(key);
}

export default i18n;
