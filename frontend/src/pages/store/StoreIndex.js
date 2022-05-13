import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react'
import './mapStyle.scss';

function StoreIndex(props){
  return(
    <>
      <div className="storeBanner"></div>
        <div className="storeIndex">
          <div>
            <p>~NEWS</p>
            <img src="./img/好室咖啡logo深色.svg" alt=""></img>
            <p>~NEWS</p>
            <span>最新消息</span>
          </div>
          <div>
            <img src="./img/storeIndex-img01.png" alt=""></img>
            <span>門市查詢</span>
          </div>
          <div>
            <img src="./img/storeIndex-img02.png" alt=""></img>
            <span>門市服務</span>
          </div>
        </div>
    </>
  );
}

export default StoreIndex