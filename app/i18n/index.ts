import i18next from 'i18next';
import * as RNLocalize from 'react-native-localize';

import en from './en';
import de from './de';

const supportedLanguages = ['de', 'en'];

const selectLanguage = () => {
  const userLngs = RNLocalize.getLocales().map(l => l.languageCode);

  let curLng = 'en';

  let i = 0;
  const {length} = userLngs;

  while (i < length) {
    if (supportedLanguages.includes(userLngs[i])) {
      curLng = userLngs[i];
      i = length;
      return;
    }
    i++;
  }

  return curLng;
};

i18next.init({
  compatibilityJSON: 'v3',
  debug: true,
  lng: selectLanguage(),
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
