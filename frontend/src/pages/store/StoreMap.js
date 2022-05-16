import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

// component
import StoreCard from './StoreCard';

// CSS
import './mapStyle.scss';

// icons
import { FiSearch } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";


function StoreMap(){

  // 開啟詳細選單(透過StoreCard傳送className)
  const [cardDetailCss, setCardDetailCss] = useState();
  
  // 關閉詳細選單 function
  const closeCardDetail = ()=>{
    setCardDetailCss(``)
  }


  // 接收子組件資料，放到cardDetail
  const [dataFromStoreCard, setDataFromStoreCard] = useState('')


  return(
    <>
      <div className="mapAndCardWrap">
        <div>
          <div className="storeSearch">
            <input className="store-search-input" name="search-for" placeholder="搜尋門市名稱或地址"></input>
            <a href="">
              <FiSearch />
            </a>
          </div>
          <div className="cardGroupWrap">
            <div className={`cardDetail ${cardDetailCss}`}>
              <li className="closeCardDetail" onClick={closeCardDetail}>
                <IoArrowBack />
              </li>
              <div>
                <h5>營業時間</h5>
                <li>星期一：休息</li>
                <li>星期二：營業 8:00-22:00</li>
                <li>星期三：營業 8:00-22:00</li>
                <li>星期四：營業 8:00-22:00</li>
                <li>星期五：營業 8:00-22:00</li>
                <li>星期六：營業 8:00-22:00</li>
                <li>星期日：休息</li>
              </div>
              <br></br>
              <div>
                <h5>門市服務</h5>
                <div className="storeServeList">
                  <li><i className="fa-solid fa-user-large"></i></li>
                  <li><i className="fa-solid fa-user-large"></i></li>
                  <li><i className="fa-solid fa-user-large"></i></li>
                  <li><i className="fa-solid fa-user-large"></i></li>
                  <li><i className="fa-solid fa-user-large"></i></li>
                </div>
              </div>
            </div>
            <div className="storeWrap">
              <StoreCard setDataFromStoreCard={setDataFromStoreCard} setCardDetailCss={setCardDetailCss}/>
            </div>
          </div>
        </div>
        <div className="mapWrap">
        </div>
      </div>
    </>
  );
}

export default StoreMap