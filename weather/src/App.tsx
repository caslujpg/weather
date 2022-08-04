import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LenguageContextProvider } from "./context/lenguageContext";
import Home from "./pages/Home";
import Results from "./pages/Results";

export function App() {
  return (
    <BrowserRouter>
      <LenguageContextProvider>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results/:location" element={<Results />} />
        </Routes>
        <Footer />
      </LenguageContextProvider>
    </BrowserRouter>
  );
}