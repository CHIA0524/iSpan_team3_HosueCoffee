import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import blogimg from './image/blogimg.jpg';

function homeBlog(){
    return(
        <div className="blog">
                <h1>TODAY’S ARTICLE</h1>
                <div className="allCard">
                    <div className="cardBorder">
                        <div className="cardImg"><img src={blogimg} alt=""/></div>
                        <div className="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div className="cardInfo">
                            <a href="">+more</a>
                            <span>date</span>
                        </div>
                    </div>
                    <div className="cardBorder">
                        <div className="cardImg"><img src={blogimg} alt=""/></div>
                        <div className="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div className="cardInfo">
                            <a href="">+more</a>
                            <span>date</span>
                        </div>
                    </div>
                    <div className="cardBorder">
                        <div className="cardImg"><img src={blogimg} alt=""/></div>
                        <div className="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div className="cardInfo">
                            <a href="">+more</a>
                            <span>date</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default  homeBlog