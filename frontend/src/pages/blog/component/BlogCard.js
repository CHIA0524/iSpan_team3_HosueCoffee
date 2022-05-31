import React from 'react';
// import { CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//CSS
import '../blogBanner.css';


//imgs
import BlogCardImg from '../img/3-3-1024x682.jpg'

const BlogCard = (props) => {
    const {blog}=props
    return (
        <>
         {blog.map((v, i) => {
            console.log(v)
            return (
                    
            <div className="col-lg-4"  key={i}>
                <div className="cardBorder">
                    <div className="cardImg">
                        <img src={require('../img/01.jpg')} alt="BlogCardImg"></img>
                    </div>
                    <div className="cardText">
                        <h3>{v.title}</h3>
                        <p>{v.content.slice(0,40)}...</p>
                    </div>
                    <div className="cardInfo">
                        <Link to={"/blog/BlogArticle"}>+more</Link>
                        <span>{v.CREATEd_at.slice(0,10)}</span>
                    </div>
                </div>
            </div>
                
            )
        })}


        </>
    );
}

export default BlogCard;



                