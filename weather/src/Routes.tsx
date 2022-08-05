import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/ResultWeather";
import { Forecast } from "./pages/Forecast";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/forecast" element={<Forecast />} />
        </Routes>
    )
}