import React from 'react'
import { useState, useEffect, useCallback } from 'react'


import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { Link } from 'react-router-dom'

import catmarker from './img/marker.svg';
import StoreMapClusterer from './StoreMapClusterer';

function StoreMap(props){
  
  // 監測視窗寬度
  useEffect(()=>{ 
    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        setContainerStyle({
          width: '100%',
          height: 'calc(100vh - 90px)'
        })
      }else{
        setContainerStyle({
          width: '100%',
          height: 'calc(100vh - 125px)'
        })
      }
      })
  },[]);

  const [ containerStyle, setContainerStyle] = useState({
    width: '100%',
    height: 'calc(100vh - 125px)'
  })

  const { data, center, setCenter, zoom, setZoom, markerInfoCSS, setMarkerInfoCSS, asideCSS, setAsideCSS, setIconRotate } = props
  const [ markerIndex, setMarkerIndex ] = useState(1)

  const thisData = data

  // map 使用

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GMAP_API_KEY
  })
  
  const [map, setMap] = useState(null)
  
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [center])
  
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onZoomChanged = (e)=>{
    setTimeout(() => {
      setZoom(map.getZoom())
      setMarkerInfoCSS('-150px')
    }, 50)
  }
  
  const markerOnClick  = useCallback(
    (index)=>()=>{
      let thisLat = Number(thisData[index].lat)
      let thisLng = Number(thisData[index].lng)
      setCenter({lat: thisLat, lng: thisLng})
      setMarkerIndex(index)
      setZoom(18)
      if (markerInfoCSS === '-150px'){
        setTimeout(() => {
          setMarkerInfoCSS('100px')
        }, 110)
      }else if (markerInfoCSS === '100px'){
        setMarkerInfoCSS('-150px')
      }
    }, [thisData, setCenter, setZoom, markerInfoCSS, setMarkerInfoCSS]
  )

  const mapOnClick = ()=>{
    setMarkerInfoCSS('-150px')
    if(asideCSS === '0px'){
      setAsideCSS('-375px')
      setIconRotate('rotate(180deg)')
    }
  }

  const onDragEnd = ()=>{
    setMarkerInfoCSS('-150px')
  }

  useEffect(() => {
    if (map) {
      map.panTo(center)
    }
  }, [center, map])
    
  
  return(
    <div className="mapWrap">
      {isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        defaultZoom={14}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onZoomChanged={onZoomChanged}
        onClick={mapOnClick}
        onDragEnd={onDragEnd}
      >
        {data.map((latlng, i)=>{
          let thisLat = Number(latlng.lat)
          let thisLng = Number(latlng.lng)
          return(
            <Marker
              key={i}
              position={{lat: thisLat, lng: thisLng}}
              icon={{
                url: catmarker
              }}
              onClick={markerOnClick(i)}
            />
          )
        })}
          <StoreMapClusterer data={data}/>
      </GoogleMap>
      ) : <></>}
      <div className='markerInfo' style={{bottom: markerInfoCSS}}>
        {data[markerIndex]
        ?
        <>
          <p>{data[markerIndex].store_name}</p>
          <p>{data[markerIndex].phone}</p>
        </>
        : ''}
        <Link to="/store" className='coffeeDarkBtn'>享喝咖啡</Link>
      </div>
    </div>
  )
}

export default StoreMap