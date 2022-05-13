import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react'

function Home(){
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
          
        </div>
    </>
  );
}

export default Home