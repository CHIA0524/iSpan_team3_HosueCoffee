import React , { useEffect, useState }from 'react';
import { Link } from 'react-router-dom';


//CSS
import '../blogBanner.css';




const BlogMobNav = (props) => {
 
    // 行動裝置板選單
//  const [selectedValue, setSelectedValue] = useState('')
 const articleOptions = [{name:"咖啡篇",value:"coffee"}, {name:"咖啡豆篇",value:"coffeebean"}, {name:"沖煮篇",value:"pourover"}, {name:"名人專欄篇",value:"celebrity"}, {name:"好物分享篇",value:"share"}]   


    return (
        <>
            {/* //行動裝置板選單  */}
         <select
            className="form-select blogSelect "
            name="article"
            id="article"
            onChange={(e) => {
                const selectgoto=document.getElementById("article").value
                window.location.assign('/blog/'+selectgoto)
            
              }
                
            }

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



                