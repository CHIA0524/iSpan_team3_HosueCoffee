import React from 'react'
import { useState, useEffect, useCallback } from 'react'

// icons
import { IoInformationCircleOutline } from "react-icons/io5"

function StoreCard(props){

  const {
    data,
    setCenter,
    setZoom,
    setDetailIndex,
    setCardDetailCss,
    setMarkerInfoCSS,
    setFilterCSS,
    distance } = props

  // 傳遞資料至父元素 cardDetail
  const sentDetailToCardDetail  = useCallback(
    (index)=>()=>{
      setDetailIndex(index)
      setCardDetailCss(`cardDetailOpenCss`)
    }, [setCardDetailCss, setDetailIndex]
  )

  // 傳遞被點擊之門市卡 index 至父元素
  const sentCardIndex  = useCallback(
    (index)=>()=>{
      let setLat = Number(data[index].lat)
      let setLng = Number(data[index].lng)
      setCenter({lat: setLat, lng: setLng })
      setZoom(15)
      setMarkerInfoCSS('-150px')
      setFilterCSS(false)
    }, [data, setCenter, setFilterCSS, setMarkerInfoCSS, setZoom]
  )
  
  


  return(
    <div className='storeWrap'>
      {
        data.length === 0
        ? 
        <div className='d-flex justify-content-center align-items-center' style={{height: '300px'}}>無搜尋結果</div> 
        :
        data.map((store,i) => {
          return(
            <div className="storeCardWrap" style={{justifyContent: 'flex-start'}} key={i} onClick={sentCardIndex(i)}>
              <div className="" style={{display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'flex-start'}}>
                <h5>{store.store_name}</h5>
                <p>{store.store_add}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default StoreCard