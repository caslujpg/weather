import { Container } from './styles'
import { LoadScript, StandaloneSearchBox,} from "@react-google-maps/api"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const ReactAppGoogleApiKey = "AIzaSyAgcFSLSwZlYpyldU6IHEO8QRMGdo3kJqE";

export function Dashboard() {
    const navigate = useNavigate();

    const [searchBox, setSearchBox] =
        useState<google.maps.places.SearchBox>();
    
    const onLoad = (ref: google.maps.places.SearchBox) => {
        setSearchBox(ref);
    };
    
    const handleRedirect = () => {
        navigate("/result")
    }

    const onPlacesChanged = () => {
        const places = searchBox!.getPlaces();
        if (places) handleRedirect();
    };
 
    return (
        <Container>
            <div className="map">
                <LoadScript
                    googleMapsApiKey={ReactAppGoogleApiKey}
                    libraries={["places"]}
                >
                    <div className="address">
                        <StandaloneSearchBox
                            onLoad={onLoad}
                            onPlacesChanged={onPlacesChanged}
                        >
                            <input
                                className="addressField"
                                placeholder="Digite o nome da cidade"
                            />
                        </StandaloneSearchBox>
                    </div>
                </LoadScript>
            </div>
        </Container>
    );
}