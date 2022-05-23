import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './pay2.css';
import './component/steps2.css';
import Steps from './component/Steps';




function Pay2(){
   
  return(
      <>
       <div class="container main">
       <Steps />
              <div class="payInfoStart detail">
                  <div class="payInfoFill">
                      <div class="questInfo">
                          <div>付款方式</div>
                          <div class="radioS">
                              <div class="form-check checkPart">
                                  <input class="form-check-input" type="radio"       name="paymethod" id="inlineRadio1"
                                      value="option1"/>
                                  <label label class="form-check-label" for="inlineRadio1">匯款</label>
                              </div>
                              <div class="form-check  checkPart">
                                  <input class="form-check-input" type="radio"       name="paymethod" id="inlineRadio2"
                                      value="option2"/>
                                  <label class="form-check-label" for="inlineRadio2">信用卡</label>
                              </div>
                          </div>
                      </div>
                      <div class="questInfo">
                          <div>取貨方式</div>
                          <div class="radioS">
                              <div class="form-check  checkPart">
                                  <input class="form-check-input" type="radio"       name="pickupmethod" id="inlineRadio1"
                                      value="option1"/>
                                  <label class="form-check-label" for="inlineRadio1">自取</label>
                              </div>
                              <div class="form-check  checkPart">
                                  <input class="form-check-input" type="radio"       name="pickupmethod" id="inlineRadio2"
                                      value="option2"/>
                                  <label class="form-check-label" for="inlineRadio2">宅配 + 80</label>
                              </div>
                          </div>
      
                      </div>
                      <div class="buyerInfo">
                          <p>購買人資料</p>
                          <input type="text" placeholder="姓名"/>
                          <input type="text" placeholder="手機"/>
                          <input type="text" placeholder="信箱"/>
                          <input type="text" placeholder="地址"/>
                      </div>
                      <div class="form-check">
                          <input class="form-check-input" type="checkbox" value=""       id="flexCheckChecked" checked/>
                          <label class="form-check-label" for="flexCheckChecked">
                              收件人資料與顧客資料相同
                          </label>
                      </div>
                      <div class="receiverInfo">
      
                          <p>收件人資料</p>
                          <input type="text" placeholder="姓名"/>
                          <input type="text" placeholder="手機"/>
                          <input type="text" placeholder="信箱"/>
                          <input type="text" placeholder="地址"/>
                      </div>
                      <div class="noteInfo">
                          <p>備註</p>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                  </div>
      
                  <div class="payTotalCheck">
                      <div class="box">
                          <div class="totalInfo1">
                              <div>
                                  <p>商品小計</p>
                                  <p>運費</p>
                                  <p>優惠折扣</p>
                                  <p>紅利折扣</p>
                              </div>
                              <div class="money">
                                  <p>$1998</p>
                                  <p>自取</p>
                                  <p>$100</p>
                                  <p>$100</p>
                              </div>
                          </div>
                          <div class="line"></div>
                          <div class="totalInfo3">
                              <div>
                                  <h3>結帳金額</h3>
                              </div>
                              <div class="money">
                                  <h3>$898</h3>
                              </div>
                          </div>
                          <Link href="" to= "/shoppingCart/pay3">
                              <button type="button" class="btn btn-primary btn-lg btn-block">結帳</button>
                          </Link>
      
      
                      </div>
                  </div>
                  {/* <!-- 手機版小計 --> */}
                  <div class="mText">
                      <hr></hr>
                      <br></br>
                      <h3>金額總計</h3>
                  </div>
                  <div class="mPayTotalCheck">
      
                      <div class="box">
                          <div class="totalInfo1">
                              <div>
                                  <p>商品小計</p>
                                  <p>運費</p>
                                  <p>優惠折扣</p>
                                  <p>紅利折扣</p>
      
                              </div>
                              <div class="money">
                                  <p>$1998</p>
                                  <p>自取</p>
                                  <p>$100</p>
                                  <p>$100</p>
      
      
                              </div>
                          </div>
                          <div class="line"></div>
                          <div class="totalInfo1">
                              <div>
                                  <h3>結帳金額</h3>
                              </div>
                              <div>
                                  <h3>$898</h3>
                              </div>
                          </div>
                          <Link href="" to= "/shoppingCart/pay3">
                              <button type="button" class="btn btn-primary btn-lg btn-block">結帳</button>
                          </Link>
      
      
                      </div>
                  </div>
      
              </div>
    </div>
     </>
  );
}

export default Pay2