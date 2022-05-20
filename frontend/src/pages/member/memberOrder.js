import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import OrderCard from './orderCard';
import './memberAside.css'
import './memberOrder.css'
function MemberOrder(){
    return(
        <>
        <div class="mMember col-wn">
        <p>&lt;&ensp;會員中心</p>
        </div>
        <div class="col-wn">
            <h2 class="toph2">訂單詳細</h2>
            <br></br>
            <hr class="tophr"></hr>
            <br></br>
        </div>
        <div class="container">
        <div class="row">
            <MemberAside/>
            <main class="pMain col">
            <div class=" row justify-content-center">
                <div class="row">
                    <div class="col-1 col-3None"></div>
                    <div class="col">
                        <div class="row memNo col-3None">
                            <div class="col ">
                                <p>訂單編號:</p>
                            </div>
                            <div class="col">
                                <p>00001</p>
                                <br></br>
                            </div>
                            <div class="col-8"></div>
                        </div>
                        <div class="col-wn odfin">
                            <h4>已完成</h4>
                            <div>訂單編號 00001</div>
                            <div>成立時間 2022/03/26</div>
                        </div>
                            
                        <div class="payInfo">
                            <hr></hr>
                            <OrderCard/>
                            <OrderCard/>
                            </div>
                            
                            <hr class="col-3None"></hr>
                           
                            
                            <div class="row perInfo  col-3None">
                                <div class="col">
                                    <p>取貨方式:</p>
                                    <p>付款編號:</p>
                                    <p>訂購人資訊:</p>
                            
                                
                                    </div>
                                <div class="col">
                                    <p>自取</p>
                                    <p>匯款</p>
                                    <br></br>
                                    <p>姓名:XXX</p>
                                    <p>電話:XXX</p>
                                    <p>地址:XXX</p>
                                </div>
                                <div class="col-2 col-wn"></div>
                                <div class="col-8 col-3None"></div>
                            </div>
                            <div class="row note col-3None">
                                <div class="col">留言備註:</div>
                                <div class="col"></div>
                                <div class="col-4 col-wn"></div>
                                <div class="col-8 col-3None"></div>

                            </div>
                            <div class="row note col-3None">
                                <div class="col"></div>
                                <div class="col">XXXXXXXX</div>
                                <div class="col-8 col-3None"></div>

                            </div>
                            </div>
                            <br></br>
                            <hr></hr> 
                            <br></br>
                            <div class="pTitle col-3None">金額統計</div>
                            <br></br>
                            
                            <div class="row pDetail col-3None">
                                <div class="col-8"></div>
                                <div class="col-2">
                                    <p>小計加總</p> 
                                    <p>運費</p> 
                                    <p>優惠券折扣</p> 
                                    <p>紅利點數折扣</p> 
                                    <p class="mTopF">結帳總額</p> 
                                </div>
                                <div class="col-2 pmR">
                                    <p>$998</p>
                                    <p>+$0</p>
                                    <p>-$100</p>
                                    <p>-$50</p>
                                    <p class="mTopF">$898</p>
                                </div>
                                <div class="col-1"></div>
                               
                            </div>
                            <div class="container col-wn">
                                <div class="row">
                                    <div class="col-4 payColor">
                                        <div>取貨方式:</div>
                                        <div>付款方式:</div>
                                        <div>備註內容:</div>
                                    </div>
                                    <div class="col">
                                        <div>自取</div>
                                        <div>匯款</div>
                                        <div>自取</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div class="payman">
                                    
                                    <div class="payColor">購買人姓名</div> 
                                    <br></br>
                                    <div class="row">
                                        <div class="col">
                                            <div>姓名:</div>
                                            <div>手機:</div>
                                            <div>時間</div>
                                        </div>
                                        <div class="col pmR">
                                            <div>張杰克</div>
                                            <div>0912-345-678</div>
                                            <div>2022/03/26 18:00</div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div class="wnMoney">
                                    <div class="payColor">
                                        金額統計
                                    </div>
                                    <br></br>
                                    <div class="wnMbox">
                                        <div class="row ">
                                            <div class="col wnML">
                                                <div class="mTop">商品小計</div>
                                                <div>運費</div>
                                                <div>優惠券</div>
                                                <div>紅利折扣</div>
                                            </div>
                                            <div class="col wnMR">
                                                <div class="mTop">$998</div>
                                                <div>$60</div>
                                                <div>-$100</div>
                                                <div>$99</div>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div class="row">
                                            <div class="col wnML">
                                                <div class="mTopF">結帳總額</div>
                                            </div>
                                            <div class="col wnMR">
                                                <div class="mTopF">$859</div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                     
    
    
                            
    
                        </div>
                        <div class="col-1 col-3None"></div>
               
                
            

        </main>
        </div>
        </div>
        
        </>
    )
}
export default MemberOrder;