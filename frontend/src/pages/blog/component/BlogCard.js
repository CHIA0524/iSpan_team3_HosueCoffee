import React from 'react';
// import { CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//CSS
import '../blogBanner.css';





const BlogCard = (props) => {
    const {blog}=props
    return (
        <>
         {blog.map((v, i) => {
            console.log(v)
            const firstImg=(v.first_img);
            console.log(v.blog_id)

            return (
                    
            <div className="col-lg-4 blogCol"  key={i}>
                <Link to={`/blog/BlogArticle/${v.blog_id}`}>
                <div className="blogCardBorder">
                    <div className="blogCardBanner">
                        <img className="blogCardImg" src={require("../../blogArticle/img/"+firstImg+".jpg")} alt="BlogCardImg"></img>
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
                        <Link to={`/blog/BlogArticle/${v.blog_id}`}>+more</Link>
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



                