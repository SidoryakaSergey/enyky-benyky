import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const LanguageURLHandler: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Check for language parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam && ['uk', 'ru', 'en', 'fr'].includes(langParam)) {
      if (i18n.language !== langParam) {
        i18n.changeLanguage(langParam);
      }
    }
  }, [location.search, i18n]);

  useEffect(() => {
    // Update URL when language changes
    const handleLanguageChange = (lng: string) => {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lng);
      window.history.replaceState({}, '', url.toString());
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return null;
};