import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './memberLogin.css'
import Memberprofile from './memberprofile';
import SweetloginY from './sweetalert/SweetloginY';
import SweetloginN from './sweetalert/SweetloginN';
import SweetloginYN from './sweetalert/SweetloginYN';
import SweetSignY from './sweetalert/SweetSignY';
import SweetSignN from './sweetalert/SweetSignN';
import SweetloginSTN from './sweetalert/SweetloginSTN';
function MemberLogin(props){
    const {auth,setAuth,setDataCheck} = props;  
    
    
  
    const [member_account, setmember_account] = useState("");
    const [member_password, setmember_password] = useState("");
    //^設定登入時帳號密碼的value^

    const [new_mb_mail,setNew_mb_mail]=useState("")
    const [new_mb_account,setNew_mb_account]=useState("")
    const [new_mb_password,setNew_mb_password]=useState("")
    //^設定註冊時信箱帳號密碼的value^

    const new_mb_point=100;
    //^設定註冊帳號贈送的紅利點數^
    const new_login_status=0;
    //^設定註冊帳號 登入狀態^

    const [accountMessage, setAccounteMessage] = useState("");
    const [mailMessage, setMailMessage] = useState("");
    const [PWMessage, setPWMessage] = useState("");     
    //^設定註冊時的提示訊息^

    if(auth){
        window.location.replace("http://localhost:3000/member/profile")
        //^如果已經登入，轉向個人基本資料^
    }else{
    
    

   
    const handleValueChange=(e)=>{
      setmember_account(e.target.value);
    }
    const handleValueChange2=(e)=>{
      setmember_password(e.target.value);
    }
    //^讓登入2個input可以修改^
  
    const ChangenewML=(e)=>{
        setNew_mb_mail(e.target.value);
    }
    const ChangenewAC=(e)=>{
        setNew_mb_account(e.target.value);
    }
    const ChangenewPW=(e)=>{
        setNew_mb_password(e.target.value);
    }
    //讓註冊3個input可以修改

        const mail_re = /[\w-]+@([\w-]+\.)+[\w-]+/;; 
        //^E-mail驗證格式^

        const CheckNewML=async ()=>{
            if(!mail_re.test(new_mb_mail)){
                setMailMessage("信箱格式錯誤");
            }else{
            //^格式驗證通過^
                const response = await fetch(`${process.env.REACT_APP_API_URL}/account/checkmail?member_mail=${new_mb_mail}`);
                //^取得資料庫使否有這筆EMAIL，若有回傳1，沒有回傳0^
                const results = await response.json();
                if(results.total === 0 ){
                //^如果接收到0^
                    setMailMessage("信箱可使用");
                    //^提示訊息顯示"信箱可使用"^
                    document.querySelector('.CKNmail').style.color="#e4d2a3"
                    //修改網頁版提示訊息顏色為正常顏色
                    document.querySelector('.CKNmail_m').style.color="#4C3410"
                    //修改手機版提示訊息顏色為正常顏色
                }else{
                //^如果接收到1^
                    setMailMessage("信箱已被註冊");
                    //^提示訊息顯示"信箱已被註冊"^
                }
        }
      
        }
        const account_re =/^(?=.*[0-9\!@#\$%\^&amp;\*])(?=.*[a-zA-Z]).{4,20}$/; 
        //^帳號驗證格式 英文+數字 4~20字^

        const CheckNewAC=async ()=>{
            if(!account_re.test(new_mb_account)){
                setAccounteMessage("帳號需4~20字英文數字組合");
            }else{
                const response = await fetch(`${process.env.REACT_APP_API_URL}/account/checkName?member_account=${new_mb_account}`);
                //^取得資料庫使否有這筆帳號，若有回傳1，沒有回傳0^
            const results = await response.json();
            if(results.total === 0){
                setAccounteMessage("帳號可使用");
                //^提示訊息顯示"帳號可使用"^
                document.querySelector('.CKNaccount').style.color="#e4d2a3"
                //修改網頁版提示訊息顏色為正常顏色
                document.querySelector('.CKNaccount_m').style.color="#4C3410"
                //修改手機版提示訊息顏色為正常顏色
            }else{
                setAccounteMessage("帳號已被註冊");
                //^提示訊息顯示"帳號已被註冊"^
            }
            }
      
        }

        const password_re =/^(?=.*[0-9\!@#\$%\^&amp;\*])(?=.*[a-zA-Z]).{8,20}$/; 
        //密碼格式驗證
        const  CheckNewPW=()=>{
            if(password_re.test(new_mb_password)){
                setPWMessage("密碼符合")
                //^提示訊息顯示"密碼符合"^
                
                document.querySelector('.CKNpassword').style.color="#e4d2a3"
                //修改網頁版提示訊息顏色為正常顏色
                document.querySelector('.CKNpassword_m').style.color="#4C3410"
                //修改手機版提示訊息顏色為正常顏色
            }else{
                setPWMessage("密碼需8~20英文數字組合")
                //^提示訊息顯示"密碼需8~20英文數字組合"^
            }

        } 

        const CRnewMember=async ()=>{
        //點擊註冊按鈕
            if(mailMessage == "信箱可使用" && accountMessage == "帳號可使用" && PWMessage == "密碼符合"){
            //判斷3個提示訊息是否都符合註冊條件
            const CRNM = await fetch(`${process.env.REACT_APP_API_URL}/account/CRNM?member_mail=${new_mb_mail}&member_account=${new_mb_account}&member_password=${new_mb_password}&member_point=${new_mb_point}&login_status=${new_login_status}`);
            //CRNM 為新增新的資料，沒有回傳值
            
            setmember_account(new_mb_account);
            setmember_password(new_mb_password);
            //將剛剛註冊的帳號密碼寫入登入的欄位

            setNew_mb_mail("");
            setNew_mb_account("");
            setNew_mb_password("");
            //清空註冊的3個欄位
            SweetSignY()
            // alert("註冊成功，請直接登入")
            setTimeout(() => {
                //滑過去登入頁面
                document.querySelector('.loginMain1').style.right='-491px';
                document.querySelector('.loginMain1').style.transition='0.5s';
                document.querySelector('.LG').style.display="block"
                document.querySelector('.LG-F').style.display="none"
    
                //手機板跳回登入頁
                document.querySelector('.loginCM').style.display="none"
                document.querySelector('.loginM').style.display="block"
                document.querySelector('.forget-m').style.display="none"
              }, 1600)

            }else{ 
            //以下將不符合資格的提示改為紅色
            SweetSignN()
            setTimeout(() => {
                if(mailMessage != "信箱可使用"){
                    document.querySelector('.CKNmail').style.color="red"
                    //將網頁版提示改為紅色
                    document.querySelector('.CKNmail_m').style.color="red"
                    //將手機版提示改為紅色
                    
                }if(accountMessage != "帳號可使用"){
                    document.querySelector('.CKNaccount').style.color="red"
                    //將網頁版提示改為紅色
                    document.querySelector('.CKNaccount_m').style.color="red"
                    //將手機版提示改為紅色
                    
                }if(PWMessage != "密碼符合"){
                    document.querySelector('.CKNpassword').style.color="red"
                    //將網頁版提示改為紅色
                    document.querySelector('.CKNpassword_m').style.color="red"
                    //將手機版提示改為紅色
                }
              }, 1500)
        }


        

        }  

        const loginBTN=async()=>{
            // 點擊登入
            const loginTF = await fetch(`${process.env.REACT_APP_API_URL}/account/LoginTF/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
            //判斷帳號密碼是否正確，如果正確回傳1
           
            
            const resultsTF = await loginTF.json();
            console.log(resultsTF);
            if(resultsTF.total===1){
                const loginS=await fetch(`${process.env.REACT_APP_API_URL}/account/Loginid/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
                const loginS2 = await loginS.json();
                if(loginS2.login_status==0){
    
                const loginid = await fetch(`${process.env.REACT_APP_API_URL}/account/Loginid/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
                const loginMid = await loginid.json();
                //取的登入的會員編號帳號信箱
                localStorage.setItem("true", loginMid.member_id);
                localStorage.setItem("account", loginMid.member_account);
                localStorage.setItem("mail", loginMid.member_mail);
                localStorage.setItem("point", loginMid.member_point);
                //將會員編號寫入localStorage的true，帳號信箱也分別寫入
                let member_id=loginMid.member_id;
                localStorage.setItem("dataCheck", "資料完整");
                //先將dataCheck，設定為資料完整
                const loginData = await fetch(`${process.env.REACT_APP_API_URL}/account/LoginData/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
                const results = await loginData.json();
                //判斷登入的會員是否有基本資料，有的話回傳1，沒有回傳0
                if(results.total===1){
                    const login = await fetch(`${process.env.REACT_APP_API_URL}/account/Login/?member_account=${member_account}&member_password=${member_password}`, {method: "POST"});
                    const results = await login.json();
                    //取得登入的會員 的基本資料
                    console.log(results);
                    localStorage.setItem("name", results.member_name);
                    localStorage.setItem("nick", results.member_nick);
                    localStorage.setItem("birth", results.member_birth);
                    localStorage.setItem("phone", results.member_phone);
                    localStorage.setItem("address", results.member_address);
                    localStorage.setItem("photo", results.member_photo);
                    //將會員基本資料分別寫入localStorage
                    // alert('成功登入');
                    const loginstatus = await fetch(`${process.env.REACT_APP_API_URL}/account/LoginstatusY?member_id=${member_id}`);
                    
                    
                    SweetloginY();
                    // setDataCheck(!dataCheck) 這不需要因為它本身useState是由 localStorage去驗證
                    setTimeout(() => {
                        window.location.replace("http://localhost:3000/member/profile");
                      }, 1500)
                    //轉向會員基本資料頁面
                
            }else{
                //如果沒有基本資料
                    localStorage.removeItem("dataCheck")
                    //清除localStorage內的dataCheck
                    SweetloginYN()
                    // alert('成功登入 但基本資料尚未完整');
                    //跳出訊息
                    setTimeout(() => {
                        window.location.replace("http://localhost:3000/member/NewData");
                      }, 1500)
                    //轉向填寫資料頁面
                    }
                }else{
                SweetloginSTN()
            }
            }else{
                SweetloginN()
                // alert('帳號密碼錯誤');
                // setAuth(!auth)
    
            }
        }


    
    

    const Login = ()=>{
        //^點擊上方LOGIN^

        document.querySelector('.loginMain1').style.right='-491px';
        //^將LOGIN畫面滑進來^
        document.querySelector('.loginMain1').style.transition='0.5s';
        //^動畫0.5秒^
        document.querySelector('.LG').style.display="block"
        //^顯示登入畫面^
        document.querySelector('.LG-F').style.display="none"
        //^隱藏忘記密碼畫面^

        document.querySelector('.loginM').style.display="block"
        //^"顯示"手機板忘記密碼畫面^
        document.querySelector('.loginCM').style.display="none"
        //^隱藏手機板註冊畫面^
        document.querySelector('.forget-m').style.display="none"
        //^隱藏手機板忘記密碼畫面^
      }

    const SingIn = ()=>{
        //^點擊上方SINGIN^

        document.querySelector('.loginMain1 ').style.right='0px';
        //^將LOGIN畫面滑出去^
        document.querySelector('.loginMain1 ').style.transition='0.5s';
        //^動畫0.5秒^

        document.querySelector('.loginM').style.display="none"
        //^隱藏手機板登入畫面^
        document.querySelector('.loginCM').style.display="block"
        //^"顯示"手機板註冊畫面^
        document.querySelector('.forget-m').style.display="none"
        //^隱藏手機板忘記密碼畫面^
      }

      const fg = ()=>{
      //^LOGIN頁面 點擊忘記密碼^

        document.querySelector('.LG').style.display="none"
        //^顯示忘記密碼畫面^
        document.querySelector('.LG-F').style.display="block"
        //^隱藏登入畫面^

        document.querySelector('.loginM').style.display="none"
        //^隱藏手機板登入畫面^
        document.querySelector('.loginCM').style.display="none"
        //^隱藏手機板註冊畫面^
        document.querySelector('.forget-m').style.display="block"
        //^"顯示"手機板忘記密碼畫面^
      }

      const fgb = ()=>{
      //^忘記密碼頁面 點擊返回^
        
        document.querySelector('.LG').style.display="block" 
        //^顯示登入畫面^
        document.querySelector('.LG-F').style.display="none"
        //^隱藏忘記密碼畫面^

        document.querySelector('.loginM').style.display="block"
        //^"顯示"手機板登入畫面^
        document.querySelector('.loginCM').style.display="none"
        //^隱藏手機板註冊畫面^
        document.querySelector('.forget-m').style.display="none"
        //^隱藏手機板忘記密碼畫面^
      }
  
  
  
      const rwdNew = () =>{
        //手機板點擊 註冊帳號

        document.querySelector('.loginM').style.display="none"
        //^隱藏手機板登入畫面^
        document.querySelector('.loginCM').style.display="block"
        //^"顯示"手機板註冊畫面^
        document.querySelector('.forget-m').style.display="none"
        //^隱藏手機板忘記密碼畫面^

        document.querySelector('.loginMain1 ').style.right='0px';
        //^將LOGIN畫面滑出去^
        document.querySelector('.loginMain1 ').style.transition='0.5s';
        //^動畫0.5秒^

        
      }

      const rwdL=()=>{
        //點擊手機板已有帳號
        

        document.querySelector('.loginM').style.display="block"
        //^"顯示"手機板忘記密碼畫面^
        document.querySelector('.loginCM').style.display="none"
        //^隱藏手機板註冊畫面^
        document.querySelector('.forget-m').style.display="none"
        //^隱藏手機板忘記密碼畫面^

        document.querySelector('.loginMain1').style.right='-491px';
        //^將LOGIN畫面滑進來^
        document.querySelector('.loginMain1').style.transition='0.5s';
        //^動畫0.5秒^
        document.querySelector('.LG').style.display="block"
        //^顯示登入畫面^
        document.querySelector('.LG-F').style.display="none"
        //^隱藏忘記密碼畫面^
       
            }
    
        
      

      const fgM=()=>{

        document.querySelector('.loginM').style.display="none"
        //^隱藏手機板登入畫面^
        document.querySelector('.loginCM').style.display="none"
        //^隱藏手機板註冊畫面^
        document.querySelector('.forget-m').style.display="block"
        //^"顯示"手機板忘記密碼畫面^

        document.querySelector('.LG').style.display="none"
        //^顯示忘記密碼畫面^
        document.querySelector('.LG-F').style.display="block"
        //^隱藏登入畫面^

    }

    const fgMb=()=>{

        document.querySelector('.loginM').style.display="block"
        //^"顯示"手機板登入畫面^
        document.querySelector('.loginCM').style.display="none"
        //^隱藏手機板註冊畫面^
        document.querySelector('.forget-m').style.display="none"
        //^隱藏手機板忘記密碼畫面^

        document.querySelector('.LG').style.display="block" 
        //^顯示登入畫面^
        document.querySelector('.LG-F').style.display="none"
        //^隱藏忘記密碼畫面^
      }


  
    //   
    return(
      
        <>
        {/* {auth ?<Memberprofile/> :
        <div> */}
        <div className="mmMain ">
                <div className="row loginmMain">
                    <div className="col ">
                        <div className="memberLoginMain">
                            <div className="row">
                                <div className="col loginLift">
                                    <img className="memberLG1" src={require('./img/member_logoin_1.png')} alt=""></img>
                                    <img className="memberLG2" src={require('./img/member_logoin_2.png')} alt=""></img>
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
            <div className="mMain-m">
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