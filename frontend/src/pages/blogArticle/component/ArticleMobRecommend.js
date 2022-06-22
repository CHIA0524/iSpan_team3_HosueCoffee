import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


//component




//CSS
import '../articleBanner.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  './MobSlider.css';



function ArticleMobRecommend(props){
   
    const {arecomend}=props
   

    // 輪播 更改寬度
    const [width, setWidth] = useState(280);
    const [display, setDisaplay] = useState(true);
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    };


  return(
    <>
     <div className="articleMobRecommend mMoreInfo">
          
            <div className="articleMobRecommendKit "
              style={{
                width: width + "px",
                display: display ? "block" : "none"
              }}
             >
             <div className="MBText">相關文章推薦</div>   
              <Slider {...settings}>
                 
                    {arecomend.map((v, i) => {
                            const firstImg=(v.first_img);
                           
                        return(
               
                            <>
                            <div className='bM'>
                                <div className="articleMobRecommendWrapper" key={i}>
                                    <div 
                                      className="articleMobRecommendCard" 
                                      onClick={()=>{
                                        window.location.href=`/blog/BlogArticle/${v.blog_id}` }}
                                    >
                                          <div className="articleMobRecommendImg">
                                            <img  src={require("../../blogArticle/img/"+firstImg+".jpg")} alt="articleMobRecommendImg" >
                                            </img>
                                          </div>
                                            <div className='articleMobRecommendTitle'>
                                                <div className='blogmtitle'>{v.title}</div>
                                            </div>
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

export default ArticleMobRecommend