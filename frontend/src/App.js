import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { useState } from 'react';

// components
import Navbar from './component/Navbar';
import Footer from './component/Footer';
//回到頁面最上層套件
import ScrollToTop from './component/ScrollToTop';

// pages
import Home from './pages/home/Home';
import StoreMapCardWrap from './pages/store/StoreMapCardWrap'

// member pages
import MemberLogin from './pages/member/memberlogin';
import MemberNewData from './pages/member/memberNewData';
import MemberprofileEdit from './pages/member/memberprofileEdit';
import MemberPassword from './pages/member/memberPassword';
import Memberprofile from './pages/member/memberprofile';
import MemberOrderList from './pages/member/memberOrderList';
import MemberOrder from './pages/member/memberOrder';
import MemberFavorite from './pages/member/memberFavorite';
import MemberDrinkOList from './pages/member/memberDrinkOList';
import MemberDrinkO from './pages/member/memberDrinkO';
import MemberQAList from './pages/member/memberQAList';
import MemberQAcheck from './pages/member/memberQAcheck';

//shop pages
import ShopIndex from './pages/shop/ShopIndex';
import ProductDetail from './pages/shop/ProductDetail'; 
import Pay1 from './pages/shoppingCart/Pay1';
import Pay2 from './pages/shoppingCart/Pay2';
import Pay3 from './pages/shoppingCart/Pay3';
import RecCard from './pages/shop/component/RecCard';
import ShopKenya from './pages/shop/ShopKenya';








function App() {
  const [auth,setAuth]=useState(localStorage.getItem("true"));
  //判斷是否登入，若localhost storage內沒有"true"，就是沒有登入狀態，若有"true"，true的值會是會員ID
  //若有需要判斷會員是否有登入的頁面，在下方引入時記得加上 auth={auth}

  const [dataCheck,setDataCheck]=useState(localStorage.getItem("dataCheck"));
  // 登入後 若localhost storage內沒有"dataCheck"代表此會員編號尚未填寫基本資料，如果此會員有基本資料"dataCheck"值會是"資料完整"
  








  return (
    
    <Router>  
      <Navbar auth={auth} />
      {/* 在Navbar放入是否登入，用來改變點擊會員是否會出現列表 */}
      {/* Switch 只有此範圍會換畫面 navbar footer 會保留 */}
      {/* 記得載入頁面組件喔 */}
      {/* 路徑長的往上放喔 */}


      <ScrollToTop/>
      <Switch>
     
      {/* shop 部分 */}
        <Route path="/shoppingCart/pay3">
          <Pay3 />
        </Route> 
        {/* <Route path="/shoppingCart/pay2">
          <Pay2 />
        </Route>  */}
        <Route path="/shoppingCart">
          <Pay1/>
        </Route>
        <Route path="/shop/ProductDetail/:id">
          <ProductDetail />
        </Route>
        <Route path="/shop/kenya">
          <ShopKenya />
        </Route>
        <Route path="/shop">
          <ShopIndex />
        </Route>
       
              
        {/* 以下是會員頁面 */}
        <Route  path="/member/QAcheck/:id">
          <MemberQAcheck auth={auth} dataCheck={dataCheck}/>
          </Route>

        <Route  path="/member/QAList">
          <MemberQAList auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route  path="/member/DrinkO">
          <MemberDrinkO auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route  path="/member/DrinkOList">
          <MemberDrinkOList auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route  path="/member/Favorite">
          <MemberFavorite auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route  path="/member/Order">
          <MemberOrder auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route  path="/member/OrderList">
          <MemberOrderList auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route  path="/member/profileEdit">
          <MemberprofileEdit auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route path="/member/Profile">
          <Memberprofile auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route path="/member/Password">
          <MemberPassword auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route path="/member/NewData">
          <MemberNewData auth={auth} dataCheck={dataCheck} />
        </Route>

        <Route  path="/member">
          <MemberLogin auth={auth} dataCheck={dataCheck} />
        </Route>
         {/* 以上是會員頁面 */}


        <Route path="/store"><StoreMapCardWrap /></Route>
        
        <Route path="/" exact><Home /></Route>

      </Switch>



      <Footer/>

    </Router>

  )
}

export default App;
