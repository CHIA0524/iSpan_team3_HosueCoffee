import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import DrinkOListCard from './componend/DrinkOListCard';
import MemberBack from './memberBack';
import './memberOrderList.css'
function MemberDrinkOList(){
    return(
        <>
                <MemberBack/>
    <div className="container">
      <div className="row">
        <MemberAside/>
        <main className="pMain row col">
              <div className="listnavbar col-3None">
                      <div className="CState" id="nowState">全部</div>
                      <div className="CState">製作中</div>
                      <div className="CState">已完成</div>
                      <div className="CState">已取餐</div>
              </div>

              <div className="listnavbar col-12 row col-wn">
                  <div className="col-2 col-2None"></div>
                  <div className="col">
                      <div className="CState" id="nowState">全部</div>
                  </div>
                  <div className="col">
                      <div className="CState">製作中</div>
                  </div>
                  <div className=" col">
                      <div className="CState">已完成</div>
                  </div>
                  <div className="col">
                      <div className="CState">已取餐</div>
                  </div>
                  <div className="col-2 col-2None"></div>
              </div>
          
                <div className="listall">
                <DrinkOListCard/>
                <DrinkOListCard/>
                <DrinkOListCard/>
                <DrinkOListCard/>
                <DrinkOListCard/>
                </div>
          
      </main>   
      </div>  
    </div>
        </>
    )

}
export default MemberDrinkOList;