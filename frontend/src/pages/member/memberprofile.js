import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState,useEffect } from 'react';
import MemberAside from "./memberAside";
import './memberprofile.css';
function Memberprofile(props){
    const [datas,setDatas] = useState([])
    const {thismemberid}=props
    const fetchData=async()=>{
        console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/profile?member_id=${thismemberid}`)
        const results=await response.json();
        setDatas(results);
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    if(datas.length >0 ){
        const profile=datas[0]
        const{member_account,member_name,member_nick,member_birth,member_phone,member_mail,member_address}=profile;
    return(
        <>
        <div className="container">
        <div className="row">
           <MemberAside/>
      
            <main className="pMain row col">
        
            
                
            <div className="col-4 col-3None">
                    <div className="proList">
                        <div className="memberPhoto"><img   src={require('./img/memberphoto.jpg')} alt="會員照片"></img></div>
                        <div className="memberNumber">
                            <div >會員帳號</div>
                            <div >{member_account}</div> 
                        </div>
                    </div>
                </div>
                <div className="col proR">
                    <div className="proMain">
                        <div className="proList_m">
                            <div className="memberPhoto"><img   src={require('./img/memberphoto.jpg')} alt="會員照片"></img></div>
                            <div className="memberNumber">
                                <div >Jack123</div>
                            </div>
                        </div>
                        <div className="proRight">姓名:&emsp; &emsp;&emsp;&emsp;{member_name}</div>
                        <div className="proRight">暱稱:&emsp; &emsp;&emsp;&emsp;{member_nick}</div>
                        <div className="proRight">生日:&emsp; &emsp;&emsp;&emsp;{member_birth.slice(0,10)}</div>
                        <div className="proRight">手機號碼:&emsp;&emsp; {member_phone}</div>
                        <div className="proRight">電子信箱:&emsp;&emsp; {member_mail}</div>
                        <div className="proRight">地址:&emsp;&emsp;&emsp;&emsp; {member_address} </div>
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