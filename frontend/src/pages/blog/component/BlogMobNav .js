import React , { useEffect, useState }from 'react';
// import { CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//CSS
import '../blogBanner.css';




const BlogMobNav = (props) => {
 
    // 行動裝置板選單
 const [selectedValue, setSelectedValue] = useState('')
 const articleOptions = ['咖啡篇', '咖啡豆篇', '沖煮篇', '名人專欄篇','好物分享篇']   

   
    return (
        <>
            {/* //行動裝置板選單  */}
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



        </>
    );
}

export default BlogMobNav;



                