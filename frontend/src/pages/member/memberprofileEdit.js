import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import './memberprofileEdit.css';

function MemberprofileEdit(){
    return(
        <>
    
    <div class="mMember">
        <p>&lt;&ensp;會員中心</p>
    </div>
    <div class="container">
      <div class="row">
      <MemberAside/>
        <main class="pMain row col">
       
                
                <div class="col-4 col-3None">
                    <div class="proList">
                        <div class="memberPhoto">
                            <img  src={require('./img/memberphoto.jpg')} alt="會員照片"></img>
                            <div class="changePhoto">修改照片</div>
                        </div>
                        <div class="memberNumber">
                            <div >會員帳號</div>
                            <div >Jack123</div>
                        </div>
                    </div>
                </div>
                <div class="col proR">
                    <div class="proMain">
                        <div class="proList_m">
                            <div class="memberPhoto">
                                <img  src="../img/member/memberphoto.jpg" alt="會員照片"></img>
                                <div class="changePhoto">修改照片</div>
                            </div>
                            <div class="memberNumber">
                                <div >Jack123</div>
                            </div>
                        </div>
                        <div class="col-3None">
                            <div class="proRight">姓名:&emsp; &emsp;&emsp;&emsp;<input type="text"></input></div>
                            <div class="proRight">暱稱:&emsp; &emsp;&emsp;&emsp;<input type="text"></input></div>
                            <div class="proRight">生日:&emsp; &emsp;&emsp;&emsp;<input type="text"></input></div>
                            <div class="proRight">手機號碼:&emsp;&emsp; <input type="text"></input></div>
                            <div class="proRight">電子信箱:&emsp;&emsp; <input type="text"></input></div>
                            <div class="proRight">地址:&emsp;&emsp;&emsp;&emsp; <input type="text"></input> </div>
                        </div>
                        <div class="col-wn">
                          <div class="proRight">
                            <div>姓名:</div>
                            <input type="text"></input>
                            <br></br>
                          </div>
                          <div class="proRight">
                            <div>暱稱:</div>
                            <input type="text"></input>
                            <br></br>
                          </div>
                          <div class="proRight">
                            <div>生日:</div>
                            <input type="date"></input>
                            <br></br>
                          </div>
                          <div class="proRight">
                            <div>手機號碼:</div>
                            <input type="text"></input>
                            <br></br>
                          </div>
                          <div class="proRight">
                            <div>電子信箱:</div>
                            <input type="email"></input>
                            <br></br>
                          </div>
                          <div class="proRight">
                            <div>地址:</div>
                            <input type="text"></input>
                            <br></br>
                          </div>
                        </div>
                        <br></br>
                    </div>
                    <Link to="/member/memberprofile">
                    <button class="memberEdit memberEdit-w">儲存修改</button>
                    </Link>
                    
                    <Link to="/member/memberprofile">
                    <button class="memberEdit memberEdit-m">修改</button>
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