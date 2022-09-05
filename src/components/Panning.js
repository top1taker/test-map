import {useEffect, useRef} from 'react'
import {useGoogleMap} from '@react-google-maps/api'

const Panning = () => {
    const google = window.google
    const map = useGoogleMap()
    const refButton = useRef();

    const handleClick = () => {
        console.log('clicked toggle button')
    }

    useEffect(() => {
        if (map) {
            console.log('Panning', {map})
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(refButton.current)
            return () => map.controls[google.maps.ControlPosition.TOP_RIGHT].pop()
        }
    }, [map])

    return <button ref={refButton} onClick={handleClick}>Toggle button</button>
}

export default Panning
