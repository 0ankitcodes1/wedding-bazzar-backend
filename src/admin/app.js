import AuthLogo from './extensions/favicon.png';

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    theme: {
      colors: {
        primary100: '#FFC6DA',
        primary200: '#FFABC9',
        primary500: '#FF80AE',
        primary600: '#FF619A',
        primary700: '#FF4185',
        danger700: '#b72b1a'
      },
    },
    head: {
      favicon: AuthLogo
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Wedding Bazzar",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.welcome.title": "Welcome to Wedding Bazzar!",
        "Auth.form.register.subtitle": "Credentials are only used to authenticate in Dashboard. All saved data will be stored in your database."
      }
    },
    locales: ["en"],
  },
};
