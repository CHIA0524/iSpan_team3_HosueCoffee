import { BrowserRouter as Router, Route, a, Switch,useParams, Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//component
import BlogCard from './component/BlogCard';
import BlogWebNav from './component/BlogWebNav';
import BlogMobNav from './component/BlogMobNav ';
import HomeTopBTN from '../home/HomeTopBTN';

//CSS
import './blogBanner.css';
import '../home/Home.css';



function Blog(props){

    const[blog,setBlog]=useState([])
     
    
    const fetchBlog = async () => {
        //向遠端伺服器get資料
        const response = await fetch(`${process.env.REACT_APP_API_URL}/blog`)
        const data = await response.json()
        // 載入資料後設定到狀態中
        // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
        setBlog(data)
    
        
    }
    const find = (event) => {
      event.preventDefault();
      if (event.target.value === "coffee") {
          window.location.assign('/blog/coffee')
          }
           else if (event.target.value === "coffeebean") {
           window.location.assign('/blog/coffeebean')
           }
           else if (event.target.value === "pourover") {
              window.location.assign('/blog/pourover')
              }
          else if (event.target.value === "celebrity") {
              window.location.assign('/blog/celebrity')
              }
          else if (event.target.value =="share") {
              window.location.assign('/blog/share')
              }
          else{
              window.location.assign('/blog')
          }
      }
    ////console.log(blog);
    
      // didMount
      useEffect(() => {
        fetchBlog()
      }, [])


  return(
    <>
   <section className="blogSection">
        <div className="blogBanner"></div>
    
        <div className="blogBannerWord">
        <h2 >
        <Link to={"/blog"} >
        咖啡手札
        </Link>
        </h2>
        </div>

       {/* //行動裝置板選單  */}
        <div className="blogType container">
        <select
            className="form-select blogSelect "
            name="article"
            id="article"
            onChange={(e) => find(e)}
            >
            <option value="" selected>全部文章</option> 
            <option value="coffee">咖啡篇</option>
            <option value="coffeebean">咖啡豆篇</option>
            <option value="pourover">沖煮篇</option>
            <option value="celebrity">名人專欄篇</option>
            <option value="share">好物分享</option>
               
            </select>
        </div>


        <div className="blogNav justify-content">
            <BlogWebNav/>
        </div>



        <div className="blogCardZone container">
            <div className="row  blogRow row-cols-1 row-cols-md-2">
              <BlogCard blog={blog}/>
            </div>
        </div>

        <HomeTopBTN />

        
    </section>

    </>
  );
}

export default Blog