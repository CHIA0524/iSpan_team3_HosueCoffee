import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState,useEffect } from 'react';

import MemberAside from './memberAside';
import MemberBack from './memberBack';
import './memberprofileEdit.css';
import { check } from 'prettier';

function MemberNewData(props){
  const{auth}=props;
    if(!auth){
      window.location.replace("http://localhost:3000/member")
    }
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd
  } 
  if(mm<10){
    mm='0'+mm
  } 

  today = yyyy+'-'+mm+'-'+dd;
 

  const thismemberid=localStorage.getItem("true");
  const account=localStorage.getItem("account");


  const [UPname,setUPname]=useState("")
  const [UPnick,setUPnick]=useState("")
  const [UPbirth,setUPbirth]=useState("")
  const [UPphone,setUPphone]=useState("")
  const [UPaddress,setUPaddress]=useState("")

  const [nameMessage,setNameMessage]=useState();
  const [nickMessage,setNickMessage]=useState();
  const [birthMessage,setBirthMessage]=useState();
  const [phoneMessage,setPhoneMessage]=useState();
  const [addressMessage,setAddressMessage]=useState();

  const ChangeName=(e)=>{
    setUPname(e.target.value);
  }
  const ChangeNick=(e)=>{
    setUPnick(e.target.value);
  }
  const ChangeBirth=(e)=>{
    setUPbirth(e.target.value);
  }
  const ChangePhone=(e)=>{
    setUPphone(e.target.value);
  }
  const ChangeAddress=(e)=>{
    setUPaddress(e.target.value);
  }
  const checkName=()=>{
    if(UPname){
      setNameMessage("感謝填寫姓名")
      document.querySelector('.NewName').style.color="#4C3410"
    }else{
      setNameMessage("姓名不可為空")
    }
    
  }
  const checkNick=()=>{
    if(UPnick){
      setNickMessage("感謝填寫暱稱")
      document.querySelector('.NewNick').style.color="#4C3410"

    }else{
      setNickMessage("暱稱可不填寫")
    }
    
  }
  const checkBirth=()=>{
    if(UPbirth<today){
      setBirthMessage("感謝填寫生日")
      document.querySelector('.NewBirth').style.color="#4C3410"

    }else{
      setBirthMessage("生日不可為空")
    }
    
  }
  

  const phone_re = /^09[0-9]{8}$/;
  const checkPhone=async()=>{
      if(!phone_re.test(UPphone)){
        setPhoneMessage("手機格式錯誤")
        }else{
          const response = await fetch(`${process.env.REACT_APP_API_URL}/account/checkPhone?member_phone=${UPphone}`);
          console.log(process.env.REACT_APP_API_URL);
          const results = await response.json();
          console.log(results)
          console.log(results.total)
            if(results.total===0){
              setPhoneMessage("感謝填寫手機號碼")
              document.querySelector('.NewPhone').style.color="#4C3410"

            }else{
              setPhoneMessage("手機號碼已被註冊")
            }
        }
      }
  

  const checkAddress=()=>{
    if(UPaddress){
      setAddressMessage("感謝填寫地址")
      document.querySelector('.NewAddress').style.color="#4C3410"

    }else{
      setAddressMessage("地址不可為空")
    }
    
  }
    const NewDataBTN=async()=>{
      if(nameMessage=="感謝填寫姓名" && birthMessage=="感謝填寫生日" && phoneMessage=="感謝填寫手機號碼"&& addressMessage=="感謝填寫地址"){
       
          const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/Newdate?fk_member_id=${thismemberid}&member_name=${UPname}&member_nick=${UPnick}&member_birth=${UPbirth}&member_phone=${UPphone}&member_address=${UPaddress}`);
        
          
       

          localStorage.setItem("name", UPname);
          localStorage.setItem("nick", UPnick);
          localStorage.setItem("birth", UPbirth);
          localStorage.setItem("phone", UPphone);
          localStorage.setItem("address", UPaddress);
          localStorage.setItem("dataCheck", "資料完整");
          alert("資料新增成功")
          window.location.replace("http://localhost:3000/member/profile");
        }if(nameMessage!="感謝填寫姓名"){
          document.querySelector(".NewName").style.color="red";

        }if(birthMessage!="感謝填寫生日"){
          document.querySelector(".NewBirth").style.color="red";

        }if(phoneMessage!="感謝填寫手機號碼"){
          document.querySelector(".NewPhone").style.color="red";

        }if(nameMessage!="感謝填寫地址"){
          document.querySelector(".NewAddress").style.color="red";

        }
  }

    return(
        <>
    
    <div className="container">
    <h2 className='NewDataH2'>請填寫基本資料</h2>
      <div className="row">
        <main className="pMain row col">
       
                
                <div className="col-6 col-3None">
                    <div className="proList">
                        <div className="memberPhotoE">
                            <img  src={require('./img/memberphoto.jpg')}  alt="會員照片"></img>
                            <div className="changePhoto">修改照片</div>
                        </div>
                        <div className="memberNumber">
                            <div >會員帳號</div>
                            <div >{account}</div>
                        </div>
                    </div>
                </div>
                <div className="col proR">
                    <div className="proMain">
                    <form>
                        <div className="proList_m">
                            <div className="memberPhoto">
                                <img  src={require('./img/memberphoto.jpg')} alt="會員照片"></img>
                                <div className="changePhoto">修改照片</div>
                            </div>
                            <div className="memberNumber">
                                <div>{account}</div>
                            </div>
                        </div>
                        <div className="col-3None">

                          <div className='ND_mangin'>
                              <div className="proRight_w">姓名:&emsp;&emsp;&emsp;&emsp;<input type="text" value={UPname}  onChange={ChangeName} onBlur={checkName}></input></div>
                              <div className='NewName'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{nameMessage || "姓名不可為空"}</div>
                          </div>

                          <div className='ND_mangin'>
                              <div className="proRight_w">暱稱:&emsp; &emsp;&emsp;&emsp;<input type="text" value={UPnick} onChange={ChangeNick} onBlur={checkNick}></input></div>
                              <div className='NewNick'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{nickMessage || "暱稱可不填寫"}</div>
                          </div>

                          <div className='ND_mangin'>
                              <div className="proRight_w">生日:&emsp; &emsp;&emsp;&emsp;<input type="DATE"  value={UPbirth} onChange={ChangeBirth} onBlur={checkBirth} min="1900-01-01" max={today}></input></div>
                              <div className='NewBirth'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{birthMessage || "生日不可為空"}</div>
                          </div>

                          <div className='ND_mangin'>
                              <div className="proRight_w">手機號碼:&emsp;&emsp; <input type="text" value={UPphone} maxlength="10" pattern="09\d{8}" onChange={ChangePhone} onBlur={checkPhone}></input></div>
                              <div className='NewPhone'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{phoneMessage || "手機號碼不可為空"}</div>
                          </div>

                          <div className='ND_mangin'>
                              <div className="proRight_w">地址:&emsp;&emsp;&emsp;&emsp; <input type="text" value={UPaddress} onChange={ChangeAddress} onBlur={checkAddress}></input> </div>
                              <div className='NewAddress'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{addressMessage || "地址不可為空"}</div>
                            </div>
                        </div>
                      
                        <button type='button' onClick={NewDataBTN} className="memberEdit memberEdit-w">儲存修改</button>
                        </form>
                        <form>
                          <div className="col-wn">
                            <div className="proRight">
                              <div>姓名:</div>
                              <input type="text"  value={UPname}  onChange={ChangeName} onBlur={checkName}></input>
                              <div className='NewName'>{nameMessage || "姓名不可為空"}</div>
                            </div>

                            <div className="proRight">
                              <div>暱稱:</div>
                              <input type="text" value={UPnick} onChange={ChangeNick} onBlur={checkNick}></input>
                              <div className='NewNick'>{nickMessage || "暱稱可不填寫"}</div>
                            </div>

                            <div className="proRight">
                              <div>生日:</div>
                              <input type="date"  value={UPbirth} onChange={ChangeBirth} onBlur={checkBirth} className='BDay' min='1899-01-01' max='2000-13-13'></input>
                              <div className='NewBirth'>{birthMessage || "生日不可為空"}</div>
                            </div>

                            <div className="proRight">
                              <div>手機號碼:</div>
                              <input type="text" value={UPphone} maxlength="10" pattern="09\d{8}" onChange={ChangePhone} onBlur={checkPhone}></input>
                              <div className='NewPhone'>{phoneMessage || "手機號碼不可為空"}</div>
                            </div>

                            <div className="proRight">
                              <div>地址:</div>
                              <input type="text" value={UPaddress} onChange={ChangeAddress} onBlur={checkAddress}></input>
                              <div className='NewRWD NewAddress'>{addressMessage || "地址可暫時不填"}</div>
                            </div>
                          </div>
                          <br></br>
                      <button  type='button' onClick={NewDataBTN} className="memberEdit memberEdit-m">修改</button>
                    </form>
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
export default MemberNewData;