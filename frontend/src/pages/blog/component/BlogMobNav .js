import React , { useEffect, useState }from 'react';
import { Link } from 'react-router-dom';


//CSS
import '../blogBanner.css';




const BlogMobNav = (props) => {
    const nowWeb=window.location.pathname
    console.log(window.location.pathname); 
    console.log(nowWeb.slice(6,)); 
    const nowpath=nowWeb.slice(6,)
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
            else {
                window.location.assign('/blog/share')
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
                // const selectgoto=document.getElementById("article").value
                // window.location.assign('/blog/'+selectgoto)
            
              
                
            // }

            >
   
            <option value="">文章類別</option>
            {articleOptions.map((v, i) => {
                    console.log(v.value)
                return (
                <option value={v.value}>
                    {v.name}
                </option>
                )
            })}
            </select>



        </>
    );
}

export default BlogMobNav;



                