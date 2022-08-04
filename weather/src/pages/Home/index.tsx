import { useCallback, useState } from 'react';
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import ReactGoogleMapLoader from "react-google-maps-loader";
import useRunOnce from "../../hooks/useRunOnce";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles"
import { useLanguage } from "../../context/languageContext";
import { Header } from "../../components/Header";

type Location = {
    lat: number;
    lng: number;
};

export default function Home() {
    const navigate = useNavigate();

    const [search, setSearch] = useState<string>("");

    const [value, setValue] = useState<string>("");

    const [location, setLocation] = useState<Location | null>(null);

    const { language } = useLanguage();

    function handleInputChange(e: any) {
        setSearch(e.target.value);
        setValue(e.target.value);
    }

    function handleSelectSuggest(geocodedPrediction: any) {
        setValue(geocodedPrediction.formatted_address);
        setLocation((geocodedPrediction.geometry));
        return navigate(
            `/results/?lat=${geocodedPrediction.geometry.location.lat()}&lng=${geocodedPrediction.geometry.location.lng()}`,
            {
                state: { location }
            }
        );
    }

    const handleGetGeolocation = useCallback(() => {
        if (!navigator.geolocation) {
            return alert(
                language === "Portugês" ? "Seu navegador nao suporta geolocalizaçao" :
                    language === "English" ? "Your browser doesn't support geolocalization" :
                        language ? "Tu navegador no soporta geolocalización" : ""
            );
        }
        navigator.geolocation.getCurrentPosition((successCallback) => {
            console.log("chegou na funçao geolocation");
            const newLocation = { lat: successCallback.coords.latitude, lng: successCallback.coords.longitude };
            setLocation(newLocation);
            navigate(
                `/results/?lat=${newLocation.lat}&lng=${newLocation.lng}`,
                {
                    state: { newLocation }
                }
            );
        }, (errorCallback) => {
            switch (errorCallback.code) {
                case errorCallback.PERMISSION_DENIED:
                    alert(
                        language === "Portugês" ? "O usuario rejeitou a solicitaçao de geolocalizaçao" :
                            language === "English" ? "User rejected geolocalization request" :
                                language ? "Solicitud de geolocalización rechazada por el usuario" : ""
                    )
                    break;
                case errorCallback.POSITION_UNAVAILABLE:
                    alert(
                        language === "Portugês" ? "Localizaçao indisponivel" :
                            language === "English" ? "Position Unavailable" :
                                language ? "Ubicación no disponible" : ""
                    )
                    break;
                case errorCallback.TIMEOUT:
                    alert(
                        language === "Portugês" ? "O tempo expirou" :
                            language === "English" ? "Time out" :
                                language ? "Tiempo expiró" : ""
                    )
                    window.location.reload();
                    break;
                default:
                    alert(
                        language === "Portugês" ? "Erro desconhecido" :
                            language === "English" ? "Unknown error" :
                                language ? "error desconocido" : ""
                    )
                    break;
            }
        })
    }, [language, navigate])

    const openLocationPopUp = useCallback(() => {
        const isConfirmed = window.confirm(
            language === "Portugês" ? "Deseja usar sua localizaçao?" :
                language === "English" ? "Like use your localization?" :
                    language ? "Quieres usar su ubicacion" : ""
        );
        if (isConfirmed) {
            handleGetGeolocation();
        }
    }, [language, handleGetGeolocation])

    useRunOnce({fn: openLocationPopUp})

    return (
        <>
            <Header />
            <Container>
                <ReactGoogleMapLoader params={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}`, libraries: "places, geocode" }} render={
                    googleMaps => googleMaps && (
                        <div className="divReactGooglePlacesSuggest">
                            <ReactGooglePlacesSuggest
                                googleMaps={googleMaps}
                                autocompletionRequest={{ input: search }}
                                onSelectSuggest={handleSelectSuggest}
                            >
                                <input
                                    className="inputSearch"
                                    type="text"
                                    value={value}
                                    placeholder={
                                        language === "Portugês" ? "Digite o nome da cidade" :
                                            language === "English" ? "Enter the city name" :
                                                language ? "Introduzca el nombre de la ciudad" : ""
                                    }
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </ReactGooglePlacesSuggest>
                        </div>
                    )
                } />
            </ Container>
        </>
    );
}
