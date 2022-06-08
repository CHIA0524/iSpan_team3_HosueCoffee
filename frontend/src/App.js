import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.scss'

// components
import Navbar from './component/Navbar'
import Footer from './component/Footer'

// home pages
import Home from './pages/home/Home'

// store pages
import StoreMapCardWrap from './pages/store/StoreMapCardWrap'

//blog pages
import Blog from './pages/blog/Blog'
import BlogArticle from './pages/blogArticle/BlogArticle'
import BlogCoffee from './pages/blog/BlogCoffee'
import BlogCoffeeBean from './pages/blog/BlogCoffeeBean'
import BlogPourOver from './pages/blog/BlogPourOver'
import BlogCelebrity from './pages/blog/BlogCelebrity'
import BlogShare from './pages/blog/BlogShare'




// member pages
// import MemberLogin from './pages/member/memberlogin'
// import Memberprofile from './pages/member/memberprofile'
// import MemberprofileEdit from './pages/member/memberprofileEdit'
// import MemberPassword from './pages/member/memberPassword'
// import MemberOrderList from './pages/member/memberOrderList'


function App() {
  return (
    <Router>


      <Navbar/>

      {/* Switch 只有此範圍會換畫面 navbar footer 會保留 */}
      {/* 記得載入頁面組件喔 */}
      {/* 路徑長的往上放喔 */}

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

        <Route path="/store"><StoreMapCardWrap /></Route>
        
        <Route path="/" exact><Home /></Route>

      </Switch>

      <Footer/>

    </Router>

  )
}

export default App;
