import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { VscChromeClose } from "react-icons/vsc";


function Steps(){

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
                <div class="stepText3">購物完成</div>
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
                <div class="mStepNum2">2</div>
                <div class="mStepText2">資料填寫</div>
            </div>
            <div class="mStepLine "></div>

            <div class="mStep3  ">
                <div class="mStepNum3">3</div>
                <div class="mStepText3">購物完成</div>
            </div>
        </div>
      {/* 手機版 */}
            <div class="mPayInfoContent">
                <div class="box">
                    <Link href=""><VscChromeClose size={20} /></Link>
                    <div class="boxContent">
                        <div class="imgPart">
                            <img class="packageImg" src={require('../img/包裝 9.png')}alt=""></img>
                            <div>
                                <p>伊莎米 </p>
                                <p>精選招牌特調(半磅)</p>
                            </div>
                        </div>
                        <div class="number">
                            <div class="mAddNum">
                                <Link href=""><button type="button" class="buttonNum" id="plus">+</button></Link>
                                <input class="num" type="text" id="text" value="" />
                                <Link href=""><button type="button" class="buttonNum" id="subtract">-</button></Link>
                            </div>
                            <h3>$499</h3>
                        </div>
                    </div>
                </div>
            </div>
      
  </>
  );
}

export default Steps