import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContextProvider } from "./context/languageContext";

import { GlobalStyle } from "./styles/global";

import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Results from "./pages/ResultWeather";

export function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <LanguageContextProvider>
        <div style={{ height: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Routes>
          <Footer />
        </div>
      </LanguageContextProvider>
    </BrowserRouter>
  );
}