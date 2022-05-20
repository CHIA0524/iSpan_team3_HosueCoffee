import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

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
 
  return (
    <Router>
      
      <Navbar />
      
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
        <Route  path="/member/QAcheck" component={MemberQAcheck}></Route>
        <Route  path="/member/QAList" component={MemberQAList}></Route>
        <Route  path="/member/DrinkO" component={MemberDrinkO}></Route>
        <Route  path="/member/DrinkOList" component={MemberDrinkOList}></Route>
        <Route  path="/member/Favorite" component={MemberFavorite}></Route>
        <Route  path="/member/Order" component={MemberOrder}></Route>
        <Route  path="/member/OrderList" component={MemberOrderList}></Route>
        <Route  path="/member/profileEdit" component={MemberprofileEdit}></Route>
        <Route path="/member/Profile" component={Memberprofile}></Route>
        <Route path="/member/Password" component={MemberPassword}></Route>
        <Route  path="/memberLogin" component={MemberLogin}></Route>

        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    
      <Footer />
      
    </Router>

  );
}

export default App;
