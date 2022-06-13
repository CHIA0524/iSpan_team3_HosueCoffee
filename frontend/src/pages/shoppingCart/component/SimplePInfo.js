import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../pay3.css';



function SimplePInfo(){

  return(
    <>
           <div class="d-flex align-items-center">
                    <div class="col-2 sInfoBox">
                        <img class="packageImg" src={require('../img/包裝 9.png')}  
                        alt=""></img>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-3 pName">
                        <p>伊莎米 精選招牌特調(半磅)</p>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-2 num d-flex">
                        <p>數量：2</p>

                    </div>
                    <div class="col-2"></div>

                    <div class="col-1">
                        <p>$499</p>
                    </div>
                </div>
      {/* 手機版 */}
      <div class="mPayInfoFinal">
                <div class="box">
                    <div>
                        <img class="mImg"  src={require('../img/包裝 9.png')} alt=""></img>
                    </div>
                    <div class="mPayInfoText">
                        <p>伊莎米 精選招牌特調(半磅)</p>
                        <p>數量：2</p>
                        <div class="mPayMoney">
                            <p>單價：100</p>
                            <p class="R">小計：200</p>
                        </div>
                    </div>
                </div>
            </div>
      
  </>
  );
}

export default SimplePInfo