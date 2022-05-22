import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './pay1.css';
import './component/steps1.css';
import pInfo from './component/pInfo';




function Pay1(){
   
  return(
      <>
       <div class="container">
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
           <pInfo />

            {/* <!-- 折扣結帳區 --> */}
            <div class="dInput">
                <div>
                    <div>
                        <div class="dText">
                            <p>優惠碼使用</p>
                        </div>
                        <div>
                            <input type="text"/>
                            <a href="">
                                <button class="btn btn-outline-secondary" type="button">✓</button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="dText">
                            <p>紅利點數使用</p>
                            <p class="pointText">剩餘點數 99點(可折扣99元)</p>
                        </div>
                        <div>
                            <input type="text"/>
                            <a href="">
                                <button class="btn btn-outline-secondary" type="button">✓</button>
                            </a>
                        </div>
                    </div>
                    <hr></hr>
                    <div class="countTotal">
                        <div>
                            <h4>商品小計</h4>
                            <h4>優惠券</h4>
                            <h4>紅利折扣</h4>
                        </div>
                        <div class="money">
                            <h4>$1499</h4>
                            <h4>$499</h4>
                            <h4>$499</h4>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div class="check">
                <a href=""><button type="button" class="addCartBtn" id="subtract">繼續購物
                    </button></a>
                <a href=""><button type="button" class="addCartBtn" id="subtract">下一步
                    </button></a>
            </div>
     </div>
     </>
  );
}

export default Pay1