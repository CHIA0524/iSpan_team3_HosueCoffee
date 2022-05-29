import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import MemberQACard from './componend/memberQACard';
import MemberBack from './memberBack';
import Member404 from './member404';
import { AiFillEye } from "react-icons/ai";
import './memberOrderList.css'
import './popup.css'
import { useState } from 'react';
function MemberQAList(props){
    
    const{auth}=props;
    const {dataCheck}=props;
    console.log(auth);
    if(!auth){
      window.location.replace("http://localhost:3000/member")
    }if(!dataCheck){
      window.location.replace("http://localhost:3000/member/NewData");
    }
    const thismemberid=localStorage.getItem("true");
  

    
 
  console.log(123);
  console.log(thismemberid);
    return(
        <>
        {auth? <div>
        <MemberBack/>
        <div className="container">
      <div className="row">
        <MemberAside/>
        <main className="pMain row col">
               
           
                <div className="col ">
                    <div className="row">
                        <div className="col-8"></div>
                        <div className="col-4">
                          <a href="#popupWrap" className="popupOpen">
                            <button className="coffeeLightBtn QAbtn col-3None">提問</button>
                          </a>
                        </div>
                    </div>
                    <br></br>
                    <table className="table userTr" >
                          <tr>
                            <th className="col-3None" scope="col">提問編號</th>
                            <th className="col-3None" scope="col">提問類型</th>
                            <th scope="col">主旨</th>
                            <th scope="col">回復狀態</th>
                            <th className="col-3None" scope="col" >更新時間</th>
                            <th scope="col">查看</th>
                          </tr>
                              <MemberQACard />
                      </table>
                      <div className="QAbtn-M">
                        <a href="#popupWrap" className="popupOpen">
                        <button className="coffeeLightBtn QAbtn-M">提問</button>
                      </a>
                      </div>
    
    <div className="popupWrap" id="popupWrap">
      <div className="popupBox">
        <form name="ansAddForm" className="ansAddForm d-flex flex-column text-start" method="post" novalidate onSubmit="checkNewForm(); return false;">
          <a className="popupClose text-center" href="#"><i className="fa-solid fa-xmark"></i></a>
          <input type="text" name="" id="" placeholder="主旨"></input>
          <select name="" id="">
            <option value="" disabled selected>類型</option>
            <option value="">商品相關</option>
            <option value="">付款相關</option>
            <option value="">其他</option>
          </select>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <div className="text-center">
            <button type="submit" className="coffeeLightBtn">送出</button>
          </div>
        </form>
      </div>
    </div>
                </div>
               
        </main>  
      </div>  
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src='./popup.js'></script>
        </div>:<Member404/>}
        
    
        </>
    )
  
}
export default MemberQAList