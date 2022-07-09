import { I18nLocalize, i18n, withLanguage } from 'react-native-i18n-localize'

import Storage from '@react-native-async-storage/async-storage';
import React, {useCallback, useContext, useEffect, useState,createContext} from 'react';

import translations from '../constants/translations/';

export const TranslationContext = createContext();
export const TranslationProvider = ({ children }) => {

  const [locale, setLocale] = useState('en');

  // Set the locale once at the beginning of your app.
  i18n.locale = locale;
  // Set the key-value pairs for the different languages you want to support.
  i18n.translations = translations;
  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.fallbacks = true;

  const t = useCallback(
    (scope,options) => {
      return i18n.t(scope, {...options, locale});
    },
    [locale],
  );

  // get locale from storage
  const getLocale = useCallback(async () => {
    // get preferance gtom storage
    const localeJSON = await Storage.getItem('locale');

    // set Locale / compare if has updated
    setLocale(localeJSON !== null ? localeJSON : I18nLocalize.getLocale());
  }, [setLocale]);

  useEffect(() => {
    getLocale();
  }, [getLocale]);

  useEffect(() => {
    // save preferance to storage
    Storage.setItem('locale', locale);
  }, [locale]);

  const contextValue = {
    t,
    locale,
    setLocale,
    translate: t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};
export const useTranslation = () => useContext(TranslationContext);
