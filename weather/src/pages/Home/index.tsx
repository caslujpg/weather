import { useCallback, useState } from 'react';
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import ReactGoogleMapLoader from "react-google-maps-loader";
import useRunOnce from "../../hooks/useRunOnce";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";
import { translate } from "./translate"
import * as Styled from './styles'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

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
            return alert(translate.geoNotSupported(language));
        }
        navigator.geolocation.getCurrentPosition((successCallback) => {
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
                    alert(translate.geoRejected(language))
                    break;
                case errorCallback.POSITION_UNAVAILABLE:
                    alert(translate.geoUnavailable(language))
                    break;
                case errorCallback.TIMEOUT:
                    alert(translate.geoTimeOut(language))
                    window.location.reload();
                    break;
                default:
                    alert(translate.geoUnknownError(language))
                    break;
            }
        })
    }, [language, navigate])

    const openLocationPopUp = useCallback(() => {
        const isConfirmed = window.confirm(translate.useYourLocation(language));
        if (isConfirmed) {
            handleGetGeolocation();
        }
    }, [language, handleGetGeolocation])

    useRunOnce({ fn: openLocationPopUp })

    return (
        <Styled.Container>
            <Header />

            <Styled.Content>
                <h1>{translate.weatherToday(language)}</h1>
                <Styled.InputSuggestContainer>
                    <ReactGoogleMapLoader params={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}`, libraries: "places, geocode" }} render={
                        googleMaps => googleMaps && (
                            <ReactGooglePlacesSuggest
                                googleMaps={googleMaps}
                                autocompletionRequest={{ input: search }}
                                onSelectSuggest={handleSelectSuggest}
                            >
                                <input
                                    className="inputSearch"
                                    type="text"
                                    value={value}
                                    placeholder={translate.inputCityName(language)}
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </ReactGooglePlacesSuggest>
                        )
                    } />
                </Styled.InputSuggestContainer>
            </ Styled.Content>

            <Footer />

        </Styled.Container>
    );
}
