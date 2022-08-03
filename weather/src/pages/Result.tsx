import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { IWeather } from '../types/App'

export default function Result() {

    const [location, setLocation] = useState({});
    const [weather, setWeather] = useState<IWeather | null>(null);

    let getWeather = async (lat: number, long: number) => {
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }
        });
    setWeather(res.data);
    }

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition((position)=> {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])

    if(!location) {
        return (
            <Fragment>
                <h3>Clima nas suas Coordenadas (xangai)</h3>
                <hr />
                <ul>
                    <li>20°</li>
                    <li>MAX: 21°</li>
                    <li>MIN: 19°</li>
                </ul>
            </Fragment>
        );
    } else if(!weather) {
        return(
            <Fragment>
                Carregando o clima...
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <h3>{weather.name}({weather.weather[0].description})</h3>
                <hr/>
                <ul>
                    <li>Temperatura atual: {weather.main.temp}°</li>
                    <li>MAX: {weather.main.temp_max}°</li>
                    <li>MIN: {weather.main.temp_min}°</li>
                </ul>
      </Fragment>
    );
  }
}
