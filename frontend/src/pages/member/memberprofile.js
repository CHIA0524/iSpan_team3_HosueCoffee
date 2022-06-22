import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState,useEffect } from 'react';
import MemberAside from "./memberAside";
import MemberNewData from './memberNewData';
import './memberprofile.css';
function Memberprofile(props){
    const [datas,setDatas] = useState([])
    const{auth}=props;
    const {dataCheck}=props;
    const thismemberid=localStorage.getItem("true");
    const member_account=localStorage.getItem("account")
    const member_name=localStorage.getItem("name")
    const member_nick=localStorage.getItem("nick")
    const member_birth=localStorage.getItem("birth")
    const member_phone=localStorage.getItem("phone")
    const member_mail=localStorage.getItem("mail")
    const member_address=localStorage.getItem("address")
    const [member_photo,setmember_photo]=useState(localStorage.getItem("photo"))
    if(member_photo==""||member_photo==null){
        setmember_photo("housecoffee.png")
      }
    console.log(member_photo)
    if(!auth){
        window.location.replace("http://localhost:3000/member");
    }if(!dataCheck){
        window.location.replace("http://localhost:3000/member/NewData");

    }else{


    // if(dataCheck!=true){
    //     window.location.replace("http://localhost:3000/member/NewData");
    // }
  
 
    
    // if(datas.length >0 ){
    //     const profile=datas[0]
    //     const{member_account,member_name,member_nick,member_birth,member_phone,member_mail,member_address}=profile;
    return(
        <>
        
            <div className="container">
            <div className="row">
            <MemberAside/>
        
                <main className="mMain row col">
            
                
                    
                <div className="col-4 col-3None">
                        <div className="proList">
                            <div className="memberPhoto"><img  src={`${process.env.REACT_APP_API_URL}/uploads/${member_photo}`}  alt="會員照片"></img></div>
                            <div className="memberNumber">
                                <div >會員帳號</div>
                                <div >{member_account}</div> 
                            </div>
                        </div>
                    </div>
                    <div className="col proR">
                        <div className="proMain">
                            <div className="proList_m">
                                <div className="memberPhoto"><img   src={`${process.env.REACT_APP_API_URL}/uploads/${member_photo}`} alt="會員照片"></img></div>
                                <div className="memberNumber">
                                    <div >{member_account}</div>
                                </div>
                            </div>
                            <div className="col-3None">
                                <div className="proRight ">姓名:&emsp;&emsp;&emsp;&emsp;{member_name}</div>
                                <div className="proRight ">暱稱:&emsp;&emsp;&emsp;&emsp;{member_nick}</div>
                                <div className="proRight ">生日:&emsp;&emsp;&emsp;&emsp;{member_birth}</div>
                                <div className="proRight ">手機號碼:&emsp;&emsp;{member_phone}</div>
                                <div className="proRight ">電子信箱:&emsp;&emsp;{member_mail}</div>
                                <div className="proRight ">地址:&emsp;&emsp;&emsp;&emsp; {member_address} </div>
                            </div>
                            <div className="proRight col-wn">
                                <div className="proRight_show">姓名:&emsp;&emsp;&emsp;&emsp;{member_name}</div>
                                <div className="proRight_show">暱稱:&emsp;&emsp;&emsp;&emsp;{member_nick}</div>
                                <div className="proRight_show">生日:&emsp;&emsp;&emsp;&emsp;{member_birth}</div>
                                <div className="proRight_show">手機號碼:&emsp;&emsp;{member_phone}</div>
                                <div className="proRight_show">電子信箱:&emsp;&emsp;{member_mail}</div>
                                <div className="proRight_show">地址:&emsp;&emsp;&emsp;&emsp; {member_address} </div>
                            </div>
                            <br></br>
                        </div>
                        <Link to={'/member/profileEdit'}>
                        <button className="memberEdit memberEdit-w">編輯資料</button>
                        </Link>
                        <Link to={'/member/profileEdit'}>
                        <button className="memberEdit memberEdit-m">編輯</button>
                        </Link>
                
                    </div>
                    
                
                
            
                    
                </main> 
            </div>   
            </div>
            <br></br> 
            <br></br>
        
       
        
        </>
    )
    }

}

export default Memberprofile;