import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './pay3.css';
import Steps3 from './component/Steps3';
import SimplePInfo from './component/SimplePInfo';




function Pay3(){
   
  return(
      <>
       <div class="container main">
             <Steps3 />
             {/* <!-- 會員 --> */}
             <div class="memNo">
                 <div class="memNoText">
                     <p>訂單編號:</p>
                     <p>00001</p>
                 </div>
                 <div class="memNoText">
                     <p>訂單時間:</p>
                     <p>2022/04/01</p>
                 </div>
             </div>
             <div class="Content">
                 {/* <!-- 訂單資訊 --> */}
                 <div class="payInfo">
                     <hr></hr>
                     <SimplePInfo /> 
                 </div>
     
     
                 <hr></hr>
                 {/* <!-- 個人資訊 --> */}
                 <div class="perInfo">
                     <div class="perInfoTextL">
                         <p>取貨方式:</p>
                         <p>付款方式:</p>
                         <p>收件人資訊:</p>
                         <br></br>
                         <br></br>
                         <br></br>
                         <br></br>
                         <p>留言備註:</p>
                     </div>
                     <div class="perInfoTextR">
                         <p>自取</p>
                         <p>匯款</p>
                         <br></br>
                         <p>姓名:XXX</p>
                         <p>電話:XXX</p>
                         <p>地址:XXX</p>
                         <br></br>
                         <p>XXXXXXXX</p>
                     </div>
                 </div>
     
     
                 <hr></hr>
                 {/* <!-- 付款總額 --> */}
                 <div class="pTitle">金額統計</div>
                 <div class="payDetail">
                     <div class="payDetailTextL">
                         <p>小計加總</p>
                         <p>運費</p>
                         <p>優惠券折扣</p>
                         <p>紅利點數折扣</p>
                         <h5>結帳總額</h5>
                     </div>
                     <div class="payDetailTextR">
                         <p>$998</p>
                         <p>+$0</p>
                         <p>-$100</p>
                         <p>-$50</p>
                         <h5>$898</h5>
                     </div>
                 </div>
             </div>
             {/* <!-- 手機版 --> */}
             <div class="mContent">
                 <div class="mTitle">
                     <br></br>
                     <h5>商品名稱</h5>
                     <br></br>
                 </div>
                 <SimplePInfo />
         
                 <br></br>
                 <hr></hr>
                 {/* <!-- 個人資訊 --> */}
                 <div class="pickUp">
                     <div class="pickUpL">
                         <p>取貨方式:</p>
                         <p>付款方式:</p>
                         <p>備註內容:</p>
                         <p></p>
                     </div>
                     <div class="pickUpR">
                         <p>自取</p>
                         <p>匯款</p>
                         <p>精神崩潰的貓咪&想開解牠的女主人</p>
                     </div>
                 </div>
                 <hr></hr>
                 <h5>收件人資訊</h5>
                 <div class="pickInfo">
                     <div class="pickInfoL">
                         <p>姓名:</p>
                         <p>手機:</p>
                         <p>地址:</p>
                     </div>
                     <div class="pickInfoR">
                         <p>蕭敬騰</p>
                         <p>0918273907</p>
                         <p>這個門市</p>
                     </div>
                 </div>
                 <hr></hr>
                 <h5>結帳金額</h5>
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
                     </div>
                 </div>
             </div>
             </div>   
     </>
  );
}

export default Pay3