import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'


import { GoogleMap, useJsApiLoader, Marker, } from '@react-google-maps/api'


const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 125px)'
}

function StoreMap(props){

  const { data, center, zoom, setCenter, setZoom } = props

  // map 使用
  const mapRef = useRef()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GMAP_API_KEY
  })
  
  const [map, setMap] = useState(null)
  
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
  const onZoomChange = useCallback(function callback(map) {
    setZoom(10)
    console.log(zoom)
  }, [])

  useEffect(() => {
    if (map) {
      map.panTo(center)
    }
  }, [center])

  return(
    <div className="mapWrap">
      {isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onZoomChange={onZoomChange}
      >
        {data.map((latlng, i)=>{
          let thisLat = Number(latlng.lat)
          let thisLng = Number(latlng.lng)
          return(
            <Marker
              key={i}
              position={{lat: thisLat, lng: thisLng}}
              // onClick={handleMarkerClick(i)}
            />
          )
        })}
      </GoogleMap>
      ) : <></>}
    </div>
  )
}

export default StoreMap