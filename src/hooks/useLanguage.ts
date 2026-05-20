import { useState, useEffect } from 'react';

export type Lang = 'en' | 'ko';
export type T = (text: { en: string; ko: string }) => string;

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('resumeLang') as Lang) ?? 'en'
  );

  useEffect(() => {
    localStorage.setItem('resumeLang', lang);
    document.documentElement.lang = lang;
    document.body.classList.toggle('ko', lang === 'ko');
  }, [lang]);

  const toggle = () => setLang(l => (l === 'en' ? 'ko' : 'en'));
  const t: T = ({ en, ko }) => (lang === 'en' ? en : ko);

  return { lang, toggle, t };
}
