import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.scss';

// pages
import Home from './pages/home/Home';
import StoreIndex from './pages/store/StoreIndex';
import StoreMapCardWrap from './pages/store/StoreMapCardWrap';

// member pages
// import MemberLogin from './pages/member/memberlogin';
// import Memberprofile from './pages/member/memberprofile';
// import MemberprofileEdit from './pages/member/memberprofileEdit';
// import MemberPassword from './pages/member/memberPassword';
// import MemberOrderList from './pages/member/memberOrderList';

// components
import NavbarHome from './component/NavbarHome';
import Footer from './component/Footer';

function App() {
  return (
    <Router>

      {/* 首頁 Navbar 不同 */}
      <Route path="/" exact>
        <NavbarHome/>
        <Home />
      </Route>



      {/* 其他頁面請載這裡 */}
      <Switch>

        <Route path="/store/map">
          <StoreMapCardWrap />
        </Route>
        <Route path="/store">
          <StoreIndex />
        </Route>
        
      </Switch>

      <Footer/>

    </Router>

  );
}

export default App;
