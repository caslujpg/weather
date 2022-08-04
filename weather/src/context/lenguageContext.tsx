import { createContext, ReactNode, useContext, useState } from "react";

interface LenguageContextProps {
  children: ReactNode;
}

type LenguageContextType = {
  lenguage: string;
  setLenguage: (newState: string) => void;
};

const initialState = {
  lenguage: "Portugês",
  setLenguage: () => "Portugês",
};

export const LenguageContext = createContext<LenguageContextType>(initialState);

export function LenguageContextProvider({ children }: LenguageContextProps) {
  const [lenguage, setLenguage] = useState(initialState.lenguage);

  return (
    <LenguageContext.Provider value={{ lenguage, setLenguage }}>
      {children}
    </LenguageContext.Provider>
  );
}

export function useLenguage() {
  return useContext(LenguageContext);
}