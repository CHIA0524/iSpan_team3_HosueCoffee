import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';

// pages
import Home from './pages/home/Home';
import StoreIndex from './pages/store/StoreIndex';
import StoreMap from './pages/store/StoreMap';

// member pages
import MemberLogin from './pages/member/memberlogin';
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

// components
import Navbar from './pages/component/Navbar';
import Footer from './pages/component/Footer';
import React from 'react';

function App() {
  const [auth,setAuth]=useState(localStorage.getItem(true));
  // if(!localStorage.getItem(true) && typeof localStorage.getItem(true) != "undefined" && localStorage.getItem(true) != 0){
  //   // typeof localStorage.getItem(true) != "undefined" 排除了 undefined；
  //   // localStorage.getItem(true) != 0 排除了数字零和 false。
  //   document.querySelector('.webUserInfo').style.display="none"
  // }
  
  return (
    <Router>
      
      <Navbar auth={auth}/>
      
      {/* Switch 只有此範圍會換畫面 navbar footer 會保留 */}
      {/* 記得載入頁面組件喔 */}
      {/* 路徑長的往上放喔 */}
      
      <Switch>
        <Route path="/store/map">
          <StoreMap />
        </Route>
    
        <Route path="/store">
          <StoreIndex />
        </Route>

        

        <Route  path="/member/QAcheck/:id">
        <MemberQAcheck auth={auth} />
        </Route>

        <Route  path="/member/QAList">
        <MemberQAList auth={auth} />
        </Route>

        <Route  path="/member/DrinkO">
        <MemberDrinkO auth={auth} />
        </Route>

        <Route  path="/member/DrinkOList">
        <MemberDrinkOList auth={auth} />
        </Route>

        <Route  path="/member/Favorite">
        <MemberFavorite auth={auth} />
        </Route>

        <Route  path="/member/Order">
        <MemberOrder auth={auth} />
        </Route>

        <Route  path="/member/OrderList">
        <MemberOrderList auth={auth} />
        </Route>

        <Route  path="/member/profileEdit">
        <MemberprofileEdit auth={auth} />
        </Route>

        <Route path="/member/Profile">
        <Memberprofile auth={auth} />
        </Route>

        <Route path="/member/Password">
        <MemberPassword auth={auth} />
        </Route>

        <Route  path="/member">
        <MemberLogin setAuth={setAuth} auth={auth} />
        </Route>
        

        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    
      <Footer />
      
    </Router>

  );
}

export default App;
