import { useMemo } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import getWeather from '../../service/getWeather';
import { Header } from "../../components/Header";
import { useLanguage } from "../../context/languageContext"
import { translate } from '../Home/translate';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';

type Weather = {
    name: string;
    description: string;
    currentTemp: number;
    tempMax: number;
    tempMin: number;
    unit: string;
    iconImage: string
};

export default function Results() {
    let [location] = useSearchParams();

    const navigate = useNavigate();

    const { language } = useLanguage();

    const geos = useMemo(() => {
        return Object.fromEntries([...location]) as { lat: string, lng: string }
    }, [location]);

    const [weather, setWeather] = useState<Weather | null>();

    const fetchWeather = useCallback(async () => {
        if (!geos?.lat && !geos?.lng) {
            return
        }

        const storaged = localStorage.getItem("weather:thermalScale");

        const isCelcius = storaged ? JSON.parse(storaged) : false;

        const result = await getWeather(parseFloat(geos?.lat), parseFloat(geos?.lng), isCelcius, language);
        setWeather({
            currentTemp: result.main.temp,
            tempMax: result.main.temp_max,
            tempMin: result.main.temp_min,
            unit: isCelcius ? "°C" : "°F",
            name: result.name,
            description: result.weather.at(0)?.description || "",
            iconImage: `http://openweathermap.org/img/wn/${result.weather.at(0)?.icon}@2x.png`
        });
    }, [geos, language])

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather, location])

    return (
        <Styled.Container>
            <Header onChangeUnit={fetchWeather} onBack={() => navigate("/")} />
            
            <Styled.Content>
                <h2>{weather?.name}</h2>

                <span className="description">{weather?.description}</span>

                <div className="currentTemp">
                    <div className="currentTempValue">{weather?.currentTemp.toFixed(0)}{weather?.unit}</div>
                    <img src={weather?.iconImage} alt={`icon-${weather?.description}`} />
                </div>

                <div className="minMax">
                    <span><strong>MAX: </strong>{weather?.tempMax.toFixed(0)}{weather?.unit}</span>
                    <span><strong>  MIN: </strong>{weather?.tempMin.toFixed(0)}{weather?.unit}</span>
                </div>

                <span className="nextWeather">{translate.seeNextWeather(language)}</span>
            </Styled.Content>

            <Footer />
        </Styled.Container>
    );
}