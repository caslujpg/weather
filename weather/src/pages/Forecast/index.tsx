import { LayoutPage } from '../../components/LayoutPage';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import { getForecast } from "../../service/getForecast";
import { useLocation } from "../../context/locationContext";
import { useLanguage } from "../../context/languageContext";
import { useCallback, useEffect, useState } from 'react';
import { ForecastType as GetForecastType } from "../../service/getForecast"
import { translate } from './translate';
import { format } from 'date-fns';

type ForecastType = Omit<GetForecastType, "list"> & {
    list: Array<{
        "dt": number;
        "main": {
            "temp_min": number;
            "temp_max": number;
        };
        "weather": Array<{
            "description": string;
            "icon": string;
        }>
        formattedDate: string;
    }>;
}

export function Forecast() {

    const [forecast, setForecast] = useState<ForecastType | null>(null);

    const navigate = useNavigate();

    const { location } = useLocation();

    const { language } = useLanguage();

    const handleGetForecast = useCallback(async () => {
        if (!location) return;

        const storaged = localStorage.getItem("weather:thermalScale");

        const isCelcius = storaged ? JSON.parse(storaged) : false;

        const forecast = await getForecast(location.lat, location.lng, isCelcius, language)

        setForecast({
            ...forecast,
            list: forecast.list.reduce<ForecastType["list"]>((acc, item) => {
                const now = format(new Date(), "E',' dd MMM");
                const formattedDate = format(new Date(item.dt * 1000), "E',' dd MMM");
                const exists = acc.find((accItem) => accItem.formattedDate === formattedDate)
                return !exists && formattedDate !== now ? [...acc, {
                    ...item,
                    formattedDate,
                }] : acc;
            }, [])
        })
    }, [language, location])

    useEffect(() => {
        handleGetForecast();
    }, [handleGetForecast])
    return (
        <LayoutPage onBack={() => navigate("/results")}>

            <Styled.Title>{forecast?.city.name}</Styled.Title>
            <Styled.SubTitle>{translate.seeNextWeather(language)}</Styled.SubTitle>

            {forecast?.list.map((forecastItem) => (
                <Styled.ForecastCard>
                    <Styled.ForecastDate>{forecastItem.formattedDate}</Styled.ForecastDate>
                    <Styled.ForecastIcon src={`http://openweathermap.org/img/wn/${forecastItem.weather.at(0)?.icon}@2x.png`} />
                    <Styled.ForecastMin>{forecastItem.main.temp_min.toFixed()}°</Styled.ForecastMin>
                    <Styled.ForecastGradient />
                    <Styled.ForecastMax>{forecastItem.main.temp_max.toFixed()}°</Styled.ForecastMax>
                    <Styled.ForecastDescription>{forecastItem.weather.at(0)?.description}</Styled.ForecastDescription>
                </Styled.ForecastCard>
            ))}
        </LayoutPage>
    )
}