import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.scss';

// pages
import Home from './pages/home/Home';
import StoreIndex from './pages/store/StoreIndex';
import StoreMap from './pages/store/StoreMap';
import MenuIndex from './pages/menu/MenuIndex';
import OnlineCheckPage from './pages/menu/OnlineCheckPage';
import OnlineCheckPage2 from './pages/menu/OnlineCheckPage2';
import OnlineCheckPage3 from './pages/menu/OnlineCheckPage3';

// member pages
// import MemberLogin from './pages/member/memberlogin';
// import Memberprofile from './pages/member/memberprofile';
// import MemberprofileEdit from './pages/member/memberprofileEdit';
// import MemberPassword from './pages/member/memberPassword';
// import MemberOrderList from './pages/member/memberOrderList';

// components
import Navbar from './component/Navbar';
import Footer from './component/Footer';

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
        <Route path="/OnlineCheckPage">
          <OnlineCheckPage />
        </Route>
        <Route path="/OnlineCheckPage2">
          <OnlineCheckPage2 />
        </Route>
        <Route path="/OnlineCheckPage3">
          <OnlineCheckPage3 />
        </Route>
        <Route path="/MenuIndex">
          <MenuIndex />
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
