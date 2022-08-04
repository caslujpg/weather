import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getWeather from '../service/getWeather';
import { IWeather } from '../types/App';
// import { Location } from '../types/Location'

export default function Results() {
    const [location] = useSearchParams();

    const geos = Object.fromEntries([...location]) as {lat: string, lng: string};

    // const {state} = useLocation() as Location<IWeather> 

    const [weather, setWeather] = useState<IWeather | null>();

    const fetchWeather = useCallback (async ()=> {
        if(!geos?.lat && !geos?.lng) {
            return
        }
        const result = await getWeather(parseFloat(geos?.lat), parseFloat(geos?.lng));
        setWeather(result);
    }, [geos])

    useEffect(()=> {
        console.log("useEffect", JSON.stringify(location));
        fetchWeather();
    }, [fetchWeather, location])

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