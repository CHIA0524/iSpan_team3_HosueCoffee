import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MemberAside from './memberAside';
import MemberBack from './memberBack';
import OrderCard from './componend/orderCard';

import './memberAside.css'
import './memberOrder.css'
function MemberOrder(props){
    const{auth}=props; 
    const {dataCheck}=props;
    const params = useParams()
    const thiso_id=params.id
    const [datas,setDatas] = useState([])
    const thismemberid=localStorage.getItem(true)
    if(!auth){
      window.location.replace("http://localhost:3000/member")
    }if(!dataCheck){
      window.location.replace("http://localhost:3000/member/NewData");
    }

    
    const fetchData=async()=>{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/morder?o_id=${thiso_id}`)
        const results=await response.json();
        setDatas(results); 
    }
    console.log(datas)
    useEffect(()=>{
        fetchData();
    },[])
    if(datas.length >0 ){
        console.log((datas[0].o_id));
        const order=datas[0];
        const{shipment,pay,order_condition,recipient_name,recipient_phone,recipient_address,remark,used_points,CREATEd_at}=order;
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
                        <h4 className="col-3None">{order_condition}</h4> 
                        <div className="row memNo col-3None">
                            <div className="col-2 ">
                                <p>訂單編號:</p>
                            </div>
                            <div className="col-2">
                                <p>{thiso_id}</p>
                            </div>
                            <div className="col-8"></div>
                        </div>
                        <div className="row memNo col-3None">
                            <div className="col-2 ">
                                <p>成立時間:</p>
                            </div>
                            <div className="col">
                                <p>{CREATEd_at}</p>
                            </div>
                            <div className="col"></div>
                        </div>
                        <br></br>
                        <div className="col-wn odfin">
                            <h4>{order_condition}</h4>
                            <div>訂單編號 {thiso_id}</div>
                            <div>成立時間 {CREATEd_at}</div>
                        </div>
                            
                        <div className="payInfo">
                            <hr></hr>
                            <OrderCard/>
                            <OrderCard/>
                            </div>
                            
                           
                            
                            <div className="row MperInfo  col-3None">
                                <div className="col-2">
                                    <p>取貨方式:</p>
                                    <br></br>
                                    <p>付款編號:</p>
                                    <br></br>
                                    <p>收件人資訊:</p>
                            
                                    </div>
                                <div className="col ">
                                    <p>{shipment}</p>
                                    <br></br>
                                    <p>{pay}</p>
                                    <br></br>
                                    <p>姓名:&emsp;{recipient_name}</p>
                                    <br></br>
                                    <p>電話:&emsp;{recipient_phone}</p>
                                    <br></br>
                                    <p>地址:&emsp;{recipient_address}</p>
                                </div>
                                <div className="col-2 col-wn"></div>
                            </div>
                            <br></br>
                            <div className="row note col-3None">
                                <div className="col">留言備註:</div>
                                <div className="col"></div>
                                <div className="col-4 col-wn"></div>
                                <div className="col-8 col-3None"></div>

                            </div>
                            <div className="row note col-3None">
                                <div className="col"></div>
                                <div className="col">{remark}</div>
                                <div className="col-8 col-3None"></div>

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
                                    <p>-${used_points}</p>
                                    <p className="mTopF">$898</p>
                                </div>
                                <div className="col-1"></div>
                               
                            </div>
                            </div>
                            <div className="container col-wn">
                                <div className="row">
                                    <div className="col-4 payColor">
                                        <div>取貨方式:</div>
                                        <div>付款方式:</div>
                                        <div>備註內容:</div>
                                    </div>
                                    <div className="col">
                                        <div>{shipment}</div>
                                        <div>{pay}</div>
                                        <div>{remark}</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="payman">
                                    
                                    <div className="payColor">收件人資訊</div> 
                                    <br></br>
                                    <div className="row">
                                        <div className="col-2">
                                            <div>姓名:</div>
                                            <div>手機:</div>
                                            <div>地址</div>
                                        </div>
                                        <div className="col pmR">
                                            <div>{recipient_name}</div>
                                            <div>{recipient_phone}</div>
                                            <div>{recipient_address}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wnMoney">
                                <hr></hr>
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
                                                <div>-${used_points}</div>
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
}
export default MemberOrder;