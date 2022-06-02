import React from 'react';
import { CardImg } from 'react-bootstrap';


//CSS
import '../blogBanner.css';


//img
import test from '../img/3-3-1024x682.jpg'

const BlogCard = () => {
    return (
        <>
            
            <div class="col-lg-4 ">
                    <div className="cardBorder">
                        <div className="cardImg">
                            <img src={test} alt="test"></img>
                        </div>
                        <div className="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div className="cardInfo">
                            <a>+more</a>
                            <span>date</span>
                        </div>
                    </div>
                </div>


        </>
    );
}

export default BlogCard;



                