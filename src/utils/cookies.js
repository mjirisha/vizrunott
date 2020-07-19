import Cookies from 'js-cookie';

export const getLang = () => {
  return Cookies.get('lang');
};

export const setLang = (lang) => {
  Cookies.set('lang', lang, { expires: 365, path: '/' });
};
