import axios from "axios";

export interface IWeather {
    "coord": {
        "lon": number, 
        "lat": number
    },
    "weather": Array<{
        "id": number,
        "main": string,
        "description": string,
        "icon": string
    }>,
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number,
        "sea_level": number,
        "grnd_level": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number,
        "gust": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number
}

const getWeather = async (lat: number, lng: number, isCelcius: boolean, lang: string = "pt_br") => {
    let res = await axios.get<IWeather>("http://api.openweathermap.org/data/2.5/weather", {
        params: {
            lat: lat,
            lon: lng,
            appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
            lang,
            units: isCelcius ? "metric" : "imperial",
        }
    });
    console.log("res", res.data);
    return(res.data);
}

export default getWeather;