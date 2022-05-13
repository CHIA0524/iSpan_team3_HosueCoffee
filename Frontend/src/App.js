import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

// icon
import { CloseOutline } from 'react-ionicons'
import { PersonOutline } from 'react-ionicons'
import { ExitOutline } from 'react-ionicons'
import { MenuOutline } from 'react-ionicons'
import { CartOutline } from 'react-ionicons'
import { CallOutline } from 'react-ionicons'
import { MailOutline } from 'react-ionicons'

// 導入頁面
import Home from './pages/home/Home'
import StoreIndex from './pages/store/StoreIndex'

function App() {
  return (
    <Router>
      <header className="App-header">
        <nav className="coffeeNavbar">
          <div className="sideDark"></div>
          <div className="navFirst" style={{ left: '-260px' }}>
            <li className="closeSideNav webNone">
              <CloseOutline />
            </li>
            <li className="webNone">
              <a className="" href="#">
                <PersonOutline />
                <p className="openMemberDetail">MEMBER</p>
              </a>
              <a className="ms-3" href="#">
                <ExitOutline />
              </a>
            </li>
            <div className="memberDetail" style={{display: 'none'}}>
              <li><a href="">訂單查詢</a></li>
              <li><a href="">點餐訂單</a></li>
              <li><a href="">問答中心</a></li>
              <li><a href="">資料維護</a></li>
              <li><a href="">密碼修改</a></li>
            </div>
            <li><a href="#">HOME<span>首頁</span></a></li>
            <li><a href="#">SHOP<span>網路商城</span></a></li>
            <li><a href="#">BLOG<span>部落格</span></a></li>
            <li><Link to="/store">STORE<span>門市地圖</span></Link></li>
            <li className="webNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
          </div>
          <div className="openSideNav">
            <MenuOutline />
          </div>
          <div>
            <li className="logo"><a href=""><img src={logo} alt="logo"></img></a></li>
          </div>
          <div>
            <li className="mobileNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
            <li><a href="#"><CartOutline /></a></li>

            <li className="mobileNone position-relative">
              <a href=""><PersonOutline /></a>
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
      <Switch>
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
            <MailOutline />
            <p>team3@house.coffee.com</p>
          </div>
          <div className="d-flex">
            <CallOutline />
            <p>(07)333-3333</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-copyright"></i>
            <p>2022 . HOUSE COFFEE</p>
          </div>
        </div>
      </footer>
    </Router>

  );
}

export default App;
