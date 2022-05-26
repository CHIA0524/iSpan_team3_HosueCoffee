import React, { Component } from "react";
import Slider from "react-slick";
import RecCard from './RecCard';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


export default class MultipleItems extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "2rem",
      slidesToShow: 3,
      speed: 500,
      rows: 3,
      slidesPerRow: 3
    };
    return (
      <div>
        <h2> 推薦商品 </h2>
        <Slider {...settings}>
          <div >
          <RecCard/>
          </div>
        </Slider>
      </div>
    );
  }
}