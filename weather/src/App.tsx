import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContextProvider } from "./context/languageContext";

import { GlobalStyle } from "./styles/global";

import Home from "./pages/Home";
import Results from "./pages/ResultWeather";

export function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <LanguageContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Routes>
      </LanguageContextProvider>
    </BrowserRouter>
  );
}