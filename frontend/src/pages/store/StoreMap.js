import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'


import { GoogleMap, useJsApiLoader, Marker, } from '@react-google-maps/api'
import { Link } from 'react-router-dom'


const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 125px)'
}

function StoreMap(props){

  const { data, center, zoom, setCenter, setZoom } = props
  console.log(data);
  const [ markerIndex, setMarkerIndex ] = useState(1)

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
  const onZoomChanged = (e)=>{
    setTimeout(() => {
      setZoom(map.getZoom())
    }, 100)
  }

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
        onZoomChanged={onZoomChanged}
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
      <div className='markerInfo' style={{background: 'white', bottom: '-150px'}}>
        {data[markerIndex]
        ?
        <>
          <p>{data[markerIndex].store_name}</p>
          <p>{data[markerIndex].phone}</p>
        </>
        : ''}
        <Link to="/stor" className='coffeeDarkBtn'>享喝咖啡</Link>
      </div>
    </div>
  )
}

export default StoreMap