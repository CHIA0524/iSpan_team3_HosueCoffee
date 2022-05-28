import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { useState } from 'react';
import MemberAside from "./memberAside";
import MemberBack from './memberBack';
import './memberPassword.css'
import { duration } from '@mui/material';
function MemberPassword(){
  const account=localStorage.getItem("account");
  const [member_password, setmember_password] = useState("");
  const [member_passwordN, setmember_passwordN] = useState("");
  const [member_passwordN2, setmember_passwordN2] = useState("");
  const [passwordMessage, setpasswordMessage] = useState("");
  const [passwordMessageN, setpasswordMessageN] = useState("");
  const [passwordMessageN2, setpasswordMessageN2] = useState("");
  const thismemberid=localStorage.getItem(true);
  // console.log(thismemberid);

  const handleValueChange=(e)=>{
    setmember_password(e.target.value);
  }
  const handleValueChangeN=(e)=>{
    setmember_passwordN(e.target.value);
  }
  const handleValueChangeN2=(e)=>{
    setmember_passwordN2(e.target.value);
  }
 
  const handleCheckPassword=async ()=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/account/checkPassword?member_password=${member_password}&member_id=${thismemberid}`);
    console.log(process.env.REACT_APP_API_URL);
    console.log(thismemberid)
    const results = await response.json();
    if(results.total === 0){
        setpasswordMessage("舊密碼錯誤");
        // document.querySelector(".newpassword").style.display="none";
      }else{
        setpasswordMessage("舊密碼正確");
        document.querySelector('.passwordMessageRed').style.color="#4C3410"

        // document.querySelector(".newpassword").style.display="block";
    }
  }
  const password_re =/^(?=.*[0-9\!@#\$%\^&amp;\*])(?=.*[a-zA-Z]).{8,20}$/; 
  //密碼格式驗證
  const handleCheckPasswordN=()=>{
    if(member_passwordN && password_re.test(member_passwordN)){
      // document.querySelector(".newpassword2").style.display="block";
      setpasswordMessageN("密碼符合")
      document.querySelector('.passwordMessageRedN').style.color="#4C3410"
    }else{
      // document.querySelector(".newpassword2").style.display="none";
      setpasswordMessageN("需為英文數字8~20字組合")
      setmember_passwordN2("")
    }

  }
  const handleCheckPasswordN2=()=>{
    if(member_passwordN==member_passwordN2 && member_passwordN2!=""){
      // console.log("新密碼正確")
      setpasswordMessageN2("新密碼對比正確");
      document.querySelector('.passwordMessageRedN2').style.color="#4C3410"
      // document.querySelector(".memberEditP").style.display="block";
    }else{
      // console.log("新密碼對比錯誤")
      setpasswordMessageN2("新密碼對比錯誤");
      // document.querySelector(".memberEditP").style.display="none";
    }
  }
  const changPW=async ()=>{
    if(passwordMessage=='舊密碼正確'&& passwordMessageN=="密碼符合"&& passwordMessageN2=="新密碼對比正確"){
    const response = await fetch(`${process.env.REACT_APP_API_URL}/account/changePassword?member_password=${member_passwordN}&member_id=${thismemberid}`);
    // const results = await response.json();
    // console.log(results);
    alert('成功修改');
    window.location.assign("http://localhost:3000/member/profile");
  }else{
    if(passwordMessage !='舊密碼正確'){
      document.querySelector('.passwordMessageRed').style.color="red"
    }
    if(passwordMessageN !='密碼符合'){
      document.querySelector('.passwordMessageRedN').style.color="red"
    }
    if(passwordMessageN2 !='新密碼對比正確'){
      document.querySelector('.passwordMessageRedN2').style.color="red"
    }
  }
}
  
    return(
        <>
        
          <MemberBack/>

    
    <div className="container">
      <div className="row">
        <MemberAside/>
        <main className="pMain row col">
                
                <div className="col-4 col-3None">
                    <div className="proList">
                        <div className="memberPhoto"><img  src={require('./img/memberphoto.jpg')} alt="會員照片"></img></div>
                        <div className="memberNumber">
                            <div >會員帳號</div>
                            <div >{account}</div>
                        </div>
                    </div>
                </div>
                <div className="col proR">
                    <div className="proMain">
                        <div className="proList_m">
                            <div className="memberPhoto"><img src={require('./img/memberphoto.jpg')} alt="會員照片"></img></div>
                            
                            <div className="memberNumber">
                                <div >{account}</div>
                            </div>
                        </div>
                        <div>
                            <div className="col-3None">
                              <div className="proRight">舊密碼:&emsp;&emsp;&emsp;&emsp;<input type="password" value={member_password} onChange={handleValueChange} onBlur={handleCheckPassword}></input><div className='passwordMessage passwordMessageRed'>&emsp;&emsp;&emsp;&emsp;{passwordMessage || "輸入舊密碼"}</div></div>
                              <div className='newpassword'>  
                              <div className="proRight" >新密碼:&emsp;&emsp;&emsp;&emsp;
                                  <input type="password" value={member_passwordN} onChange={handleValueChangeN} onBlur={handleCheckPasswordN}  maxLength={20} minLength={8}></input><div className='passwordMessage passwordMessageRedN'>&emsp;&emsp;&emsp;&emsp;{passwordMessageN || "需為英文數字8~20字組合"}</div>
                              </div>
                              <div className="proRight newpassword2">確認新密碼:&emsp;&emsp;
                                    <input type="password"  value={member_passwordN2} onChange={handleValueChangeN2}  onBlur={handleCheckPasswordN2} maxLength={20} minLength={8}></input>
                                    <div className='passwordMessage passwordMessageRedN2' >&emsp;&emsp;&emsp;&emsp;{passwordMessageN2 || "請再次輸入新密碼"}</div>
                                    </div>
                              <button type='button' className="memberEdit memberEditP memberEdit-w" onClick={changPW}>修改密碼</button>
                              </div>
                            </div>

                              <div className="col-wn">
                                    <div className="proRight">
                                      <div>舊密碼:</div>
                                      <input type="password" value={member_password}></input>
                                      <br></br>
                                    </div>
                                    <div>{passwordMessage || "輸入密碼"}</div>
                                    <div className='newpassword'> 
                                    <div className="proRight">
                                      <div>新密碼:</div>
                                      <input type="password"></input>
                                      <br></br>
                                    </div>

                                    <div className="proRight">
                                      <div>確認新密碼:</div>
                                      <input type="password"></input>
                                      <br></br>
                                    </div>
                                  <button  type='button' className="memberEdit memberEditP memberEdit-m">修改</button>
                                  </div>
                               </div>


                          
                      </div>
                        <br></br>
                    </div>
                 

                    
                    
               
                </div>
         
               
        </main>    
        </div>  
    </div>
    <br></br>  
    <br></br> 
        </>
    )
}
export default MemberPassword
