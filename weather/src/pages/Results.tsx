import { useMemo } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import getWeather from '../service/getWeather';
import { Header } from "../components/Header";

type Weather = {
    name: string;
    description: string;
    currentTemp: number;
    tempMax: number;
    tempMin: number;
    unit: string;
};

export default function Results() {
    const [location] = useSearchParams();

    const navigate = useNavigate();

    const geos = useMemo(()=>{
        return Object.fromEntries([...location]) as {lat: string, lng: string}
    }, [location]);

    const [weather, setWeather] = useState<Weather | null>();

    const fetchWeather = useCallback (async ()=> {
        if(!geos?.lat && !geos?.lng) {
            return
        }

        const storaged = localStorage.getItem("weather:thermalScale");

        const isCelcius = storaged ? JSON.parse(storaged) : false;

        const result = await getWeather(parseFloat(geos?.lat), parseFloat(geos?.lng), isCelcius);
        setWeather({
            currentTemp: result.main.temp,
            tempMax: result.main.temp_max,
            tempMin: result.main.temp_min,
            unit: isCelcius ? "°C" : "°F",
            name: result.name,
            description: result.weather.at(0)?.description || "",
        });
    }, [geos])

    useEffect(()=> {
        fetchWeather();
    }, [fetchWeather, location])

    return (
        <>
            <Header onChangeUnit={fetchWeather}/>
            <button onClick={() => navigate("/")}>voltar</button>
            <h3>{weather?.name}({weather?.description})</h3>
            <hr />
            <ul>
                <li>Temperatura atual: {weather?.currentTemp}{weather?.unit}</li>
                <li>MAX: {weather?.tempMax}{weather?.unit}</li>
                <li>MIN: {weather?.tempMin}{weather?.unit}</li>
            </ul>
        </>
    );
}