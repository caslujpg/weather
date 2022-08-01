import { Container } from './styles'
import { LoadScript, StandaloneSearchBox,} from "@react-google-maps/api"
import { ReactAppGoogleApiKey } from "../../App"
import { useState } from 'react'

export function Dashboard() {
            const [searchBox, setSearchBox] =
              useState<google.maps.places.SearchBox>();
          
            const onLoad = (ref: google.maps.places.SearchBox) => {
              setSearchBox(ref);
            };
          
            const onPlacesChanged = () => {
              const places = searchBox!.getPlaces();
              console.log(places);
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