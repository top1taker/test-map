import {useCallback} from "react";
import {GoogleMap, useLoadScript, Autocomplete, Marker, HeatmapLayer} from "@react-google-maps/api";
import MapView from "./MapView";


export default function Home() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyAS5yx6AhFnfETkEg7F_FBBuQ9iS3oCwi0',
        libraries: ["places", "visualization", "geometry"]
    });


    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isLoaded ? <MapView /> : <div>Loading...</div>;
}
