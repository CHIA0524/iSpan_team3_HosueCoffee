import { BrowserRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import React from 'react';
import logo from './img/logo.svg';
import './Navbar.scss';

// icons
import { IoCloseOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";


function Navbar (props){
  const {auth}=props
  const { bannerHeight } = props
  const [ pageYOffset, setPageYOffset ] = useState()
  const loginOUT=()=>{
    // localStorage.clear();
    localStorage.removeItem("dataCheck")
    localStorage.removeItem("point")
    localStorage.removeItem("mail")
    localStorage.removeItem("account")
    localStorage.removeItem("nick")
    localStorage.removeItem("address")
    localStorage.removeItem("name")
    localStorage.removeItem("photo")
    localStorage.removeItem("birth")
    localStorage.removeItem("phone")
    localStorage.removeItem("true")
    alert("您已登出")
    window.location.assign("http://localhost:3000/");

  }

  let getURL = useLocation();

  // 監測視窗Y軸偏移量
  useEffect(()=>{ 
    window.addEventListener('scroll',()=>{
      setPageYOffset(window.pageYOffset)
    })
  },[]);

  // 畫面滾動時 Navbar 行為
  useEffect(()=>{
    if (getURL.pathname === '/') {
      document.querySelector('.coffeeNavbar').style.position = 'absolute'
      document.querySelector('.coffeeNavbar').style.top = '-125px'
        if (pageYOffset >= bannerHeight) {
          document.querySelector('.coffeeNavbar').style.position = 'fixed'
          document.querySelector('.coffeeNavbar').style.top = '0px'
        }else{
          document.querySelector('.coffeeNavbar').style.top = '-125px'
        }
      
    }else{
      document.querySelector('.coffeeNavbar').style.position = 'relative'
      document.querySelector('.coffeeNavbar').style.top = '0px'
    }
  },[bannerHeight, getURL.pathname, pageYOffset]);


  // 手機板 navbar js
  const openSideNavClick = () => {
    document.querySelector('.navFirst').style.left = '0px';
    document.querySelector('.navFirst').style.transition = 'all .3s ease-in-out';
    document.querySelector('.sideDark').style.display = 'block';
  }
  const closeSideNavClick = () => {
    document.querySelector('.navFirst').style.left = '-260px';
    document.querySelector('.sideDark').style.display = 'none';
    document.querySelector('.memberDetail').style.height = '0px';
    window.scrollTo(0, 0);
  }

  const openMemberDetailClick = () => {
    if (document.querySelector('.memberDetail').style.height === '0px') {
      document.querySelector('.memberDetail').style.height = '200px';
    }
    else if (document.querySelector('.memberDetail').style.height === '200px') {
      document.querySelector('.memberDetail').style.height = '0px';
    }
  }

  // 監測視窗寬度
  useEffect(()=>{ 
    window.addEventListener('resize',()=>{
      // console.log(window.innerWidth);
      if (window.innerWidth >= 1000) {
        document.querySelector('.navFirst').style.transition = '';
        document.querySelector('.sideDark').style.display = 'none';
      }
    });
  },[]);

  

  return (
    <header className="App-header">
      <nav className="coffeeNavbar fixed_nav" id="coffeeNavbar" style={{position: '', top: ''}}>
        <div className="sideDark" onClick={closeSideNavClick}></div>
        <div className="navFirst" style={{ left: '-260px' }}>
          <li className="closeSideNav webNone" onClick={closeSideNavClick}>
            <IoCloseOutline size={30} />
          </li>
          <li className="webNone">
            <a className="" href="#">
              <IoPersonOutline size={20} color={'#4C3410'} />
            </a>

              <p className="openMemberDetail" onClick={openMemberDetailClick}>MEMBER</p>
              {auth?<><a className="ms-3" onClick={loginOUT} href="#" >
              <IoExitOutline size={20} color={'#4C3410'}/>
            </a></>:
            <></>}
            
          </li>
          {auth?
          <>
          <div className="memberDetail" style={{height: '0px'}}>

            <li><Link to="/member/OrderList" onClick={closeSideNavClick}>訂單查詢</Link></li>
            <li><Link to="/member/Point" onClick={closeSideNavClick}>優惠中心</Link></li>
            <li><Link to="/member/QAList" onClick={closeSideNavClick}>問答中心</Link></li>
            <li><Link to="member/profileEdit" onClick={closeSideNavClick}>資料維護</Link></li>
            <li><Link to="/member/Password" onClick={closeSideNavClick}>密碼修改</Link></li>
          </div>

          <li><a href="#/" onClick={closeSideNavClick}>HOME<span>首頁</span></a></li>
          <li><Link to="/shop" onClick={closeSideNavClick}>SHOP<span>網路商城</span></Link></li>
          <li><a href="#" onClick={closeSideNavClick}>BLOG<span>部落格</span></a></li>
          <li><Link to="/store" onClick={closeSideNavClick}>STORE<span>門市地圖</span></Link></li>

          <li className="webNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
          {/* 以上為已登入狀態 */}
          </> 
          :
          <>
          {/* 以下為登出狀態 */}
          <div className="memberDetail" style={{height: '0px',display:"none"}} >
            <li><a href="" onClick={closeSideNavClick}>訂單查詢</a></li>
            <li><a href="" onClick={closeSideNavClick}>優惠中心</a></li>
            <li><a href="" onClick={closeSideNavClick}>問答中心</a></li>
            <li><a href="" onClick={closeSideNavClick}>資料維護</a></li>
            <li><a href="" onClick={closeSideNavClick}>密碼修改</a></li>
          </div>
          <li><a href="#/" onClick={closeSideNavClick}>HOME<span>首頁</span></a></li>
          <li><Link to="/shop" onClick={closeSideNavClick}>SHOP<span>網路商城</span></Link></li>
          <li><a href="#" onClick={closeSideNavClick}>BLOG<span>部落格</span></a></li>
          <li><Link to="/store" onClick={closeSideNavClick}>STORE<span>門市地圖</span></Link></li>
          <li className="webNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
          </>}
          
          
        </div>

        <div className="openSideNav" style={{ cursor: 'pointer' }} onClick={openSideNavClick}>
          <IoMenuOutline size={30} />

        </div>
        <div>
          <li className="logo"><Link to="/"><img src={logo} alt="logo"></img></Link></li>
        </div>
        <div>
          <li className="mobileNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>

          <li><Link to="/shoppingcart"><IoCartOutline size={30} style={{ color: '#DDB44A' }}/></Link></li>

          <li className="mobileNone position-relative">
          {auth? 
            <Link to="/member/Profile"><IoPersonOutline size={30} style={{ color: '#DDB44A' }}/></Link>
            :
            <Link to="/member"><IoPersonOutline size={30} style={{ color: '#DDB44A' }}/></Link>

          }
            {auth? <><p className="webUserInfo">
              <span><Link to="/member/Profile">會員專區</Link></span>
              <span><Link to="/member/OrderList">訂單查詢</Link></span>
              <span><Link to="/member/QAList">問答中心</Link></span>
              <span><a onClick={loginOUT}>登出</a></span>
            </p></>
            :
            <></>}
            

         
          </li>
        </div>
      </nav>
    </header>
  )
}

export default Navbar