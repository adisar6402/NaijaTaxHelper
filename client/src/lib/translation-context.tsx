import { createContext, useContext, useState, ReactNode } from 'react';
import { Translation, getTranslation } from './translations';

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translation;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('en');
  const t = getTranslation(language);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    // Fallback to English if context is not available
    return {
      language: 'en',
      setLanguage: () => {},
      t: getTranslation('en')
    };
  }
  return context;
}