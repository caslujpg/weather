import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface LocationContextProps {
  children: ReactNode;
}

type Location = {
  lat: number; 
  lng: number;
};

type LocationContextType = {
  location: Location | null;
  handleChangeLocation(newLocation: Location): void;
};

export const LocationContext = createContext<LocationContextType>({} as LocationContextType);

export function LocationContextProvider({ children }: LocationContextProps) {
  const [location, setLocation] = useState<Location | null>(null);

  const handleChangeLocation = useCallback((newLocation: Location) => {
    setLocation(newLocation)
  }, [])

  return (
    <LocationContext.Provider value={{ location, handleChangeLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}