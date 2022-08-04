import axios from "axios";

const getWeather = async (lat: number, lng: number) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
            lat: lat,
            lon: lng,
            appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
            lang: 'pt',
            units: 'metric'
        }
    });
    console.log("res", res.data);
    return(res.data);
}

export default getWeather;