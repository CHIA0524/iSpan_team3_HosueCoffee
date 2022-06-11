import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import MemberAside from './memberAside';
import MemberBack from './memberBack';
import './memberprofileEdit.css';

function MemberprofileEdit(props){
  const{auth}=props;
    const {dataCheck}=props;
    console.log("---------")
    console.log(dataCheck)
    console.log(!dataCheck)
    console.log("---------")
    if(!auth){
      window.location.replace("http://localhost:3000/member")
    }if(!dataCheck){
      window.location.replace("http://localhost:3000/member/NewData");
    }
  const thismemberid=localStorage.getItem("true");
  const account=localStorage.getItem("account");

  const [UPname,setUPname]=useState(localStorage.getItem("name"))
  const [UPnick,setUPnick]=useState(localStorage.getItem("nick"))
  const [UPbirth,setUPbirth]=useState(localStorage.getItem("birth"))
  const [UPphone,setUPphone]=useState(localStorage.getItem("phone"))
  const [UPaddress,setUPaddress]=useState(localStorage.getItem("address"))
  const [UPPPP,setUPPP]=useState()

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
  // const UPP=async()=>{
  //   console.log("123")
  //   const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/upphoto`);
  // }

    const phone_re = /^09[0-9]{8}$/;
    const EditBTN=async()=>{
      if(! phone_re.test(UPphone)){
        alert("手機格式錯誤");
      }else{
        if(UPname.length>0 && UPphone.length==10){
          const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/UPdate?fk_member_id=${thismemberid}&member_name=${UPname}&member_nick=${UPnick}&member_birth=${UPbirth}&member_phone=${UPphone}&member_address=${UPaddress}`);
          
          localStorage.removeItem("name")
          localStorage.removeItem("nick")
          localStorage.removeItem("birth")
          localStorage.removeItem("phone")
          localStorage.removeItem("address")

          localStorage.setItem("name", UPname);
          localStorage.setItem("nick", UPnick);
          localStorage.setItem("birth", UPbirth);
          localStorage.setItem("phone", UPphone);
          localStorage.setItem("address", UPaddress);
          alert("資料修改成功")
          window.location.replace("http://localhost:3000/member/profile");
        }else{
          alert("姓名為空");

        }
  }
}

  // 大頭照狀態
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')

  // 大頭照 input 變更事件
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }

    // 尚未上傳 預覽用
    const output = document.getElementById('avatar')
    output.src = URL.createObjectURL(e.target.files[0])
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
    setImage(img)
  }

  // 上傳大頭照
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    console.log(formData);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/upphoto`, {
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)
  }
  
  

    return(
        <>
    
    <MemberBack/>
    <div className="container">
      <div className="row">
      <MemberAside/>
        <main className="mMain row col">
                
                <div className="col-4 col-3None">
                    <div className="proList">
                        <div className="memberPhotoE">
                            <img id='avatar' src={`${process.env.REACT_APP_API_URL}/uploads/1654565261675.jpg`}  alt="會員照片"></img>
                            <label htmlFor='upPhoto' className="changePhoto" >修改照片</label>
                        </div>
                        <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center'}}>
                          <input type="text" name="fk_member_id" value={thismemberid}></input>
                          <input
                            type="file"
                            id='upPhoto'
                            name='photo' // 上傳照片的 input name 要跟後端的 upload.single("photo") 中的 ("photo") 一樣
                            accept="image/*"
                            onChange={handleFileChange}
                          ></input>
                          <button className='coffeeLightBtn' type='submit' id='photoSubmit'>上傳</button>
                        </form>
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
                                <label htmlFor='upPhoto' className="changePhoto">修改照片</label>
                            </div>
                        {/* <input type="file" id='upPhoto' name='upPhoto' accept="image/*" onChange={UPP}></input> */}

                            <div className="memberNumber">
                                <div>{account}</div>
                            </div>
                        </div>
                        <div className="col-3None">
                            <div className="proRight">姓名:&emsp; &emsp;&emsp;&emsp;<input type="text" value={UPname}  onChange={ChangeName}></input></div>
                            <div className="proRight">暱稱:&emsp; &emsp;&emsp;&emsp;<input type="text" value={UPnick} onChange={ChangeNick}></input></div>
                            <div className="proRight">生日:&emsp; &emsp;&emsp;&emsp;<input type="DATE" value={UPbirth} onChange={ChangeBirth} readOnly ></input></div>
                            <div className="proRight">手機號碼:&emsp;&emsp; <input type="text" value={UPphone} maxLength="10" pattern="09\d{8}" onChange={ChangePhone}></input></div>
                            <div className="proRight">地址:&emsp;&emsp;&emsp;&emsp; <input type="text" value={UPaddress} onChange={ChangeAddress}></input> </div>
                        </div>
                      
                        <button type='button' onClick={EditBTN} className="memberEdit memberEdit-w">儲存修改</button>
                        </form>
                        <form>
                        <div className="col-wn">
                          <div className="proRight">
                            <div>姓名:</div>
                            <input type="text"  value={UPname}  onChange={ChangeName}></input>
                            <br></br>
                          </div>
                          <div className="proRight">
                            <div>暱稱:</div>
                            <input type="text" value={UPnick} onChange={ChangeNick}></input>
                            <br></br>
                          </div>
                          <div className="proRight">
                            <div>生日:</div>
                            <input type="date"  value={UPbirth} onChange={ChangeBirth} readOnly ></input>
                            <br></br>
                          </div>
                          <div className="proRight">
                            <div>手機號碼:</div>
                            <input type="text" value={UPphone} maxLength="10" pattern="09\d{8}" onChange={ChangePhone}></input>
                            <br></br>
                          </div>
                          <div className="proRight">
                            <div>地址:</div>
                            <input type="text" value={UPaddress} onChange={ChangeAddress}></input>
                            <br></br>
                          </div>
                        </div>
                        <br></br>
                    <button className="memberEdit memberEdit-m" onClick={EditBTN}>修改</button>
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
export default MemberprofileEdit;