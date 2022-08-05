import { BrowserRouter } from "react-router-dom";
import { LanguageContextProvider } from "./context/languageContext";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./Routes";
import { LocationContextProvider } from "./context/locationContext";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <LocationContextProvider>
        <LanguageContextProvider>
          <AppRoutes />
        </LanguageContextProvider>
      </LocationContextProvider>
    </BrowserRouter>
  );
}