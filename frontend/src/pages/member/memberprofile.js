import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from "./memberAside";
import './memberprofile.css';
function Memberprofile(){
    return(
        <>
        <div className="container">
        <div className="row">
           <MemberAside/>
      
            <main className="pMain row col">
            <div className="col-4 col-3None">
                    <div className="proList">
                        <div className="memberPhoto"><img   src={require('./img/memberphoto.jpg')} alt="會員照片"></img></div>
                        <div className="memberNumber">
                            <div >會員帳號</div>
                            <div >Jack123</div> 
                        </div>
                    </div>
                </div>
                <div className="col proR">
                    <div className="proMain">
                        <div className="proList_m">
                            <div className="memberPhoto"><img   src={require('./img/memberphoto.jpg')} alt="會員照片"></img></div>
                            <div className="memberNumber">
                                <div >Jack123</div>
                            </div>
                        </div>
                        <div className="proRight">姓名:&emsp; &emsp;&emsp;&emsp;xxxxxx</div>
                        <div className="proRight">暱稱:&emsp; &emsp;&emsp;&emsp;xxxxxx</div>
                        <div className="proRight">生日:&emsp; &emsp;&emsp;&emsp;xxxxxx</div>
                        <div className="proRight">手機號碼:&emsp;&emsp; xxxxxx</div>
                        <div className="proRight">電子信箱:&emsp;&emsp; xxxxxx</div>
                        <div className="proRight">地址:&emsp;&emsp;&emsp;&emsp; xxxxxx </div>
                        <br></br>
                    </div>
                    <Link to={'/member/profileEdit'}>
                    <button className="memberEdit memberEdit-w">編輯資料</button>
                    </Link>
                    <Link to={'/member/profileEdit'}>
                    <button className="memberEdit memberEdit-m">編輯</button>
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

export default Memberprofile;