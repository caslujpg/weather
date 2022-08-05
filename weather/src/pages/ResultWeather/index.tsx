import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getWeather from '../../service/getWeather';
import { useLanguage } from "../../context/languageContext"
import { useLocation } from "../../context/locationContext" 
import { translate } from '../Home/translate';
import * as Styled from './styles';
import { LayoutPage } from '../../components/LayoutPage';

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
    const navigate = useNavigate();

    const { language } = useLanguage();

    const { location } = useLocation();

    const [weather, setWeather] = useState<Weather | null>();

    const fetchWeather = useCallback(async () => {
        if(!location) return;

        const storaged = localStorage.getItem("weather:thermalScale");

        const isCelcius = storaged ? JSON.parse(storaged) : false;

        const result = await getWeather(parseFloat(location.lat.toString()), parseFloat(location.lng.toString()), isCelcius, language);
        setWeather({
            currentTemp: result.main.temp,
            tempMax: result.main.temp_max,
            tempMin: result.main.temp_min,
            unit: isCelcius ? "°C" : "°F",
            name: result.name,
            description: result.weather.at(0)?.description || "",
            iconImage: `http://openweathermap.org/img/wn/${result.weather.at(0)?.icon}@2x.png`
        });
    }, [language, location])

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather, location])

    return (
        <LayoutPage onChangeSwitch={fetchWeather} onBack={() => navigate("/")}>
            <Styled.Title>{weather?.name}</Styled.Title>

            <Styled.Description>{weather?.description}</Styled.Description>

            <Styled.CurrentTemp>
                <div className="currentTempValue">{weather?.currentTemp.toFixed(0)}{weather?.unit}</div>
                <img src={weather?.iconImage} alt={`icon-${weather?.description}`} />
            </Styled.CurrentTemp>

            <Styled.MinMax>
                <span><strong>MAX: </strong>{weather?.tempMax.toFixed(0)}{weather?.unit}</span>
                <span><strong>  MIN: </strong>{weather?.tempMin.toFixed(0)}{weather?.unit}</span>
            </Styled.MinMax>

            <Styled.NextWeather to="/Forecast" >{translate.seeNextWeather(language)}</Styled.NextWeather>
        </LayoutPage>
    );
}