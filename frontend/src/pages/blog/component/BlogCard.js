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
                    
            <div className="col-lg-4 blogCol"  key={i}>
                <Link to={`/blog/BlogArticle/${v.blog_id}`}>
                <div className="blogCardBorder">
                    <div className="blogCardImg">
                        <img src={require('../img/01.jpg')} alt="BlogCardImg"></img>
                    </div>

                    <div className="blogCardText">
                        <div className='blogTextTitle'>
                            <h5>{v.title}</h5>
                        </div>
                        <div className='blogTextContent'>
                            <p>{v.first_content.slice(0,40)}......</p>
                        </div>
                    </div>

                    <div className="blogCardInfo">
                        <Link to={"/blog/BlogArticle"}>+more</Link>
                        <span>{v.created_time.slice(0,10)}</span>
                    </div>
                </div>
                </Link>
            </div>
                
            )
        })}


        </>
    );
}

export default BlogCard;



                