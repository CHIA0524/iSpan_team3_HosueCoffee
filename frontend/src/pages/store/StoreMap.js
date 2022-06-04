import React from 'react'
import { useState, useEffect, useCallback } from 'react'


import { GoogleMap, useJsApiLoader, Marker, MarkerClusterer } from '@react-google-maps/api'
import { Link } from 'react-router-dom'

import catmarker from './img/marker.svg';
import StoreMapClusterer from './StoreMapClusterer';

function StoreMap(props){

  /*---------------- props useState ----------------*/
  // props
  const { data, center, setCenter, zoom, setZoom, markerInfoCSS, setMarkerInfoCSS, asideCSS, setAsideCSS, setIconRotate } = props
  const [map, setMap] = useState(null)
  // useState
  const [ markerIndex, setMarkerIndex ] = useState(1)
  const thisData = data
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GMAP_API_KEY
  })

  /*---------------- useEffect ----------------*/
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

  // panTo 效果
  useEffect(() => {
    if (map) {
      map.panTo(center)
    }
  }, [center, map])

  // 地圖框架大小 *必須
  const [ containerStyle, setContainerStyle] = useState({
    width: '100%',
    height: 'calc(100vh - 125px)'
  })
  
  /*---------------- 地圖事件 ----------------*/
  // 載入
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [center])
  
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  // Zoom 改變
  const onZoomChanged = (e)=>{
    setTimeout(() => {
      setZoom(map.getZoom())
      setMarkerInfoCSS('-150px')
    }, 50)
  }
  
  // 圖標點擊事件
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

  // 地圖點擊事件
  const mapOnClick = ()=>{
    setMarkerInfoCSS('-150px')
    if(asideCSS === '0px'){
      setAsideCSS('-375px')
      setIconRotate('rotate(180deg)')
    }
  }

  // 地圖拖移事件
  const onDragEnd = ()=>{
    setMarkerInfoCSS('-150px')
  }
  
  
  
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
          {/* <StoreMapClusterer data={data}/> */}
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
        <Link to="/shop" className='coffeeDarkBtn'>享喝咖啡</Link>
      </div>
    </div>
  )
}

export default StoreMap