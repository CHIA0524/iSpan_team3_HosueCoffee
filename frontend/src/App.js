import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
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
import MemberQACard from './pages/member/componend/memberQACard';

function App() {
  const [auth,setAuth]=useState(false)
  const [thismemberid,setThismemberid]=useState()
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

        

        <Route  path="/member/QAcheck/:id">
        <MemberQAcheck auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route  path="/member/QAList">
        <MemberQAList auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route  path="/member/DrinkO">
        <MemberDrinkO auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route  path="/member/DrinkOList">
        <MemberDrinkOList auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route  path="/member/Favorite">
        <MemberFavorite auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route  path="/member/Order">
        <MemberOrder auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route  path="/member/OrderList">
        <MemberOrderList auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route  path="/member/profileEdit">
        <MemberprofileEdit auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route path="/member/Profile">
        <Memberprofile auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route path="/member/Password">
        <MemberPassword auth={auth} thismemberid={thismemberid}/>
        </Route>

        <Route  path="/memberLogin">
        <MemberLogin setAuth={setAuth} auth={auth} setThismemberid={setThismemberid} thismemberid={thismemberid}/>
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
