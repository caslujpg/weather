import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getWeather from '../service/getWeather';
import { IWeather } from '../types/App';

export default function Results() {
    let {location} = useParams();

    const [weather, setWeather] = useState<IWeather | null>();

    const fetchWeather = async ()=> {
        //setWeather(await getWeather(location?.lat, location?.lng))
        
    }

    useEffect(()=> {
        console.log(JSON.stringify(location));
        fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h3>{weather?.name}({weather?.weather[0].description})</h3>
            <hr />
            <ul>
                <li>Temperatura atual: {weather?.main.temp}°</li>
                <li>MAX: {weather?.main.temp_max}°</li>
                <li>MIN: {weather?.main.temp_min}°</li>
            </ul>
        </>
    );
}