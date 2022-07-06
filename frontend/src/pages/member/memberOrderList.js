import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from "./memberAside";
import OrderListCard from './componend/OrderListCard';
import './memberOrderList.css'
function MemberOrderList(props){
    const{auth}=props;
    const {dataCheck}=props;
    if(!auth){
      window.location.replace("http://localhost:3000/member")
    }if(!dataCheck){
      window.location.replace("http://localhost:3000/member/NewData");
    }
    return(
        <>
            <div className="mMember col-wn">
        <p>&lt;&ensp;會員中心</p>
    </div>
    <div className="col-wn">
        <h2 className="toph2">訂單詳細</h2>
        <br></br>
        <hr className="tophr"></hr>
        <br></br>
        <br></br>
        <br></br>
    </div>

     
    <div className="container">
      <div className="row">
        <MemberAside/>
        <main className="mMain row col">
                <div className="listnavbar col-3None">
                        <div className="CState" id="nowState">全部</div>
                        <div className="CState">未完成</div>
                        <div className="CState">已完成</div>
                        <div className="CState">已取貨</div>
                </div>

                <div className="listnavbar col-12 row col-wn">
                    <div className="col-2 col-2None"></div>
                    <div className="col">
                        <div className="CState" id="nowState">全部</div>
                    </div>
                    <div className="col">
                        <div className="CState">未完成</div>
                    </div>
                    <div className=" col">
                        <div className="CState">已完成</div>
                    </div>
                    <div className="col">
                        <div className="CState">已取貨</div>
                    </div>
                    <div className="col-2 col-2None"></div>
                </div>
            
               <div className="listall">
                <OrderListCard/>
                
            </div>
               
               
        </main>  
      </div>  
    </div>
        </>
    )
}
export default MemberOrderList