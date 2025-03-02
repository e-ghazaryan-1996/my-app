import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from '@/locales/en-US/translation.json';
import translationHy from '@/locales/hy-AM/translation.json';
import translationRu from '@/locales/ru-RU/translation.json';

const resources = {
  'en-US': { translation: translationEn },
  'hy-AM': { translation: translationHy },
  'ru-RU': { translation: translationRu },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem('language');

  if (!savedLanguage) {
    savedLanguage = Localization.locale;
  }

  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
