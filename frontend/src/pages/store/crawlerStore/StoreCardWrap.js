import React from 'react'
import { useState, useEffect } from 'react'

import StoreCard from "./StoreCard"


function StoreCardWrap(props){

  const {
    data,
    setCenter,
    setZoom,
    setMarkerInfoCSS,
    cardDetailCss,
    setCardDetailCss,
    setFilterCSS,
    distance } = props
    
  const [ detailIndex, setDetailIndex ] = useState(2)
  const dataDetail = data[detailIndex]


  return(
    <div className="cardGroupWrap">

      <StoreCard
        data={data}
        setCenter={setCenter}
        setZoom={setZoom}
        setDetailIndex={setDetailIndex}
        setCardDetailCss={setCardDetailCss}
        setMarkerInfoCSS={setMarkerInfoCSS}
        setFilterCSS={setFilterCSS}
        distance={distance}
      />
      
    </div>
  )
}

export default StoreCardWrap