import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LanguageContextProvider } from "./context/languageContext";
import Home from "./pages/Home";
import Results from "./pages/Results";

export function App() {
  return (
    <BrowserRouter>
      <LanguageContextProvider>
        <div style={{ height: "100vh" }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results/:location" element={<Results />} />
          </Routes>
          <Footer />
        </div>
      </LanguageContextProvider>
    </BrowserRouter>
  );
}