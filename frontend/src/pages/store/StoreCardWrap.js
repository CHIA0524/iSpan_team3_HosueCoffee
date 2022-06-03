import React from 'react'
import { useState, useEffect } from 'react'

import StoreCard from "./StoreCard"
import StoreCardDetail from './StoreCardDetail'


function StoreCardWrap(props){

  const { data, setCenter, setZoom, setMarkerInfoCSS, cardDetailCss, setCardDetailCss } = props
  const [ detailIndex, setDetailIndex ] = useState(2)
  const dataDetail = data[detailIndex]


  return(
    <div className="cardGroupWrap">

      <StoreCardDetail
        dataDetail={dataDetail}
        cardDetailCss={cardDetailCss}
        setCardDetailCss={setCardDetailCss}
      />

      <StoreCard
        data={data}
        setCenter={setCenter}
        setZoom={setZoom}
        setDetailIndex={setDetailIndex}
        setCardDetailCss={setCardDetailCss}
        setMarkerInfoCSS={setMarkerInfoCSS}
      />
      
    </div>
  )
}

export default StoreCardWrap