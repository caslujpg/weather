import { createContext, ReactNode, useContext, useState } from "react";

interface LanguageContextProps {
  children: ReactNode;
}

type LanguageContextType = {
  language: string;
  setLanguage: (newState: string) => void;
};

const initialState = {
  language: "Portugês",
  setLanguage: () => "Portugês",
};

export const LanguageContext = createContext<LanguageContextType>(initialState);

export function LanguageContextProvider({ children }: LanguageContextProps) {
  const [language, setLanguage] = useState(initialState.language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}