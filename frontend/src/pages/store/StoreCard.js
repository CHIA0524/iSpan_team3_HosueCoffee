import React from 'react';
import { useState, useEffect, useCallback } from 'react';

// icons
import { IoInformationCircleOutline } from "react-icons/io5";

// img
import test from './img/01.jpg'



function StoreCard(props){

  const { data } = props;
  
  // 傳遞資料至父元素 cardDetail
  const sentDetailToCardDetail  = useCallback(
    (index)=>()=>{
      props.setDetailIndex(index);
      props.setCardDetailCss(`cardDetailOpenCss`);
      console.log(index);
    }
  )

  // 傳遞被點擊之門市卡 index 至父元素
  const sentCardIndex  = useCallback(
    (index)=>()=>{
      let setLat = Number(data[index].lat);
      let setLng = Number(data[index].lng);
      props.setCenter({lat: setLat, lng: setLng })
    }, []
  )

  return(
    <div className='storeWrap'>
      {data.map((store,i)=>{
        return(
          <div className="cardWrap" key={i} onClick={sentCardIndex(store.id-1)}>
            <div>
              <img src={test} alt="test"></img>
            </div>
            <div className="itemText">
              <p>{store.store_name}</p>
              <p>{store.city}</p>
              <p>{store.address}</p>
              {/* <p>{store.phone}</p> */}
            </div>
            <div onClick={sentDetailToCardDetail(store.id-1)}>
              <IoInformationCircleOutline size={25}/>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default StoreCard