import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './blogBanner.css';
import BlogCard from './component/BlogCard';

function Blog(props){
  return(
    <>
   <section>
        <div class="blogBanner"></div>


    
        <div class="bannerWord">咖啡手札</div>
   




       {/* //行動裝置板選單 */}
        <div class="blogType container">
            <select class="form-select typeSelect">
                <option selected>文章類別</option>
                <option value="1">咖啡篇</option>
                <option value="2">咖啡豆篇</option>
                <option value="3">沖煮篇</option>
                <option value="4">名人專欄篇</option>
                <option value="5">好物分享篇</option>
            </select>
    
        </div>


        <div class="blogNav justify-content">
            <ul>
                <li class="navItem">
                    <a class="navLink active" aria-current="page" href="#">
                        <h3>咖啡篇</h3>
                        <h3>coffee</h3>
                    </a>
                </li>
                <li class="navItem">
                    <a class="navLink" href="#">
                        <h3>咖啡豆篇</h3>
                        <h3>coffee bean</h3>
                    </a>
                </li>
                <li class="navItem">
                    <a class="navLink" href="#">
                        <h3>沖煮篇</h3>
                        <h3>pour over</h3>
                    </a>
                </li>
                <li class="navItem">
                    <a class="navLink" href="#">
                        <h3>名人專欄篇</h3>
                        <h3>celebrity</h3>
                    </a>
                </li>
                <li class="navItem">
                    <a class="navLink" href="#">
                        <h3>好物分享篇</h3>
                        <h3>share</h3>
                    </a>
                </li>
            </ul>
        </div>



        <div class="cardZone container">
            <div class="row  row-cols-1 row-cols-md-2">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
        </div>
    </section>

    </>
  );
}

export default Blog