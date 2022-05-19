import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

// pages
import Home from './pages/home/Home';
import StoreIndex from './pages/store/StoreIndex';
import StoreMap from './pages/store/StoreMap';

// member pages
import MemberLogin from './pages/member/memberlogin';
import Memberprofile from './pages/member/memberprofile';
import MemberprofileEdit from './pages/member/memberprofileEdit';
import MemberPassword from './pages/member/memberPassword';
import MemberOrderList from './pages/member/memberOrderList';

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
        <Route  path="/OrderList" component={MemberOrderList}></Route>
        <Route  path="/profileEdit" component={MemberprofileEdit}></Route>
          <Route path="/profile" component={Memberprofile}></Route>
        <Route path="/Password" component={MemberPassword}></Route>
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
