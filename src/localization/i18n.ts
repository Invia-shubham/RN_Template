import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import th from './th.json';
import * as RNLocalize from 'react-native-localize';

export const AppLanguages = {
  english: 'en',
  thai: 'th',
};

export const defaultLanguage = AppLanguages.english;
const supportedLanguages = [AppLanguages.english, AppLanguages.thai];
const resources = {
  en: en,
  th: th,
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (languageChange: any) => {
    const osLanguage = RNLocalize.getLocales()[0].languageCode;
    setTimeout(() => {
      languageChange(
        supportedLanguages.includes(osLanguage) ? osLanguage : defaultLanguage,
      );
    }, 0);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    // lng: defaultLanguage, // default language to use.
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
export default i18n;
