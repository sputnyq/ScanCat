import * as RNLocalize from 'react-native-localize';
import i18next from 'i18next';

import en from './en';

import de from './de';

const locales = RNLocalize.getLocales();

i18next.init({
  compatibilityJSON: 'v3',
  debug: true,
  //TODO: select right code
  lng: locales[0].languageCode,
  resources: {
    de: {translation: de},
    en: {translation: en},
  },
});

const i18n = i18next;

export default i18n;
