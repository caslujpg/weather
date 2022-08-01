import { Dashboard } from "../components/Dashboard";
import { Footer } from "../components/Footer";
import { GlobalStyle } from "../styles/global";
// import { Link } from "react-router-dom";


export default function Home() {
    return(
        <>
            <Dashboard />
            {/* <Link to="/result"></Link> */}
            <GlobalStyle />
        </>
    );
}
