import { GlobalStyle } from "../styles/global";
import { useEffect, useState } from 'react';
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import ReactGoogleMapLoader from "react-google-maps-loader";
import useRunOnce from "../hooks/useRunOnce";
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();

    const [search, setSearch] = useState<string>("");

    const [value, setValue] = useState<string>("");

    const [location, setLocation] = useState<Object>({});

    function handleInputChange(e: any) {
        setSearch(e.target.value);
        setValue(e.target.value);
    }

    function handleSelectSuggest(geocodedPrediction: any) {
        setValue(geocodedPrediction.formatted_address);
        setLocation((geocodedPrediction.geometry));
        console.log(location);
        // return navigate(`/results/?lat=${JSON.parse(JSON.stringify(geocodedPrediction.geometry.lat))}&lng=${JSON.parse(JSON.stringify(geocodedPrediction.geometry.lng))}`);
    }

    function handleGetGeolocation() {
        navigator.geolocation.getCurrentPosition((successCallback) => {
            return setLocation({lat: successCallback.coords.latitude, lng: successCallback.coords.longitude});
        }, (errorCallback) => {
            switch (errorCallback.code) {
                case errorCallback.PERMISSION_DENIED:
                    alert("O usuario rejeitou a solicitaçao de geolocalizaçao")
                    break;
                case errorCallback.POSITION_UNAVAILABLE:
                    alert("Localizaçao indisponivel")
                    break;
                case errorCallback.TIMEOUT:
                    alert("O tempo expirou")
                    window.location.reload();
                    break;
                default:
                    alert("Error desconhecido")
                    break;
            }
        })
    }

    useRunOnce({
        fn: () => {
            if (navigator.geolocation) {
                handleGetGeolocation();
            } else {
                alert("Seu navegador nao suporta geolocalizaçao");
            }
        }
    });

    return (
        <>
            <ReactGoogleMapLoader params={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}`, libraries: "places, geocode" }} render={
                googleMaps => googleMaps && (
                    <ReactGooglePlacesSuggest
                        googleMaps={googleMaps}
                        autocompletionRequest={{ input: search }}
                        onSelectSuggest={handleSelectSuggest}
                    >
                        <input
                            type="text"
                            value={value}
                            placeholder="Digite a sua cidade"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </ReactGooglePlacesSuggest>
                )
            } />
            <GlobalStyle />
        </>
    );
}
