import {useEffect, useRef, useState} from 'react'
import {useGoogleMap} from '@react-google-maps/api'
import {Drawer} from "antd";

const Panning = ({address = ''}) => {
    const google = window.google
    const map = useGoogleMap()
    const refButton = useRef();

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        console.log('clicked toggle button')
        toggleDrawer()
    }

    const toggleDrawer = () => {
        setOpen(prev => !prev)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (map) {
            console.log('Panning', {map})
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(refButton.current)

            return () => map.controls[google.maps.ControlPosition.TOP_RIGHT].pop()
        }
    }, [map])

    useEffect(() => {
        if (address) {
            setOpen(true)
        }
    }, [address])

    return (
        <div>
            <button ref={refButton} onClick={handleClick}>Toggle button</button>
            <Drawer open={open} onClose={handleClose}>
                <p>{address}</p>
            </Drawer>
        </div>
    )
}

export default Panning
