import React from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.scss"; 
import "/node_modules/slick-carousel/slick/slick-theme.scss";








const Slider1 = ()=> {



   

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        display: true, 
        adaptiveHeight:true,
        
      };


          const img1 = 'https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/622a3eac25c93.jpeg'
          const img2 = 'https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/622a3e31ce541.jpeg'
          const img3 = 'https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/622a3e282cb35.jpeg'
return(

    <Slider {...settings}>
      <div>
        <img src={img1} alt=""/>
      </div>
      <div>
      <img src={img2} alt=""/>
      </div>
      <div>
      <img src={img3} alt=""/>
      </div>
    </Slider>


)


}


export default Slider1