import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
function MemberQACard(){
    const [datas,setDatas] = useState([])
    const fetchData=async()=>{
        const response = await fetch("http://localhost:3001/test")
        const results=await response.json();
        setDatas(results);
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
        
            {datas.length> 0 && datas.map((category,i)=>{
                const{id,ask_type,main,ans,CREATEd_at}=category;
                var ans_type="已回復";
                if(ans ==""){
                    ans_type="未回覆"
                }
                return(
                    <tr key={i}>
                        <td className="col-3None" scope="row">{id}</td>
                        <td className="col-3None">{ask_type}</td>
                        <td>{main}</td> 
                        <td>{ans_type}</td>
                        <td className="tbTime col-3None">{CREATEd_at.slice(0,10)}</td>
                        <td><Link to='/member/QAcheck'><AiFillEye size={40}/></Link></td>
                    </tr>
                )
            })}
                
       
        
         
         </>
       
    )
                
}
export default MemberQACard