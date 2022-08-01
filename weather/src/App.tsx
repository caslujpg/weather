import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";

export const ReactAppGoogleApiKey = "AIzaSyAgcFSLSwZlYpyldU6IHEO8QRMGdo3kJqE";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
      <GlobalStyle />
    </>
  );
}