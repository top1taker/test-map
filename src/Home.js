import {useMemo, useState} from "react";
import {GoogleMap, useLoadScript, Marker, Autocomplete} from "@react-google-maps/api";

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAS5yx6AhFnfETkEg7F_FBBuQ9iS3oCwi0',
        libraries: ["places"]
    });
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    const [autocomplete, setAutocomplete] = useState(null)

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
            <Autocomplete
                onLoad={setAutocomplete}
                onPlaceChanged={() => {console.log(autocomplete?.getPlace())}}
            >
                <input
                    type="text"
                    placeholder="Customized your placeholder"
                    style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `240px`,
                        height: `32px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `14px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                        position: "absolute",
                        left: "50%",
                        marginLeft: "-120px"
                    }}
                />
            </Autocomplete>
            <Marker position={center} />
        </GoogleMap>
    );
}
