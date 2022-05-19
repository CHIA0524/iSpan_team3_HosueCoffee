import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './mapStyle.scss';


import logo from '../../logo.svg';
import img01 from './img/storeIndex-img01.png';
import img02 from './img/storeIndex-img02.png';


function StoreIndex(props){
  return(
    <>
      <div className="storeBanner"></div>
        <div className="storeIndex">
          <div>
            <p>~NEWS</p>
            <img src={logo} alt=""></img>
            <p>~NEWS</p>
            <span>最新消息</span>
          </div>
          <div>
            <img src={img01} alt=""></img>
            <span>門市查詢</span>
          </div>
          <div>
            <img src={img02} alt=""></img>
            <span>門市服務</span>
          </div>
        </div>
    </>
  );
}

export default StoreIndex