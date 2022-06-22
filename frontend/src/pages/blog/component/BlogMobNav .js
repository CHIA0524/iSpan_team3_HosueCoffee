import React , { useEffect, useState }from 'react';
import { Link } from 'react-router-dom';


//CSS
import '../blogBanner.css';




const BlogMobNav = (props) => {
 
    // 行動裝置板選單
//  const [selectedValue, setSelectedValue] = useState('')
 const articleOptions = [{name:"咖啡篇",value:"coffee"}, {name:"咖啡豆篇",value:"coffeebean"}, {name:"沖煮篇",value:"pourover"}, {name:"名人專欄篇",value:"celebrity"}, {name:"好物分享篇",value:"share"}]   

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

    return (
        <>
            {/* //行動裝置板選單  */}
         <select
            className="form-select blogSelect "
            name="article"
            id="article"
            onChange={(e) => find(e)}
            >
            <option value="">全部文章</option> 
            <option value="coffee">咖啡篇</option>
            <option value="coffeebean">咖啡豆篇</option>
            <option value="pourover">沖煮篇</option>
            <option value="celebrity">名人專欄篇</option>
            <option value="share">好物分享</option>
               
            </select>



        </>
    );
}

export default BlogMobNav;



                