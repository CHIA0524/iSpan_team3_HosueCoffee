import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


//component




//CSS
import '../articleBanner.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  './slider.css';



function ArticleRecommend(props){
   
    const {arecomend}=props
  
   

    // 輪播 更改寬度
    const [width, setWidth] = useState(750);
    const [display, setDisaplay] = useState(true);
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    };


  return(
    <>
     <div className="articleRecommend ">
          
            <div
              style={{
                width: width + "px",
                display: display ? "block" : "none"
              }}
             >
             <div className="articleRecommendWord"><h2>相關文章推薦</h2></div>   
              <Slider {...settings}>
                 
                    {arecomend.map((v, i) => {
                            const firstImg=(v.first_img);
                           
                        return(
               
                            <>
                                <div className="articleRecommendWrapper" key={i}>
                                        <Link to={`/blog/BlogArticle/${v.blog_id}`} >
                                    <div className="articleRecommendCard" >
                                          <div className="articleRecommendImg">
                                            <img  src={require("../../blogArticle/img/"+firstImg+".jpg")} alt="articleRecommendImg" >
                                            </img>
                                          </div>
                                            <div className='articleRecommendTitle'>
                                                <h5>{v.title}</h5>
                                            </div>
                                    </div>
                                          </Link>
                                </div>
                            </>
                        )
                    })} 
                    </Slider>
            </div>
        </div>

    </>
  );
}

export default ArticleRecommend