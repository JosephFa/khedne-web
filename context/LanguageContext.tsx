'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Lang, Translation, translations } from '@/lib/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  tr: Translation;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ar',
  setLang: () => {},
  tr: translations.ar,
  dir: 'rtl',
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar');

  // Restore persisted language on mount
  useEffect(() => {
    const saved = localStorage.getItem('km-lang') as Lang | null;
    if (saved && ['ar', 'fr', 'en'].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  // Sync document dir/lang + persist
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    localStorage.setItem('km-lang', lang);
  }, [lang]);

  function setLang(newLang: Lang) {
    setLangState(newLang);
  }

  const dir: 'rtl' | 'ltr' = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: translations[lang], dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
