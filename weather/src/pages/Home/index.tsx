import { GlobalStyle } from "../../styles/global";
import { useEffect, useState } from 'react';
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import ReactGoogleMapLoader from "react-google-maps-loader";
import useRunOnce from "../../hooks/useRunOnce";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles"
import { useLenguage } from "../../context/lenguageContext";

export default function Home() {
    let navigate = useNavigate();

    const [search, setSearch] = useState<string>("");

    const [value, setValue] = useState<string>("");

    const [location, setLocation] = useState<Object>({});

    const {lenguage} = useLenguage();

    function handleInputChange(e: any) {
        setSearch(e.target.value);
        setValue(e.target.value);
    }

    function handleSelectSuggest(geocodedPrediction: any) {
        setValue(geocodedPrediction.formatted_address);
        setLocation((geocodedPrediction.geometry));
        console.log(location);
        return navigate(`/results/?lat=${JSON.parse(JSON.stringify(geocodedPrediction.geometry.lat))}&lng=${JSON.parse(JSON.stringify(geocodedPrediction.geometry.lng))}`);
    }

    function handleGetGeolocation() {
        navigator.geolocation.getCurrentPosition((successCallback) => {
            return setLocation({ lat: successCallback.coords.latitude, lng: successCallback.coords.longitude });
        }, (errorCallback) => {
            switch (errorCallback.code) {
                case errorCallback.PERMISSION_DENIED:
                    alert(
                        lenguage === "Portugês" ? "O usuario rejeitou a solicitaçao de geolocalizaçao" : 
                        lenguage === "English" ? "User rejected geolocalization request" : 
                        lenguage ? "Solicitud de geolocalización rechazada por el usuario" : ""
                    )
                    break;
                case errorCallback.POSITION_UNAVAILABLE:
                    alert(
                        lenguage === "Portugês" ? "Localizaçao indisponivel" : 
                        lenguage === "English" ? "Position Unavailable" : 
                        lenguage ? "Ubicación no disponible" : ""
                    )
                    break;
                case errorCallback.TIMEOUT:
                    alert(
                        lenguage === "Portugês" ? "O tempo expirou" : 
                        lenguage === "English" ? "Time out" : 
                        lenguage ? "Tiempo expiró" : ""
                    )
                    window.location.reload();
                    break;
                default:
                    alert(
                        lenguage === "Portugês" ? "Erro desconhecido" : 
                        lenguage === "English" ? "Unknown error" : 
                        lenguage ? "error desconocido" : ""
                    )
                    break;
            }
        })
    }

    useRunOnce({
        fn: () => {
            if (navigator.geolocation) {
                handleGetGeolocation();
            } else {
                alert(
                    lenguage === "Portugês" ? "Seu navegador nao suporta geolocalizaçao" : 
                    lenguage === "English" ? "Your browser doesn't support geolocalization" : 
                    lenguage ? "Tu navegador no soporta geolocalización" : ""
                );
            }
        }
    });

    return (
        <>
            <Container>
                <ReactGoogleMapLoader params={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}`, libraries: "places, geocode" }} render={
                    googleMaps => googleMaps && (

                        <div className="divInputSearch">
                            <input
                                className="inputSearch"
                                type="text"
                                value={value}
                                placeholder={
                                    lenguage === "Portugês" ? "Digite o nome da cidade" : 
                                    lenguage === "English" ? "Enter the city name" : 
                                    lenguage ? "Introduzca el nombre de la ciudad" : ""
                                }
                                onChange={(e) => handleInputChange(e)}
                            />
                            <div className="divReactGooglePlacesSuggest">
                                <ReactGooglePlacesSuggest
                                    googleMaps={googleMaps}
                                    autocompletionRequest={{ input: search }}
                                    onSelectSuggest={handleSelectSuggest}
                                ></ReactGooglePlacesSuggest>
                            </div>
                        </div>
                    )
                } />
                <GlobalStyle />
            </ Container>
        </>
    );
}
