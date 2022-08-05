import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface LanguageContextProps {
  children: ReactNode;
}

type LanguageContextType = {
  language: keyof typeof languageMap;
  longLanguage: string;
  handleChangeLanguage: (language: keyof typeof languageMap) => void;
};

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

const languageMap = {
  "pt_br": "Portugês",
  "en": "English",
  "sp": "Spain"
}

export function LanguageContextProvider({ children }: LanguageContextProps) {
  const [language, setLanguage] = useState<keyof typeof languageMap>("pt_br");

  const [longLanguage, setLongLanguage] = useState(languageMap["pt_br"]);

  const handleChangeLanguage = useCallback((newLanguage: keyof typeof languageMap) => {
    setLanguage(newLanguage);
    setLongLanguage(languageMap[newLanguage]) 
  }, [])

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage, longLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}