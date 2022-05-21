import React from 'react';
import { useState, useEffect } from 'react';

import StoreCard from "./StoreCard"
// import StoreMapDetail from './StoreMapDetail';

// icons
import { IoArrowBack } from "react-icons/io5";

function StoreCardWrap(props){

  const { data } = props;
  const [dataFromStoreCard, setDataFromStoreCard] = useState([[],[],[],[]]);

  // 開啟詳細選單(透過StoreCard傳送className)
  const [cardDetailCss, setCardDetailCss] = useState();

  return(
    <div className="cardGroupWrap">
      <div className={`cardDetail ${cardDetailCss}`}>
        <li className="closeCardDetail" onClick={()=>{setCardDetailCss(``)}}>
          <IoArrowBack />
        </li>
        <div>
          <h5>連絡電話</h5>
          <li>{dataFromStoreCard[0]}</li>
        </div>
        <br></br>
        <div>
          <h5>營業時間</h5>
          {dataFromStoreCard[1].map((time, i)=>{
            return(
              <li key={i}>
              { time.includes('休息') ? time.substr(0, 6) : time}
              </li>
            )
          })}
        </div>
        <br></br>
        <div>
          <h5>門市服務</h5>
          <div className="storeServeList">
            {dataFromStoreCard[2].map((icon, i)=>{
              return(
                <li key={i} dangerouslySetInnerHTML={{__html:icon}}></li>
              )
            })}
          </div>
        </div>
      </div>
      <StoreCard
        data={data}
        setDataFromStoreCard={setDataFromStoreCard}
        setCardDetailCss={setCardDetailCss}
      />
      
    </div>
  )
}

export default StoreCardWrap