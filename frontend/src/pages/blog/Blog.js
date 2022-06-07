import { BrowserRouter as Router, Route, a, Switch,useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//component
import BlogCard from './component/BlogCard';

//CSS
import './blogBanner.css';


function Blog(props){

    const[blog,setBlog]=useState([])
     
    
    // select
  const [selectedValue, setSelectedValue] = useState('')
  const articleOptions = ['咖啡篇', '咖啡豆篇', '沖煮篇', '名人專欄篇','好物分享篇']

    const fetchBlog = async () => {
        //向遠端伺服器get資料
        const response = await fetch('http://localhost:3600/blog')
        const data = await response.json()
    
        // 載入資料後設定到狀態中
        // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
        setBlog(data)
    
        
    }
    console.log(blog);
    
      // didMount
      useEffect(() => {
        fetchBlog()
      }, [])


  return(
    <>
   <section className="blogSection">
        <div className="blogBanner"></div>


    
        <div className="blogBannerWord">咖啡手札</div>
   

        


       {/* //行動裝置板選單 */}
        <div className="blogType container">
            <select
            className="form-select blogSelect "
            name="article"
            id="article"
            value={selectedValue}
            onChange={(e) => {
                setSelectedValue(e.target.value)
            }}
            >
            <option value="">文章類別</option>
            {articleOptions.map((v, i) => {
                return (
                    
                <option key={i} value={v}>
                    {v}
                </option>
                )
            })}
            </select>
    
        </div>


        <div className="blogNav justify-content">
            <ul>
                <li className="blogNavItem">
                    <a className="blogNav" aria-current="page" href="#">
                        <h3>咖啡篇</h3>
                        <h3>coffee</h3>
                    </a>
                </li>
                <li className="blogNavItem">
                    <a className="blogNava" href="#">
                        <h3>咖啡豆篇</h3>
                        <h3>coffee bean</h3>
                    </a>
                </li>
                <li className="blogNavItem">
                    <a className="blogNava" href="#">
                        <h3>沖煮篇</h3>
                        <h3>pour over</h3>
                    </a>
                </li>
                <li className="blogNavItem">
                    <a className="blogNava" href="#">
                        <h3>名人專欄篇</h3>
                        <h3>celebrity</h3>
                    </a>
                </li>
                <li className="blogNavItem">
                    <a className="blogNava" href="#">
                        <h3>好物分享篇</h3>
                        <h3>share</h3>
                    </a>
                </li>
            </ul>
        </div>



        <div className="blogCardZone container">
            <div className="row  blogRow row-cols-1 row-cols-md-2">
              <BlogCard blog={blog}/>
            </div>
        </div>
    </section>

    </>
  );
}

export default Blog