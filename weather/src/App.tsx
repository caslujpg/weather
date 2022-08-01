import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";

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