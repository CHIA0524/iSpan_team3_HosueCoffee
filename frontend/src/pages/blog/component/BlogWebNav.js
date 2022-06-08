import React , { useEffect, useState }from 'react';
// import { CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//CSS
import '../blogBanner.css';




const BlogWebNav = (props) => {
 
   
   
    return (
        <>
         <ul>
                <li className="blogNavItem">
                    <Link className="blogNav" aria-current="page" to="/blog/coffee">
                        <h3>咖啡篇</h3>
                        <h3>coffee</h3>
                    </Link>
                </li>
                <li className="blogNavItem">
                    <Link className="blogNav" to="/blog/coffeebean">
                        <h3>咖啡豆篇</h3>
                        <h3>coffee bean</h3>
                    </Link>
                </li>
                <li className="blogNavItem">
                    <Link className="blogNav" to="/blog/pourover">
                        <h3>沖煮篇</h3>
                        <h3>pour over</h3>
                    </Link>
                </li>
                <li className="blogNavItem">
                    <Link className="blogNav" to="/blog/celebrity">
                        <h3>名人專欄篇</h3>
                        <h3>celebrity</h3>
                    </Link>
                </li>
                <li className="blogNavItem">
                    <Link className="blogNav" to="/blog/share">
                        <h3>好物分享篇</h3>
                        <h3>share</h3>
                    </Link>
                </li>
            </ul>

        </>
    );
}

export default BlogWebNav;



                