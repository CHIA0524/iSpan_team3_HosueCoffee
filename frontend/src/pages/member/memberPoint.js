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
              <div className="container">
    <div className="row">
    <MemberAside/>

      <main className="mMain row col">
       

        <div className="col-1 col-3None">

        </div>
        <div className="col ">
          <div className="row">
            <div className="col point pointL ">
              <br></br>
              <div className="pointHead">
                <h4>可使用優惠券</h4>
                <h5 className='NowCoupon'>{MCYES}張</h5>
              </div>
              <br></br>
              <hr></hr>
              <div className="coupon">
              <MCouponY setMCYES={setMCYES}/>
              </div>
              <div className='col-wn'>

              <br></br>
              <div className="pointHead">
                <h4>會員點數</h4>
                <h5 className="pointNow">每消費100元贈送1點，每1點可折扣1元</h5>
                
              </div>
              <></>
              <br></br>
              <hr></hr>
              <br></br>
              <div className="coupon row">
              <h3 className="col mypoint_left">剩餘點數</h3>
              <h3 className="col">{thisPoint}點</h3>
              </div>
              </div>
            </div>

            <div className="col-1 col-3None"></div>

            <div className="col point pointR col-3None">
              <br></br>
              <div className="pointHead">
                <h4>會員點數</h4>
                <h5 className="pointNow">每消費100元贈送1點，每1點可折扣1元</h5>
                
              </div>
              <></>
              <br></br>
              <hr></hr>
              <br></br>
              <div className="coupon row">
              <h3 className="col mypoint_left">剩餘點數</h3>
              <h3 className="col">{thisPoint}點</h3>
              </div>
                    <br></br>
               
            </div>
          </div>
      
          <br></br>
          <br></br>
          {/* <div className="row pointfoot">
            <div className="col-1"></div>
            <div className="col pfL">紅利點數</div>
            <div className="col pfR">{thisPoint}點</div>
            <div className="col-1"> </div>
          </div> */}
          
        </div>
        <div className="col-2 col-3None"></div>
        
        

      </main>
    </div>
  </div>
        </>
    )
}
export default MemberPoint