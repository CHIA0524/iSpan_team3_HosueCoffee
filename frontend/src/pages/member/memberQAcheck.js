import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MemberAside from './memberAside';
import MemberBack from './memberBack';
import './memberQAcheck.css'
 function MemberQAcheck(props){
   const{auth}=props
   const {dataCheck}=props;
    if(!dataCheck){
        window.location.replace("http://localhost:3000/member/NewData");
    }
  const params = useParams()
   const [datas,setDatas] = useState([])

    const fetchData=async()=>{
        console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/test/id?QA_id=${params.id}`)
        const results=await response.json();  
      
       setDatas(results);
   }
   

    useEffect(()=>{
      // console.log("effect")
        fetchData();
    },[])
    // console.log("aaa")
    // console.log(datas)
    if(datas.length >0 ){
      console.log((datas[0].id));
      const QA=datas[0];
      const{QA_id,ask_type,ask_title,ask,ans}=QA;
                var ans_type="已回復";
                if(ans ==""){
                    ans_type="未回覆"
                }
    


    return(
        <>
        
               <MemberBack/>

           
    <div class="container">
    <div class="row">
      <MemberAside/>
    <main class="mMain row col">
        <div class="ansWrap">
          <div class="memberAnsDetail">
            <div>
              <li>提問編號：</li>
              <li>回復狀態：</li>
              <li>提問類型：</li>
              <li>主旨：</li>
            </div>
            
            <div>
              <li>{QA_id}</li> 
              <li>{ans_type}</li>
              <li>{ask_type}</li>
              <li>{ask_title}</li>
            </div>
          </div>
          <div>
            <div class="memberAnser">
              <div>
                <p>您：{ask}</p>
                <span>2022/02/05 19:00</span>
              </div>
              <div>
                <p>客服：{ans}</p>
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
  </div>)
     
        </>
    )
  }
}
export default MemberQAcheck;