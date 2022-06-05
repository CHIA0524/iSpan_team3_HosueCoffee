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
      const QA=datas[0];
      const{QA_id,ask_type,ask_title,ask,ans,CREATEd_at,renew}=QA;
                var ans_type="已回復";
                var renew_type=renew;
                if(ans ==""){
                    ans_type="未回覆"
                    renew_type="客服尚未回覆"
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
                <br></br>
                <span>{CREATEd_at}</span>
              </div>
              <br></br>
              <div>
                <p>客服：{ans}</p>
                <br></br>
                <span>{renew_type}</span>
              </div>
            </div>
            <div class="memberAnserInout">
              
                <div class="text-center QAGBbtn">
                <br></br>
                <br></br>
                  <button class="coffeeLightBtn QAGBbtn" onClick={()=>{
                    window.history.go(-1);
                  }}>返回</button>
                </div>
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