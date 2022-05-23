import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './pay1.css';
// import './component/steps1.css';
import PInfo from './component/PInfo';
import Steps1 from './component/Steps1';




function Pay1(){
   
  return(
      <>
       <div class="container main">
           <Steps1 />
           <PInfo />
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
                                <button class="btn1 btn-outline-secondary" type="button">✓</button>
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
                                <button class="btn1 btn-outline-secondary" type="button">✓</button>
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
                <Link href="" to= "/shoppingCart/Pay2"><button type="button" class="addCartBtn" id="subtract">下一步
                    </button></Link>
            </div>
     </div>
     </>
  );
}

export default Pay1