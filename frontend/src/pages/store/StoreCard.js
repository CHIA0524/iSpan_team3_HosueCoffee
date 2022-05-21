import React from 'react';
import { useState, useEffect, useCallback } from 'react';

// CSS
import './mapStyle.scss';

// icons
import { IoInformationCircleOutline } from "react-icons/io5";

// img
import test from './img/01.jpg'

/*---------------- import結束 ----------------*/



function StoreCard(props){

  const { data } = props;
  
  // 傳遞資料至父元素 cardDetail
  const sentDetailToCardDetail  = useCallback((data)=>()=>{
    let { phone, times, icon_group, serve_name } = data;
    let time = times.split(',');
    let icon = icon_group.split(',');
    let serve = serve_name.split(',');
    props.setDataFromStoreCard([phone, time, icon, serve]);
    props.setCardDetailCss(`cardDetailOpenCss`);
  },
  []
  )

  return(
    <div className='storeWrap'>
      {data.map((store,i)=>{
        return(
          <div className="cardWrap" key={i}>
            <div>
              <img src={test} alt="test"></img>
            </div>
            <div className="itemText">
              <p>{store.store_name}</p>
              <p>{store.city}</p>
              <p>{store.address}</p>
              {/* <p>{store.phone}</p> */}
            </div>
            <div onClick={sentDetailToCardDetail (data[(store.id-1)])}>
              <IoInformationCircleOutline size={25}/>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default StoreCard