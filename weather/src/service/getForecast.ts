import axios from "axios";

export interface ForecastType {
    "city": {
        "name": string;
    },
    "list": Array<{
        "dt": number;
        "main": {
            "temp_min": number;
            "temp_max": number;
        };
        "weather": Array<{
            "description": string;
            "icon": string;
        }>
    }>
}


export const getForecast = async (lat: number, lng: number, isCelcius: boolean, lang: string = "pt_br") => {
    let res = await axios.get<ForecastType>("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
            lat,
            lon: lng,
            appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
            lang,
            units: isCelcius ? "metric" : "imperial"
        }
    });
    return (res.data);
}