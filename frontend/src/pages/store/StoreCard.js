import React from 'react'
import { useState, useEffect, useCallback } from 'react'

// icons
import { IoInformationCircleOutline } from "react-icons/io5"

function StoreCard(props){

  const { data } = props
  
  // 傳遞資料至父元素 cardDetail
  const sentDetailToCardDetail  = useCallback(
    (index)=>()=>{
      props.setDetailIndex(index)
      props.setCardDetailCss(`cardDetailOpenCss`)
    }
  )

  // 傳遞被點擊之門市卡 index 至父元素
  const sentCardIndex  = useCallback(
    (index)=>()=>{
      let setLat = Number(data[index].lat)
      let setLng = Number(data[index].lng)
      props.setCenter({lat: setLat, lng: setLng })
      props.setZoom(18)
      props.setMarkerInfoCSS('-150px')
    }, [data, props]
  )
  
  return(
    <div className='storeWrap'>
      {
        data.length === 0
        ? 
        <div className='d-flex justify-content-center align-items-center' style={{height: '300px'}}>無搜尋結果</div> 
        :
        data.map((store,i) => {
          let num = i + 1;
          let imgPath = './img/' + num + '.jpg'
          return(
            <div className="storeCardWrap" key={i} onClick={sentCardIndex(i)}>
              <div>
                <img src={require(`${imgPath}`)} alt="test"></img>
              </div>
              <div className="itemText">
                <p>{store.store_name}</p>
                <p>{store.city}</p>
                <p>{store.address}</p>
                {/* <p>{store.phone}</p> */}
              </div>
              <div onClick={sentDetailToCardDetail(i)}>
                <IoInformationCircleOutline size={25}/>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default StoreCard