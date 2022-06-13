import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
function MemberQACard(props){
    const [datas,setDatas] = useState([])
    const thismemberid=localStorage.getItem("true")
    const fetchData=async()=>{

        const response = await fetch(`${process.env.REACT_APP_API_URL}/test?fk_member_id=${thismemberid}`)
        const results=await response.json();
        setDatas(results);
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
        
            {datas.length> 0 && datas.map((category,i)=>{
                const{QA_id,ask_type,ask_title,ans,CREATEd_at,renew}=category;
                var ans_type="已回復";
                if(ans ==""){
                    ans_type="未回覆"
                }
                return(
                    <tr key={QA_id}>
                        <td className="col-3None" scope="row">{QA_id}</td>
                        <td className="col-3None">{ask_type}</td>
                        <td>{ask_title}</td> 
                        <td>{ans_type}</td>
                        <td className="tbTime col-3None">{renew.slice(0,10)}</td>
                        <td><Link to={`/member/QAcheck/${QA_id}`}><AiFillEye size={40}/></Link></td>
                    </tr>
                )
            })}
                
       
        
         
         </>
       
    )
                
}
export default MemberQACard