import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from "./memberAside";
import MemberBack from './memberBack';
import './memberPassword.css'
function MemberPassword(){
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
                            <div >Jack123</div>
                        </div>
                    </div>
                </div>
                <div className="col proR">
                    <div className="proMain">
                        <div className="proList_m">
                            <div className="memberPhoto"><img src={require('./img/memberphoto.jpg')} alt="會員照片"></img></div>
                            
                            <div className="memberNumber">
                                <div >Jack123</div>
                            </div>
                        </div>
                        <div>
                            <div className="col-3None">
                              <div className="proRight">舊密碼:&emsp;&emsp;&emsp;&emsp;<input type="password"></input></div>
                              <div className="proRight">新密碼:&emsp;&emsp;&emsp;&emsp;<input type="password"></input></div>
                              <div className="proRight">確認新密碼:&emsp;&emsp;<input type="password"></input></div>
                            </div>

                              <div className="col-wn">
                                    <div className="proRight">
                                      <div>舊密碼:</div>
                                      <input type="password"></input>
                                      <br></br>
                                    </div>
                                    
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
                               </div>


                          
                      </div>
                        <br></br>
                    </div>
                    <Link to="/member/Profile">
                    <button className="memberEdit memberEdit-w">修改密碼</button>
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
export default MemberPassword
