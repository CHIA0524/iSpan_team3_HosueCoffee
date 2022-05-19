import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from "./memberAside";
import MemberPassword from './memberPassword';
import './memberprofile.css';
function Memberprofile(){
    return(
        <>
        <div className="mMember">
        <p>&lt;&ensp;會員中心</p>
        </div>
        <div className="container">
        <div className="row">
           <MemberAside/>
           <Switch>
                <Route path={"/Password"}>
                    <MemberPassword />
                </Route>
            </Switch>
            <main className="pMain row col">
            <div class="col-4 col-3None">
                    <div class="proList">
                        <div class="memberPhoto"><img   src={require('./img/memberphoto.jpg')} alt="會員照片"></img></div>
                        <div class="memberNumber">
                            <div >會員帳號</div>
                            <div >Jack123</div>
                        </div>
                    </div>
                </div>
                <div class="col proR">
                    <div class="proMain">
                        <div class="proList_m">
                            <div class="memberPhoto"><img   src={require('./img/memberphoto.jpg')} alt="會員照片"></img></div>
                            <div class="memberNumber">
                                <div >Jack123</div>
                            </div>
                        </div>
                        <div class="proRight">姓名:&emsp; &emsp;&emsp;&emsp;xxxxxx</div>
                        <div class="proRight">暱稱:&emsp; &emsp;&emsp;&emsp;xxxxxx</div>
                        <div class="proRight">生日:&emsp; &emsp;&emsp;&emsp;xxxxxx</div>
                        <div class="proRight">手機號碼:&emsp;&emsp; xxxxxx</div>
                        <div class="proRight">電子信箱:&emsp;&emsp; xxxxxx</div>
                        <div class="proRight">地址:&emsp;&emsp;&emsp;&emsp; xxxxxx </div>
                        <br></br>
                    </div>
                    
                    <button class="memberEdit memberEdit-w">編輯資料</button>
                    <button class="memberEdit memberEdit-m">編輯</button>
               
                </div>
                  
                
            </main> 
        </div>   
        </div>
        <br></br> 
        <br></br>
        </>
    )

}

export default Memberprofile;