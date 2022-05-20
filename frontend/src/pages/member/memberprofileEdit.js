import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import MemberBack from './memberBack';
import './memberprofileEdit.css';

function MemberprofileEdit(){
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
                            <img  src={require('./img/memberphoto.jpg')} alt="會員照片"></img>
                            <div className="changePhoto">修改照片</div>
                        </div>
                        <div className="memberNumber">
                            <div >會員帳號</div>
                            <div >Jack123</div>
                        </div>
                    </div>
                </div>
                <div className="col proR">
                    <div className="proMain">
                        <div className="proList_m">
                            <div className="memberPhoto">
                                <img  src="../img/member/memberphoto.jpg" alt="會員照片"></img>
                                <div className="changePhoto">修改照片</div>
                            </div>
                            <div className="memberNumber">
                                <div >Jack123</div>
                            </div>
                        </div>
                        <div className="col-3None">
                            <div className="proRight">姓名:&emsp; &emsp;&emsp;&emsp;<input type="text"></input></div>
                            <div className="proRight">暱稱:&emsp; &emsp;&emsp;&emsp;<input type="text"></input></div>
                            <div className="proRight">生日:&emsp; &emsp;&emsp;&emsp;<input type="text"></input></div>
                            <div className="proRight">手機號碼:&emsp;&emsp; <input type="text"></input></div>
                            <div className="proRight">電子信箱:&emsp;&emsp; <input type="text"></input></div>
                            <div className="proRight">地址:&emsp;&emsp;&emsp;&emsp; <input type="text"></input> </div>
                        </div>
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
                            <div>電子信箱:</div>
                            <input type="email"></input>
                            <br></br>
                          </div>
                          <div className="proRight">
                            <div>地址:</div>
                            <input type="text"></input>
                            <br></br>
                          </div>
                        </div>
                        <br></br>
                    </div>
                    <Link to="/member/Profile">
                    <button className="memberEdit memberEdit-w">儲存修改</button>
                    </Link>
                    
                    <Link to="/member/Profile">
                    <button className="memberEdit memberEdit-m">修改</button>
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
export default MemberprofileEdit;