import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import blogimg from './image/blogimg.jpg';

function homeBlog(){
    return(
        <div class="blog">
                <h1>TODAY’S ARTICLE</h1>
                <div class="allCard">
                    <div class="cardBorder">
                        <div class="cardImg"><img src={blogimg} alt=""/></div>
                        <div class="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div class="cardInfo">
                            <a href="">+more</a>
                            <span>date</span>
                        </div>
                    </div>
                    <div class="cardBorder">
                        <div class="cardImg"><img src={blogimg} alt=""/></div>
                        <div class="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div class="cardInfo">
                            <a href="">+more</a>
                            <span>date</span>
                        </div>
                    </div>
                    <div class="cardBorder">
                        <div class="cardImg"><img src={blogimg} alt=""/></div>
                        <div class="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div class="cardInfo">
                            <a href="">+more</a>
                            <span>date</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default  homeBlog