
import { BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import logo from './logo.svg';

// pages

import StoreIndex from './pages/store/StoreIndex';
import StoreMap from './pages/store/StoreMap';


// components
import Navbar from './component/Navbar';
import Footer from './component/Footer';

//回到頁面最上層套件
import ScrollToTop from './component/ScrollToTop';


/* 以下頁面組件載入 */
// Home pages
import Home from './pages/home/Home';

//menu pages
import MenuIndex from './pages/menu/MenuIndex';
import OnlineCheckPage from './pages/menu/OnlineCheckPage';
import OnlineCheckPage2 from './pages/menu/OnlineCheckPage2';
import OnlineCheckPage3 from './pages/menu/OnlineCheckPage3';
import FavouritePage from './pages/menu/FavouritePage';

// Store pages
import StoreMapCardWrap from './pages/store/StoreMapCardWrap'

// Member pages
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
import MemberPoint from './pages/member/memberPoint';

// Shop pages
import ShopIndex from './pages/shop/ShopIndex';
import ProductDetail from './pages/shop/ProductDetail'; 
import Pay1 from './pages/shoppingCart/Pay1';
import Pay2 from './pages/shoppingCart/Pay2';
import Pay3 from './pages/shoppingCart/Pay3';
import RecCard from './pages/shop/component/RecCard';

import ShopKenya from './pages/shop/ShopKenya';
import ShopBrazil from './pages/shop/ShopBrazil';
import ShopColombia from './pages/shop/ShopColombia';
import ShopEthiopia from './pages/shop/ShopEthiopia';
import ShopGuatemala from './pages/shop/ShopGuatemala';
import ShopOther from './pages/shop/ShopOther';

//blog pages
import Blog from './pages/blog/Blog'
import BlogArticle from './pages/blogArticle/BlogArticle'
import BlogCoffee from './pages/blog/BlogCoffee'
import BlogCoffeeBean from './pages/blog/BlogCoffeeBean'
import BlogPourOver from './pages/blog/BlogPourOver'
import BlogCelebrity from './pages/blog/BlogCelebrity'
import BlogShare from './pages/blog/BlogShare'






function App() {
  //判斷購物車是否有資料
  if(localStorage.getItem('sCarts')==null){
    localStorage.setItem('sCarts',JSON.stringify([]))
}

  const [auth,setAuth]=useState(localStorage.getItem("true"));
  //判斷是否登入，若localhost storage內沒有"true"，就是沒有登入狀態，若有"true"，true的值會是會員ID
  //若有需要判斷會員是否有登入的頁面，在下方引入時記得加上 auth={auth}

  const [dataCheck,setDataCheck]=useState(localStorage.getItem("dataCheck"));
  // 登入後 若localhost storage內沒有"dataCheck"代表此會員編號尚未填寫基本資料，如果此會員有基本資料"dataCheck"值會是"資料完整"

  // 獲取首頁輪播框高度


  const [carNum,setcarNum]=useState(JSON.parse(localStorage.getItem('sCarts')).length)
  


  const [ bannerHeight, setBannerHeight ] = useState()


  return (
    <Router>


      <Navbar bannerHeight={bannerHeight} auth={auth} carNum={carNum}/>




      {/* Switch 只有此範圍會換畫面 navbar footer 會保留 */}
      {/* 記得載入頁面組件喔 */}
      {/* 路徑長的往上放喔 */}
      <ScrollToTop/>
      <Switch>
        
        <Route path="/blog/blogArticle/:id">
        <BlogArticle />
        </Route>
        <Route path="/blog/coffee">
        <BlogCoffee/>
        </Route>
        <Route path="/blog/coffeebean">
        <BlogCoffeeBean/>
        </Route>
        <Route path="/blog/pourover">
        <BlogPourOver/>
        </Route>
        <Route path="/blog/celebrity">
        <BlogCelebrity/>
        </Route>
        <Route path="/blog/share">
        <BlogShare/>
        </Route>
        <Route path="/blog">
        <Blog />
        </Route>

      {/* shop 部分 */}

        <Route path="/shoppingCart/pay3/:id">
          <Pay3 auth={auth} />
        </Route> 
       
        <Route path="/shoppingCart">
          <Pay1 auth={auth} setcarNum={setcarNum}/>
        </Route>
        <Route path="/shop/ProductDetail/:id">
          <ProductDetail auth={auth} setcarNum={setcarNum}/>
        </Route>
        <Route path="/shop/colombia">
          <ShopColombia auth={auth} setcarNum={setcarNum}/>
        </Route>
        <Route path="/shop/ethiopia">
          <ShopEthiopia auth={auth} setcarNum={setcarNum}/>
        </Route>
        <Route path="/shop/guatemala">
          <ShopGuatemala auth={auth} setcarNum={setcarNum}/>
        </Route>
        <Route path="/shop/brazil">
          <ShopBrazil auth={auth} setcarNum={setcarNum}/>
        </Route>
        <Route path="/shop/other">
          <ShopOther auth={auth} setcarNum={setcarNum}/>
        </Route>
        <Route path="/shop/kenya">
          <ShopKenya auth={auth} setcarNum={setcarNum}/>
        </Route>
      

        
        <Route path="/shop">
          <ShopIndex auth={auth} setcarNum={setcarNum}/>
        </Route>
              
        {/* 以下是會員頁面 */}
        <Route  path="/member/QAcheck/:id">
          <MemberQAcheck auth={auth} dataCheck={dataCheck}/>
          </Route>
        <Route  path="/member/Order/:id">
          <MemberOrder auth={auth} dataCheck={dataCheck}/>

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


        <Route  path="/member/Point">
          <MemberPoint auth={auth} dataCheck={dataCheck}/>
        </Route>


        <Route  path="/member/Favorite">
          <MemberFavorite auth={auth} dataCheck={dataCheck} setcarNum={setcarNum}/>
        </Route>



        <Route  path="/member/OrderList">
          <MemberOrderList auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route  path="/member/profileEdit">
          <MemberprofileEdit auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route path="/member/Password">
          <MemberPassword auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route path="/member/Profile">
          <Memberprofile auth={auth} dataCheck={dataCheck}/>
        </Route>

        <Route path="/member/NewData">
          <MemberNewData auth={auth} dataCheck={dataCheck} />
        </Route>

        <Route  path="/member">
          <MemberLogin auth={auth} setAuth={setAuth} dataCheck={dataCheck} setDataCheck={setDataCheck} />
        </Route>

         {/* 以上是會員頁面 */}


        <Route path="/store">
          <StoreMapCardWrap />
        </Route>
        
        <Route path="/" exact>
          <Home setBannerHeight={setBannerHeight}/>
        </Route>

        {/* menu */}
        <Route path="/onlinemenu">
          <MenuIndex/>
        </Route>
        <Route path="/OnlineCheckPage">
          <OnlineCheckPage/>
        </Route>
        <Route path="/OnlineCheckPage2">
          <OnlineCheckPage2/>
        </Route>
        <Route path="/OnlineCheckPage3">
          <OnlineCheckPage3/>
        </Route>
        <Route path="/favorite">
          <FavouritePage/>
        </Route>


      </Switch>
      <Footer/>
    </Router>

  )
}

export default App;
