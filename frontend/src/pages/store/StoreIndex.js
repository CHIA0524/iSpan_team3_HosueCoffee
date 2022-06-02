import { BrowserRouter as Link } from 'react-router-dom'
import React from 'react'

import logo from '../../component/img/logo.svg'
import img01 from './img/storeIndex-img01.png'
import img02 from './img/storeIndex-img02.png'

function StoreIndex(props){


  return(
    <>
      <div className="storeBanner"></div>
        <div className="storeIndex">
          <div>
            <p>~NEWS</p>
            <img src={logo} alt=""></img>
            <p>~NEWS</p>
            <a>最新消息</a>
          </div>
          <div>
            <img src={img01} alt=""></img>
            <Link to={"/store/map"}>門市查詢</Link>
          </div>
          <div>
            <img src={img02} alt=""></img>
            <Link to={"/store/maptest"}>門市服務 測試資料</Link>
          </div>
        </div>
    </>
  )
}

export default StoreIndex