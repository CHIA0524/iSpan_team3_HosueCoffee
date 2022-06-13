import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import banner01 from './image/banner01.jpg';
import banner02 from './image/banner02.jpg';
import banner03 from './image/banner03.jpg';

function HomeBanner(props){

    const { setBannerHeight } = props

    window.addEventListener('load',()=>{
        setBannerHeight(document.getElementById('carouselExampleControls').clientHeight)
    })
    window.addEventListener('resize',()=>{
        setBannerHeight(document.getElementById('carouselExampleControls').clientHeight)
    })
    window.addEventListener('scroll',()=>{
        setBannerHeight(document.getElementById('carouselExampleControls').clientHeight)
    })

    return(
        <div id="carouselExampleControls" className="codeinfo__carousel carousel slide"data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={banner01} className="codeinfo__img d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner02} className="codeinfo__img d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner03} className="codeinfo__img d-block w-100"alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default HomeBanner