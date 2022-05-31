import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import banner01 from './image/banner01.jpg';
import banner02 from './image/banner02.jpg';
import banner03 from './image/banner03.jpg';

function homeBanner(){
    return(
        <div id="carouselExampleControls" className="codeinfo__carousel carousel slide"data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner01} className="codeinfo__img d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner02} className="codeinfo__img d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner03} className="codeinfo__img d-block w-100"alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default homeBanner