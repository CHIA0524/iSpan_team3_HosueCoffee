import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import './steps.css';



function Steps1(){

  return(
    <>
            <div class="paytext">
            <p>結帳</p>
        </div>
        <div class="steps">
            <div class="step stepCompleted">
                <div class="stepText1">
                    確認商品</div>
            </div>
            <div class="stepLine "></div>
            <div class="step">
                <div class="stepText2">填寫資料</div>
            </div>
            <div class="stepLine"> </div>
            <div class="step ">
                <div class="stepText2">交易付款</div>
            </div>
        </div>
        {/* <!-- 手機版 --> */}
        <div class="mSteps">
            <div class=" mStep1">
                <div class="  mStepNum1">1</div>
                <div class="mStepText1">訂單確認</div>
            </div>

            <div class="mStepLine "></div>
            <div class="mStep2 ">
                <div class=" mStepNum2">2</div>
                <div class=" mStepText2" >資料填寫</div>
            </div>
            <div class="mStepLine "></div>

            <div class="mStep2  ">
                <div class="mStepNum2">3</div>
                <div class="mStepText2">交易付款</div>
            </div>
        </div>
     
      
  </>
  );
}

export default Steps1