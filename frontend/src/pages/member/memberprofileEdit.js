import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState,useEffect } from 'react';

import MemberAside from './memberAside';
import MemberBack from './memberBack';
import './memberprofileEdit.css';

function MemberprofileEdit(props){
  const [datas,setDatas] = useState([])
  const thismemberid=localStorage.getItem(true);
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
    var{member_account,member_name,member_nick,member_birth,member_phone,member_address}=profile;
    const nameChang=(e)=>{}
    const nickChang=(e)=>{}
    const birthChang=(e)=>{}
    const phoneChang=(e)=>{}
    const addressChang=(e)=>{}
    const EditBTN=async()=>{
    //   console.log(member_name);
    //   const response = await fetch(`${process.env.REACT_APP_API_URL}/UPdata?member_id=${thismemberid}&member_neme=${member_name}&member_nick=${member_nick}&member_birth=${member_birth}&member_phone=${member_phone}&member_address=${member_address}`)
      const response = await fetch(`${process.env.REACT_APP_API_URL}/aaa?member_name=${member_name}`)
      const results=await response.json();
      setDatas(results);
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
                        <div className="memberPhotoE">
                            <img  src={require('./img/memberphoto.jpg')}  alt="會員照片"></img>
                            <div className="changePhoto">修改照片</div>
                        </div>
                        <div className="memberNumber">
                            <div >會員帳號</div>
                            <div >{member_account}</div>
                        </div>
                    </div>
                </div>
                <div className="col proR">
                    <div className="proMain">
                    <form>
                        <div className="proList_m">
                            <div className="memberPhoto">
                                <img  src="../img/member/memberphoto.jpg" alt="會員照片"></img>
                                <div className="changePhoto">修改照片</div>
                            </div>
                            <div className="memberNumber">
                                <div>{member_account}</div>
                            </div>
                        </div>
                        <div className="col-3None">
                            <div className="proRight">姓名:&emsp; &emsp;&emsp;&emsp;<input type="text" value={member_name} onChange={nameChang}></input></div>
                            <div className="proRight">暱稱:&emsp; &emsp;&emsp;&emsp;<input type="text" value={member_nick} onChange={nickChang}></input></div>
                            <div className="proRight">生日:&emsp; &emsp;&emsp;&emsp;<input type="DATE" value={member_birth.slice(0,10)} onChange={birthChang}></input></div>
                            <div className="proRight">手機號碼:&emsp;&emsp; <input type="text" value={member_phone} maxlength="10" pattern="09\d{8}" onChange={phoneChang}></input></div>
                            <div className="proRight">地址:&emsp;&emsp;&emsp;&emsp; <input type="text" value={member_address} onChange={addressChang}></input> </div>
                        </div>
                      
                        <button type='button' onClick={EditBTN} className="memberEdit memberEdit-w">儲存修改</button>
                        </form>
                        <form>
                        <div className="col-wn">
                          <div className="proRight">
                            <div>姓名:</div>
                            <input type="text"></input>
                            <br></br>
                          </div>
                          <div className="proRight">
                            <div>暱稱:</div>
                            <input type="text"></input>
                            <br></br>
                          </div>
                          <div className="proRight">
                            <div>生日:</div>
                            <input type="date"></input>
                            <br></br>
                          </div>
                          <div className="proRight">
                            <div>手機號碼:</div>
                            <input type="text"></input>
                            <br></br>
                          </div>
                          <div className="proRight">
                            <div>地址:</div>
                            <input type="text"></input>
                            <br></br>
                          </div>
                        </div>
                        <br></br>
                    <button className="memberEdit memberEdit-m">修改</button>
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
}
export default MemberprofileEdit;