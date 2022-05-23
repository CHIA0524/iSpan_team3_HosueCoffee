import React from 'react';
import { useState, useEffect } from 'react';

// icons
import { IoArrowBack } from "react-icons/io5";

function StoreCardDetail(props){

  const { dataDetail, cardDetailCss, setCardDetailCss } = props;
  if (dataDetail){
    const { times, icon_group } = dataDetail;
    var storeTime = times.split(',');
    var storeIcon = icon_group.split(',');
  }

  return(
    <div className={`cardDetail ${cardDetailCss}`}>
      <li className="closeCardDetail" onClick={()=>{setCardDetailCss(``)}}>
        <IoArrowBack />
      </li>
      <div>
        <h5>連絡電話</h5>
        <li>{dataDetail ? dataDetail.phone : ''}</li>
      </div>
      <br></br>
      <div>
        <h5>營業時間</h5>
        {
          storeTime ? storeTime.map((time, i)=>{
            return(
              <li key={i}>
              { time.includes('休息') ? time.substr(0, 6) : time}
              </li>
            )
          }) :''
        }
      </div>
      <br></br>
      <div>
        <h5>門市服務</h5>
        <div className="storeServeList">
          {
            storeIcon ? storeIcon.map((icon, i)=>{
              return(
                <li key={i} dangerouslySetInnerHTML={{__html:icon}}></li>
              )
            }) : ''
          }
        </div>
      </div>
    </div>
  )
}

export default StoreCardDetail