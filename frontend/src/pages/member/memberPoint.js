import MemberAside from './memberAside';
import MemberBack from './memberBack';
import MCouponY from './componend/MCouponY';
import MCouponN from './componend/MCouponN';
import { useState } from 'react';
import "./memberPoint.css"
function MemberPoint(){
  const thisPoint=localStorage.getItem("point")

  const [MCYES,setMCYES]=useState(0)
  const [MCNO,setMCNO]=useState(0)
    return(
        <>
              <div class="container">
    <div class="row">
    <MemberAside/>

      <main class="mMain row col">
       

        <div class="col-1 col-3None">

        </div>
        <div class="col ">
          <div class="row">
            <div class="col point pointL ">
              <br></br>
              <div class="pointHead">
                <h4>可使用優惠券</h4>
                <h5 className='NowCoupon'>{MCYES}張</h5>
              </div>
              <hr></hr>
              <div class="coupon">
              <MCouponY setMCYES={setMCYES}/>
              </div>
            </div>

            <div class="col-1"></div>

            <div class="col point pointR col-3None">
              <br></br>
              <div class="pointHead">
                <h4>已過期優惠券</h4>
                <h5 class="pointNow">{MCNO}張</h5>
              </div>
              <hr></hr>
              <div class="coupon">
               <MCouponN setMCNO={setMCNO}/>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="row pointfoot">
            <div class="col-1"></div>
            <div class="col pfL">紅利點數</div>
            <div class="col pfR">{thisPoint}點</div>
            <div class="col-1"> </div>
          </div>
          
        </div>
        <div class="col-2 col-3None"></div>
        

      </main>
    </div>
  </div>
        </>
    )
}
export default MemberPoint