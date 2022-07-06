import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import DrinkOCard from './componend/DrinkOCard';
import MemberBack from './memberBack';
import './memberAside.css'
import './memberOrder.css'
function MemberDrinkO(props){
    const{auth}=props;
    const {dataCheck}=props;
    if(!auth){
      window.location.replace("http://localhost:3000/member")
    }if(!dataCheck){
      window.location.replace("http://localhost:3000/member/NewData");
    }
    return(
        <>
        <MemberBack/>
        <div className="col-wn">
            <h2 className="toph2">訂單詳細</h2>
            <br></br>
            <hr className="tophr"></hr>
            <br></br>
        </div>
        <div className="container">
        <div className="row">
            <MemberAside/>
            <main className="mMain col">
            <div className=" row justify-content-center">
                <div className="row">
                    <div className="col-1 col-3None"></div>
                    <div className="col">
                        <div className="row memNo col-3None">
                            <div className="col ">
                                <p>訂單編號:</p>
                            </div>
                            <div className="col">
                                <p>00002</p>
                                <br></br>
                            </div>
                            <div className="col-8"></div>
                        </div>
                        <div className="col-wn odfin">
                            <h4>已完成</h4>
                            <div>訂單編號 00001</div>
                            <div>成立時間 2022/03/26</div>
                        </div>
                            
                        <div className="payInfo">
                            <hr></hr>
                            <DrinkOCard/>
                            <DrinkOCard/>
                            </div>
                            
                           
                            
                            <div className="row perInfo  col-3None">
                                <div className="col">
                                    <p>取貨方式:</p>
                                    <p>付款編號:</p>
                                    <p>訂購人資訊:</p>
                            
                                
                                    </div>
                                <div className="col">
                                    <p>自取</p>
                                    <p>匯款</p>
                                    <br></br>
                                    <p>姓名:XXX</p>
                                    <p>電話:XXX</p>
                                    <p>地址:XXX</p>
                                </div>
                                <div className="col-2 col-wn"></div>
                                <div className="col-8 col-3None"></div>
                            </div>
                            <div className="row note col-3None">
                                <div className="col">留言備註:</div>
                                <div className="col"></div>
                                <div className="col-4 col-wn"></div>
                                <div className="col-8 col-3None"></div>

                            </div>
                            <div className="row note col-3None">
                                <div className="col"></div>
                                <div className="col">XXXXXXXX</div>
                                <div className="col-8 col-3None"></div>

                            </div>
                            </div>
                            <br></br>
                            <hr></hr> 
                            <br></br>
                            <div className="pTitle col-3None">金額統計</div>
                            <br></br>
                            
                            <div className="row mDetail col-3None">
                                <div className="col-8"></div>
                                <div className="col-2">
                                    <p>小計加總</p> 
                                    <p>運費</p> 
                                    <p>優惠券折扣</p> 
                                    <p>紅利點數折扣</p> 
                                    <p className="mTopF">結帳總額</p> 
                                </div>
                                <div className="col-2 pmR">
                                    <p>$998</p>
                                    <p>+$0</p>
                                    <p>-$100</p>
                                    <p>-$50</p>
                                    <p className="mTopF">$898</p>
                                </div>
                                <div className="col-1"></div>
                               
                            </div>
                            <div className="container col-wn">
                                <div className="row">
                                    <div className="col-4 payColor">
                                        <div>取貨方式:</div>
                                        <div>付款方式:</div>
                                        <div>備註內容:</div>
                                    </div>
                                    <div className="col">
                                        <div>自取</div>
                                        <div>匯款</div>
                                        <div>自取</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="payman">
                                    
                                    <div className="payColor">購買人姓名</div> 
                                    <br></br>
                                    <div className="row">
                                        <div className="col">
                                            <div>姓名:</div>
                                            <div>手機:</div>
                                            <div>時間</div>
                                        </div>
                                        <div className="col pmR">
                                            <div>張杰克</div>
                                            <div>0912-345-678</div>
                                            <div>2022/03/26 18:00</div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="wnMoney">
                                    <div className="payColor">
                                        金額統計
                                    </div>
                                    <br></br>
                                    <div className="wnMbox">
                                        <div className="row ">
                                            <div className="col wnML">
                                                <div className="mTop">商品小計</div>
                                                <div>運費</div>
                                                <div>優惠券</div>
                                                <div>紅利折扣</div>
                                            </div>
                                            <div className="col wnMR">
                                                <div className="mTop">$998</div>
                                                <div>$60</div>
                                                <div>-$100</div>
                                                <div>$99</div>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col wnML">
                                                <div className="mTopF">結帳總額</div>
                                            </div>
                                            <div className="col wnMR">
                                                <div className="mTopF">$859</div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                     
    
    
                            
    
                        </div>
                        <div className="col-1 col-3None"></div>
               
                
            

        </main>
        </div>
        </div>
        
        </>
    )
}
export default MemberDrinkO;