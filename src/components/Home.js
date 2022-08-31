import {useEffect, useMemo, useState} from "react";
import {GoogleMap, useLoadScript, Autocomplete, Marker, HeatmapLayer} from "@react-google-maps/api";
import MapView from "./MapView";


export default function Home() {
    const google = window.google;

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyAS5yx6AhFnfETkEg7F_FBBuQ9iS3oCwi0',
        libraries: ["places", "visualization", "geometry"]
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
       <MapView />
    );
}
