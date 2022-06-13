import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import MemberQACard from './componend/memberQACard';
import MemberBack from './memberBack';
import Member404 from './member404';
import { AiFillEye } from "react-icons/ai";
import QApopUP from './componend/QApopUP';
import './memberOrderList.css'
import './QApopup.css'
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
        <main className="mMain row col">
               
           
                <div className="col ">
                    <div className="row">
                        <div className="col-8"></div>
                        <div className="col-4">
                            <button className="coffeeLightBtn QAbtn col-3None" 
                            onClick={()=>{
                              document.querySelector('.QApopupWrap').style.display="block"
                            }}
                            >提問</button>
                          
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
                      <QApopUP/>
    
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