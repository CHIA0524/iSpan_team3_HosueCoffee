import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './memberLogin.css'
import Memberprofile from './memberprofile';
// import Welcome from './memberWelcom';
function MemberLogin(props){
    const {auth,setAuth} = props;  
    //登入狀態，修改登入
    const {dataCheck,setDataCheck}=props
    //登入狀態，修改登入
    // if(dataCheck!=true){
    //     window.location.replace("http://localhost:3000/member/NewData");
    // }
    const [member_account, setmember_account] = useState("");
    const [member_password, setmember_password] = useState("");
    const [new_mb_mail,setNew_mb_mail]=useState("")
    const [new_mb_account,setNew_mb_account]=useState("")
    const [new_mb_password,setNew_mb_password]=useState("")

    const [accountMessage, setAccounteMessage] = useState("");
    const [mailMessage, setMailMessage] = useState("");
    const [PWMessage, setPWMessage] = useState("");

    if(auth){
       //登入，轉向個人基本資料
        window.location.replace("http://localhost:3000/member/profile")
    }else{
    
    

   
    const handleValueChange=(e)=>{
      setmember_account(e.target.value);
    }
    const handleValueChange2=(e)=>{
      setmember_password(e.target.value);
    }

    const loginBTN=async()=>{
        const loginTF = await fetch(`${process.env.REACT_APP_API_URL}/account/LoginTF/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
        
       
        
        const resultsTF = await loginTF.json();
        console.log(resultsTF);
        // console.log(results);
        if(resultsTF.total===1){

            const loginData = await fetch(`${process.env.REACT_APP_API_URL}/account/LoginData/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
            const results = await loginData.json();
            const loginid = await fetch(`${process.env.REACT_APP_API_URL}/account/Loginid/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
            const loginMid = await loginid.json();
            console.log(loginMid.member_address)
            localStorage.setItem("true", loginMid.member_id);
            localStorage.setItem("dataCheck", "資料完整");
            localStorage.setItem("account", loginMid.member_account);
            localStorage.setItem("mail", loginMid.member_mail);
            if(results.total===1){
                const login = await fetch(`${process.env.REACT_APP_API_URL}/account/Login/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
                const results = await login.json();
                console.log(results);
                localStorage.setItem("name", results.member_name);
                localStorage.setItem("nick", results.member_nick);
                localStorage.setItem("birth", results.member_birth);
                localStorage.setItem("phone", results.member_phone);
                localStorage.setItem("address", results.member_address);
                localStorage.setItem("photo", results.photo);
                
                alert('成功登入');
                setAuth(!auth);
                setDataCheck(!dataCheck)
                window.location.replace("http://localhost:3000/member/profile");
        }else{
            localStorage.removeItem("dataCheck")
            alert('成功登入 但基本資料尚未完整');
            window.location.replace("http://localhost:3000/member/NewData");
            }
        }else{
            alert('帳號密碼錯誤');
            // setAuth(!auth)

        }
    }
        const ChangenewML=(e)=>{
            setNew_mb_mail(e.target.value);
          }
        const ChangenewAC=(e)=>{
            setNew_mb_account(e.target.value);
          }
        const ChangenewPW=(e)=>{
            setNew_mb_password(e.target.value);
          }
        const mail_re = /[\w-]+@([\w-]+\.)+[\w-]+/;; 

        const CheckNewML=async ()=>{
            if(!mail_re.test(new_mb_mail)){
                setMailMessage("信箱格式錯誤");
            }else{
                const response = await fetch(`${process.env.REACT_APP_API_URL}/account/checkmail?member_mail=${new_mb_mail}`);
                console.log(process.env.REACT_APP_API_URL);
                const results = await response.json();
                if(results.total === 0 ){
                    setMailMessage("信箱可使用");
                    document.querySelector('.CKNmail').style.color="#e4d2a3"
                    document.querySelector('.CKNmail_m').style.color="#4C3410"
                }else{
                    setMailMessage("信箱已被註冊");
                }
        }
      
        }
        const account_re =/^(?=.*[0-9\!@#\$%\^&amp;\*])(?=.*[a-zA-Z]).{4,20}$/; 

        const CheckNewAC=async ()=>{
            if(!account_re.test(new_mb_account)){
                setAccounteMessage("帳號需4~20字英文數字組合");
            }else{
            const response = await fetch(`${process.env.REACT_APP_API_URL}/account/checkName?member_account=${new_mb_account}`);
            console.log(process.env.REACT_APP_API_URL);
            const results = await response.json();
            if(results.total === 0){
                setAccounteMessage("帳號可使用");
                document.querySelector('.CKNaccount').style.color="#e4d2a3"
                document.querySelector('.CKNaccount_m').style.color="#4C3410"
            }else{
                setAccounteMessage("帳號已被註冊");
            }
            }
      
        }

        const password_re =/^(?=.*[0-9\!@#\$%\^&amp;\*])(?=.*[a-zA-Z]).{8,20}$/; 
        //密碼格式驗證
        const  CheckNewPW=()=>{
            if(password_re.test(new_mb_password)){
                setPWMessage("密碼符合")
                document.querySelector('.CKNpassword').style.color="#e4d2a3"
                document.querySelector('.CKNpassword_m').style.color="#4C3410"
            }else{
                setPWMessage("密碼需8~20英文數字組合")
                
            }

        } 

        const CRnewMember=async ()=>{
            if(mailMessage == "信箱可使用" && accountMessage == "帳號可使用" && PWMessage == "密碼符合"){
            const CRNM = await fetch(`${process.env.REACT_APP_API_URL}/account/CRNM/?member_mail=${new_mb_mail}&member_account=${new_mb_account}&member_password=${new_mb_password}`);
            
            const CRNM2 = await fetch(`${process.env.REACT_APP_API_URL}/account/CRNM2/?member_mail=${new_mb_mail}&member_account=${new_mb_account}&member_password=${new_mb_password}`);
            console.log(process.env.REACT_APP_API_URL);
            const resulta = await CRNM2.json();
            console.log(resulta)
            setmember_account(new_mb_account);
            setmember_password(new_mb_password);
            setNew_mb_mail("");
            setNew_mb_account("");
            setNew_mb_password("");
            alert("註冊成功，請直接登入")

            //滑過去登入頁面
            document.querySelector('.loginMain1').style.right='-491px';
            document.querySelector('.loginMain1').style.transition='0.5s';
            document.querySelector('.LG').style.display="block"
            document.querySelector('.LG-F').style.display="none"

            //手機板跳回登入頁
            document.querySelector('.loginCM').style.display="none"
            document.querySelector('.loginM').style.display="block"
            document.querySelector('.forget-m').style.display="none"
            }else{ 
                console.log("錯誤")
                if(mailMessage != "信箱可使用"){
                    console.log("mail錯誤")
                    document.querySelector('.CKNmail').style.color="red"
                    document.querySelector('.CKNmail_m').style.color="red"
                    
                }if(accountMessage != "帳號可使用"){
                    console.log("account錯誤") 
                    document.querySelector('.CKNaccount').style.color="red"
                    document.querySelector('.CKNaccount_m').style.color="red"
                    
                }if(PWMessage != "密碼符合"){
                    console.log("password錯誤")
                    document.querySelector('.CKNpassword').style.color="red"
                    document.querySelector('.CKNpassword_m').style.color="red"

            }
        }


        

        }
    
    

    const Login = ()=>{
        document.querySelector('.loginMain1').style.right='-491px';
        document.querySelector('.loginMain1').style.transition='0.5s';
        document.querySelector('.LG').style.display="block"
        document.querySelector('.LG-F').style.display="none"
      }
    const SingIn = ()=>{
        document.querySelector('.loginMain1 ').style.right='0px';
        document.querySelector('.loginMain1 ').style.transition='0.5s';
      }
      const fg = ()=>{
        document.querySelector('.LG').style.display="none"
        document.querySelector('.LG-F').style.display="block"
      }
      const fgb = ()=>{
        document.querySelector('.LG').style.display="block"
        document.querySelector('.LG-F').style.display="none"
      }
  
  
  
      const rwdNew = () =>{
        document.querySelector('.loginM').style.display="none"
        document.querySelector('.loginCM').style.display="block"
        document.querySelector('.forget-m').style.display="none"
      }
      const rwdL=()=>{
        document.querySelector('.loginCM').style.display="none"
        document.querySelector('.loginM').style.display="block"
        document.querySelector('.forget-m').style.display="none"
      }
      const fgM=()=>{
        document.querySelector('.loginCM').style.display="none"
        document.querySelector('.loginM').style.display="none"
        document.querySelector('.forget-m').style.display="block"
      }
      const fgMb=()=>{
        document.querySelector('.loginCM').style.display="none"
        document.querySelector('.loginM').style.display="block"
      }


  
    //   
    return(
      
        <>
        {/* {auth ?<Memberprofile/> :
        <div> */}
        <div className="pmain">
                <div className="row">
                    <div className="col ">
                        <div className="memberLoginMain">
                            <div className="row">
                                <div className="col loginLift">
                                    <img className="member1" src={require('./img/member_logoin_1.png')} alt=""></img>
                                    <img className="member2" src={require('./img/member_logoin_2.png')} alt=""></img>
                                    <h2 className="liftW1">登入會員</h2>
                                    <h2 className="liftW2">享受專屬優惠</h2>
                                </div>
                                <div className="col loginRight">
                                    <div className="row">
                                    <div className="col-6 loginTop loginTopL"> <div className="loginWord lg1" onClick={Login}>LOGIN</div> </div>
                                    <div className="col-6 loginTop loginTopR"> <div className="loginWord lg2" onClick={SingIn}>SIGN IN</div> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row loginMain">
                                <div className="col-6 loginMain1">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div className="loginInput loginInputL">
                                        <div className="LG">
                                            <br></br>
                                            <form >
                                            <input type="text" size="30" placeholder="&ensp;會員帳號" value={member_account} name='member_account' onChange={handleValueChange} ></input>
                                            <br></br>
                                            <input type="password" size="30" placeholder="&ensp;會員密碼" value={member_password} name='member_password' onChange={handleValueChange2}></input>
                                            <div className="row">
                                            <div className="col-3"></div>
                                            <div className="col-4"></div> 
                                            <div id="forget" onClick={fg} className="col-3">忘記密碼?</div>
                                            <div className="col-2"></div>
                                            </div>
                                            <br></br>
                                            {/* <button  onClick={()=>{
                                                setAuth(!auth)

                                            }}>{auth?"登出":"登入"}</button> */}
                                            
                                            {/* <Link to="/member/Profile"><button >&ensp;登入&ensp;</button></Link> */}
                                           {/* <button type='button' onClick={loginBTN}>&ensp; {auth ? '已登入':'登入'}&ensp;</button> */}
                                           <button type='button' onClick={loginBTN}>&ensp;登入&ensp;</button>
                                            </form>
                                            <hr></hr>
                                            <br></br>
                                            <div className="GLoginL"><i className="fa-brands fa-google"></i>&ensp;使用Google登入</div>
                                        </div>
                                        <div className="LG-F">
                                            <form>
                                            <input type="email" placeholder="請輸入註冊信箱" name='FMail'></input>
                                            <div className="fgBack mLcolor" onClick={fgb}>返回</div>
                                            <button>&ensp;送出&ensp;</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 loginMain2">
                                    <br></br>
                                    <br></br>
                                    <div className="loginInput loginInputR">
                                    <br></br>
                                    {/* <form>   */}
                                    <input type="email" size="30" placeholder="&ensp;會員信箱" name='Create_Mail' value={new_mb_mail} onChange={ChangenewML} onBlur={CheckNewML}></input>
                                    <div className='CKN CKNmail '>{mailMessage || "請輸入信箱"}</div>

                                    <input type="text" size="30" placeholder="&ensp;會員帳號" name='Create_Account' value={new_mb_account} onChange={ChangenewAC} onBlur={CheckNewAC}></input>
                                    <div className='CKN CKNaccount'>{accountMessage || "帳號需4~20字英文數字組合"}</div>

                                    <input type="password" size="30" placeholder="&ensp;會員密碼" name='Create_Password' value={new_mb_password} onChange={ChangenewPW} onBlur={CheckNewPW}></input>
                                    <div className='CKN CKNpassword'>{PWMessage || "密碼需8~20英文數字組合"}</div>
                                    <br></br>

                                    <button className='CRBTN' type='button' onClick={CRnewMember}>&ensp;註冊&ensp;</button>
                                    {/* </form> */}
                                    <hr></hr>
                                    <br></br>
                                    <div className="GLoginR"><i className="fa-brands fa-google"></i>&ensp;使用Google註冊</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pmain-m">
                <div className="loginM">
                    <div className="MimgDiv">
                    </div>
                    <div className="loginInput loginInputL">
                    <form>
                    <input type="text" size="25" placeholder="&ensp;會員帳號" value={member_account} name='member_account' onChange={handleValueChange}></input>
                    <br></br>
                    <input type="password" size="25" placeholder="&ensp;會員密碼" value={member_password} onChange={handleValueChange2}></input>
                    <br></br>
                    <div className="mLcolor fgaa" onClick={fgM}>忘記密碼</div>
                    <br></br>
                    <button type='button' onClick={loginBTN}>&ensp;登入&ensp;</button>
                    </form>
                    <div className="loginM-F">
                        <div className="lmLogo"><i className="fa-brands fa-google"></i></div>
                        <div className="lmLogo"><i className="fa-brands fa-facebook-f"></i></div>
                        <div className="newM mLcolor" onClick={rwdNew}>註冊帳號</div>
                    </div>
                    </div>
                </div>  

                <div className="loginCM">
                    <div className="loginInput loginInputL">
                    <form>

                        <input className='RWDSignIntput' type="text" size="25" placeholder="&ensp;會員信箱" name='Create_Mail' value={new_mb_mail} onChange={ChangenewML} onBlur={CheckNewML}></input>
                        <div className=' CKNmail CKNmail_m'>{mailMessage || "請輸入信箱"}</div>

                        <input className='RWDSignIntput' type="text" size="25" placeholder="&ensp;會員帳號" name='Create_Account' value={new_mb_account} onChange={ChangenewAC} onBlur={CheckNewAC}></input>
                        <div className=' CKNaccount CKNaccount_m'>{accountMessage || "帳號需4~20字英文數字組合"}</div>

                        <input className='RWDSignIntput' type="password" size="25" placeholder="&ensp;會員密碼" name='Create_Password' value={new_mb_password} onChange={ChangenewPW} onBlur={CheckNewPW}></input>
                        <div className='CKNpassword CKNpassword_m'>{PWMessage || "密碼需8~20英文數字組合"}</div>

                        <button  type='button' onClick={CRnewMember}>&ensp;註冊&ensp;</button>
                    </form>
                    <div className="loginM-F">
                        <div className="lmLogo"><i className="fa-brands fa-google"></i></div>
                        <div className="lmLogo"><i className="fa-brands fa-facebook-f"></i></div>
                        <br></br>
                        <div className="newL mLcolor" onClick={rwdL}>已有帳號</div>
                    </div>
                    </div>
                </div> 
                <div className="forget-m loginInput loginInputL">
                    <form>
                        <input type="email" size="25" placeholder="請輸入註冊信箱" name='Create_Mail'></input>
                        <div className="mldiv"><div className="fgMBack mLcolor" onClick={fgMb}>返回</div></div>
                        <button >&ensp;送出&ensp;</button>
                    </form>
                </div> 
                </div>
        {/* </div>
        } */}
       
        
      
         
         
            
            
        </>
    )
    
}   
    

}
export default MemberLogin