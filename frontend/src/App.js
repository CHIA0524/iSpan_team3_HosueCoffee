import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';


// icons
import { IoCloseOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { BiCopyright } from "react-icons/bi";

// pages
import Home from './pages/home/Home';
import StoreIndex from './pages/store/StoreIndex';
import StoreMap from './pages/store/StoreMap';

import ShopIndex from './pages/shop/ShopIndex';
import ProductDetail from './pages/shop/ProductDetail'; 

import Pay1 from './pages/shoppingCart/Pay1';
import Pay2 from './pages/shoppingCart/Pay2';
import Pay3 from './pages/shoppingCart/Pay3';



function App() {
  
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

  return (
    
    <Router>
      <header className="App-header">
        <nav className="coffeeNavbar">
          <div className="sideDark" onClick={closeSideNavClick}></div>
          <div className="navFirst" style={{ left: '-260px' }}>
            <li className="closeSideNav webNone" onClick={closeSideNavClick}>
              <IoCloseOutline size={30}/>
            </li>
            <li className="webNone">
              <a className="" href="#">
                <IoPersonOutline size={20} color={'#4C3410'}/>
              </a>
                <p className="openMemberDetail" onClick={openMemberDetailClick}>MEMBER</p>
              <a className="ms-3" href="#">
                <IoExitOutline size={20} color={'#4C3410'}/>
              </a>
            </li>
            <div className="memberDetail" style={{height: '0px'}}>
              <li><a href="" onClick={closeSideNavClick}>訂單查詢</a></li>
              <li><a href="" onClick={closeSideNavClick}>點餐訂單</a></li>
              <li><a href="" onClick={closeSideNavClick}>問答中心</a></li>
              <li><a href="" onClick={closeSideNavClick}>資料維護</a></li>
              <li><a href="" onClick={closeSideNavClick}>密碼修改</a></li>
            </div>
            <li><a href="#" onClick={closeSideNavClick}>HOME<span>首頁</span></a></li>

            {/* 連結修改 */}
            <li><Link to="/shop" onClick={closeSideNavClick}>SHOP<span>網路商城</span></Link></li>
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
          
            {/* 連結修改 */}
            <li><Link to="/shoppingCart" onClick={closeSideNavClick}><IoCartOutline size={30}/></Link></li>

            <li className="mobileNone position-relative">
              <a href=""><IoPersonOutline size={30}/></a>
              <p className="webUserInfo">
                <span><a href="">會員專區</a></span>
                <span><a href="">訂單查詢</a></span>
                <span><a href="">問答中心</a></span>
                <span><a href="">登出</a></span>
              </p>
            </li>
          </div>
        </nav>
      </header>

      {/* Switch 只有此範圍會換畫面 navbar footer 會保留 */}
      {/* 記得載入頁面組件喔 */}
      {/* 路徑長的往上放喔 */}
      <Switch>
      <Route path="/shoppingCart/pay3">
          <Pay3 />
        </Route>
        <Route path="/shoppingCart/pay2">
          <Pay2 />
        </Route>
       <Route path="/shoppingCart">
          <Pay1 />
        </Route>
       <Route path="/shop/ProductDetail/:id">
          <ProductDetail />
        </Route>
        <Route path="/shop">
          <ShopIndex />
        </Route>
        <Route path="/store/map">
          <StoreMap />
        </Route>
        <Route path="/store">
          <StoreIndex />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

      <footer className="d-flex coffeeFooter">
        <div className="d-flex">
          <div className="mx-5">
            PRODUCT
            <li><a href="">coffee</a></li>
            <li><a href="">cups</a></li>
            <li><a href="">other</a></li>
          </div>
          <div className="mx-5">
            ABOUT US
            <li><a href="">news</a></li>
            <li><a href="">store</a></li>
            <li><a href="">FAQs</a></li>
          </div>
        </div>
        <div className="mx-5">
          <div className="d-flex">
            <IoMailOutline size={20}/>
            <p>team3@house.coffee.com</p>
          </div>
          <div className="d-flex">
            <IoCallOutline size={20}/>
            <p>(07)333-3333</p>
          </div>
          <div className="d-flex">
            <BiCopyright size={20}/>
            <p>2022 . HOUSE COFFEE</p>
          </div>
        </div>
      </footer>
    </Router>

  );
}

export default App;
