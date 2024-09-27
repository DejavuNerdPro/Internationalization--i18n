const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const i18nextMiddleware = require('i18next-express-middleware');

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    fallbackLng: 'en',  // Fallback language to US English
    supportedLngs: ['en', 'my'],  // Support for US English and Burmese (Myanmar)
    debug: true,
    interpolation: {
      escapeValue: false,  // Not needed for server-side rendering
    },
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['cookie', 'querystring', 'header'],  // How language is detected
      caches: ['cookie'],  // Cache the language in cookies
    }
  });

module.exports = i18next;
