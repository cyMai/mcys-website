import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects'
      },
      // ... 其他翻译内容
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        education: '学习情况',
        experience: '实习经历',
        projects: '项目经历'
      },
      // ... 其他翻译内容
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 