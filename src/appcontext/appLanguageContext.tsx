import React, {createContext, ReactNode} from 'react';
import {useTranslation} from 'react-i18next';
import {AppLanguages, defaultLanguage} from '../localization/i18n';
import { useAppSelector } from '../redux/hooks';

interface ContextState {
  isThaiSelected: boolean;
  currentLanguage: string;
}

const initialContext: ContextState = {isThaiSelected: false, currentLanguage: defaultLanguage};
export const AppLangContext = createContext(initialContext);

interface AppLangContextProviderProps {
  children: ReactNode;
}

export const AppLangContextProvider: React.FC<AppLangContextProviderProps> = ({children}) => {
  const {i18n} = useTranslation();
  const selectedLanguage = useAppSelector(
    state => state.authentication?.appSettings?.selectedLanguage // Added optional chaining here
  );
  const {language} = i18n;
  const userAlreadySelectedAppLanguage = selectedLanguage && selectedLanguage?.length > 0;
  const isUserSelectedLanguageThai = selectedLanguage === AppLanguages.thai;

  const contextValue: ContextState = {
    isThaiSelected: userAlreadySelectedAppLanguage
      ? isUserSelectedLanguageThai
      : language === AppLanguages.thai,
    currentLanguage: language,
  };

  return <AppLangContext.Provider value={contextValue}>{children}</AppLangContext.Provider>;
};
