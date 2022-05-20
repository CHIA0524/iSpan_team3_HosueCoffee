import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import MemberBack from './memberBack';
import './memberQAcheck.css'
function MemberQAcheck(){
    return(
        <>
               <MemberBack/>

    
    <div class="container">
    <div class="row">
      <MemberAside/>
    <main class="pMain row col">
        <div class="ansWrap">
          <div class="memberAnsDetail">
            <div>
              <li>提問編號：</li>
              <li>回復狀態：</li>
              <li>提問類型：</li>
              <li>主旨：</li>
            </div>
            <div>
              <li>283982</li>
              <li>未回覆</li>
              <li>付款相關</li>
              <li>假世界冠軍</li>
            </div>
          </div>
          <div>
            <div class="memberAnser">
              <div>
                <p>您：請問維斯塔潘484假世界冠軍?</p>
                <span>2022/02/05 19:00</span>
              </div>
              <div>
                <p>客服：沒有錯他是假世界冠軍</p>
                <span>2022/02/06 10:00</span>
              </div>
            </div>
            <div class="memberAnserInout">
              <form class="d-flex flex-column" action="">
                <textarea name="" id="" cols="30" rows="10" placeholder="留言....."></textarea>
                <div class="text-center">
                  <button class="coffeeLightBtn">送出</button>
                </div>
              </form>
              <br></br>
            </div>
          </div>
        </div>
  </main>
</div>
  </div>
        </>
    )

}
export default MemberQAcheck;