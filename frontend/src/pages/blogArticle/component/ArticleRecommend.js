import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


//component




//CSS
import '../articleBanner.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  './ArticleSlider.css';



function ArticleRecommend(props){
   
    const {arecomend}=props
   

    // 輪播 更改寬度
    const [width, setWidth] = useState(60);
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
          
            <div className="articleRecommendKit "
              style={{
                width: width + "em",
                display: display ? "block" : "none"
              }}
             >
             <div className="articleRecommendWord">相關文章推薦</div>   
              <Slider {...settings}>
                 
                    {arecomend.map((v, i) => {
                            const firstImg=(v.first_img);
                           
                        return(
               
                            <>
                                <div className="articleRecommendWrapper" key={i}>
                                    <div 
                                      className="articleRecommendCard" 
                                      onClick={()=>{
                                        window.location.href=`/blog/BlogArticle/${v.blog_id}` }}
                                    >
                                          <div className="articleRecommendImg">
                                            <img  src={require("../../blogArticle/img/"+firstImg+".jpg")} alt="articleRecommendImg" >
                                            </img>
                                          </div>
                                            <div className='articleRecommendTitle'>
                                                <h5>{v.title}</h5>
                                            </div>
                                    </div>
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