import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import logo from './img/logo.svg';
import './Navbar.scss'

// icons
import { IoCloseOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Button } from 'bootstrap';

function Navbar (props){
  const{auth}=props;

  const loginOUT=()=>{
    localStorage.clear();
    alert("您已登出")
    window.location.assign("http://localhost:3000/");

  }
  
  // const thismemberid=localStorage.getItem(true);
  // console.log("這是bar");
  // console.log(thismemberid);
  // console.log("這是bar");

  // 手機板 navbar js
  const openSideNavClick = ()=>{
    document.querySelector('.navFirst').style.left = '0px';
    document.querySelector('.sideDark').style.display = 'block';
  }
  const closeSideNavClick = ()=>{
    document.querySelector('.navFirst').style.left = '-260px';
    document.querySelector('.sideDark').style.display = 'none';
    document.querySelector('.memberDetail').style.height = '0px';
  }
  const openMemberDetailClick = ()=>{
    if(document.querySelector('.memberDetail').style.height === '0px'){
      document.querySelector('.memberDetail').style.height = '200px';
    }
    else if(document.querySelector('.memberDetail').style.height === '200px'){
      document.querySelector('.memberDetail').style.height = '0px';
    }
  }

  return(
    <>
    {auth?   <header className="App-header">
        <nav className="coffeeNavbar">
          <div className="sideDark" onClick={closeSideNavClick}></div>
          <div className="navFirst" style={{ left: '-260px' }}>
            <li className="closeSideNav webNone" onClick={closeSideNavClick}>
              <IoCloseOutline size={30}/>
            </li>
            <li className="webNone">
              <Link to="/member/Profile">
                <IoPersonOutline size={20} color={'#4C3410'}/>
              </Link>
              <a className="" href="#">
                <p className="openMemberDetail" onClick={openMemberDetailClick}>MEMBER</p>
              </a>
              <a className="ms-3" href="#" onClick={loginOUT}>
                <IoExitOutline size={20} color={'#4C3410'}/>
              </a>
            </li>
            <div className="memberDetail" style={{height: '0px'}}>
              {/* <li><Link to="/member/OrderList">個人資料</Link></li> */}
              <li><Link to="/member/OrderList">訂單查詢</Link></li>
              <li><Link to="/member/DrinkOList">點餐訂單</Link></li>
              <li><Link to="/member/QAList">問答中心</Link></li>
              <li><Link to="/member/Password">密碼修改</Link></li>
              <li><Link to="/member/Favorite">我的收藏</Link></li>
            </div>
            <li><a href="#" onClick={closeSideNavClick}>HOME<span>首頁</span></a></li>
            <li><a href="#" onClick={closeSideNavClick}>SHOP<span>網路商城</span></a></li>
            <li><a href="#" onClick={closeSideNavClick}>BLOG<span>部落格</span></a></li>
            <li><Link to="/store" onClick={closeSideNavClick}>STORE<span>門市地圖</span></Link></li>
            <li className="webNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
          </div>
          <div className="openSideNav" style={{cursor: 'pointer'}} onClick={openSideNavClick}>
            <IoMenuOutline size={30}/>
          </div>
          <div>
            <li className="logo"><Link to="/"><img src={logo} alt="logo"></img></Link></li>
          </div>
          <div>
            <li className="mobileNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
            <li><a><IoCartOutline size={30}/></a></li>

            <li className="mobileNone position-relative">
              <Link to="/member"><IoPersonOutline size={30}/></Link>
              <p className="webUserInfo">
                <span><Link to="/member">會員專區</Link></span>
                <span><Link to="OrderList">訂單查詢</Link></span>
                <span><Link to="/member/QAList">問答中心</Link></span>
                <span><a onClick={loginOUT}>登出</a></span>
              </p>
            </li>
          </div>
        </nav>
      </header>
      /* 以上是已登入狀態 */
      :
      /* 以下是未登入狀態 */
      <header className="App-header">
        <nav className="coffeeNavbar">
          <div className="sideDark" onClick={closeSideNavClick}></div>
          <div className="navFirst" style={{ left: '-260px' }}>
            <li className="closeSideNav webNone" onClick={closeSideNavClick}>
              <IoCloseOutline size={30}/>
            </li>
            <li className="webNone">
              <Link to="/member">
                <IoPersonOutline size={20} color={'#4C3410'}/>
              </Link>
              <Link to="/member">
                <p className="openMemberDetail" onClick={openMemberDetailClick}>MEMBER</p>
                </Link>
              {/* <a className="ms-3" href="#">
                <IoExitOutline size={20} color={'#4C3410'}/>
              </a> */}
            </li>
            {/* <div className="memberDetail" style={{height: '0px'}}>
              <li><Link to="/member/OrderList">訂單查詢</Link></li>
              <li><Link to="/member/DrinkOList">點餐訂單</Link></li>
              <li><Link to="/member/QAList">問答中心</Link></li>
              <li><Link to="/member/Password">密碼修改</Link></li>
              <li><Link to="/member/Favorite">我的收藏</Link></li>
            </div> */}
            <li><a href="#" onClick={closeSideNavClick}>HOME<span>首頁</span></a></li>
            <li><a href="#" onClick={closeSideNavClick}>SHOP<span>網路商城</span></a></li>
            <li><a href="#" onClick={closeSideNavClick}>BLOG<span>部落格</span></a></li>
            <li><Link to="/store" onClick={closeSideNavClick}>STORE<span>門市地圖</span></Link></li>
            <li className="webNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
          </div>
          <div className="openSideNav" style={{cursor: 'pointer'}} onClick={openSideNavClick}>
            <IoMenuOutline size={30}/>
          </div>
          <div>
            <li className="logo"><Link to="/"><img src={logo} alt="logo"></img></Link></li>
          </div>
          <div>
            <li className="mobileNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
            <li><a><IoCartOutline size={30}/></a></li>

            <li className="mobileNone position-relative">
              <Link to="/member"><IoPersonOutline size={30}/></Link>
            
            </li>
          </div>
        </nav>
      </header>}
    
      </>
  )
}

export default Navbar