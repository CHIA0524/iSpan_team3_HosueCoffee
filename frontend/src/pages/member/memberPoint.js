import MemberAside from './memberAside';
import MemberBack from './memberBack';
import "./memberPoint.css"
function MemberPoint(){
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
            <div class="col point pointL">
              <br></br>
              <div class="pointHead">
                <h4>優惠券</h4>
                <h5>2張</h5>
              </div>
              <hr></hr>
              <div class="coupon">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <h5>壽星優惠</h5>
                      <div>使用期限</div>
                      <div>至2022/04/30</div>
                    </div>
                    <div class="col">
                      <h3>85折</h3>
                    </div>
                  </div>
                </div>
                <br></br>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <h5>國慶優惠</h5>
                      <div>使用期限</div>
                      <div>至2022/04/30</div>
                    </div>
                    <div class="col">
                      <h3>已使用</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-1"></div>

            <div class="col point pointR">
              <br></br>
              <div class="pointHead">
                <h4>紅利點數</h4>
                <h5 class="pointNow">10103</h5>
              </div>
              <hr></hr>
              <div class="coupon">
                <div class="container">
                  <div class="row">
                    <div class="col-1"></div>
                    <div class="col-5">
                      <h5>累積點數</h5>
                    </div>
                    <div class="col-5">
                      <div>10103點</div>
                    </div>
                    <div class="col-1"></div>
                  </div>
                </div>
                <br></br>
                <div class="container">
                  <div class="row">
                    <div class="col-1"></div>
                    <div class="col-5">
                      <h5>已使用</h5>
                    </div>
                    <div class="col-5">
                      <div>300點</div>
                      <div class="col-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="row pointfoot">
            <div class="col-1"></div>
            <div class="col pfL">紅利優惠活動</div>
            <div class="col pfR">BONUS</div>
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