import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

function homeAboutUs() {
    return (
        <div className="aboutUs" data-aos="fade-up">
            <div className="aboutUsTest" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="2000">
                <h1 className='aboutUsHover'>ABOUT US</h1>
                <p className='aboutUsHover'>由一群熱愛喵星球也愛喝咖啡的朋友，打造了一間友善動物且溫馨的咖啡店。不管是平日上班前來杯黑咖啡； 還是假日想找個舒服的咖啡店好好地喝上一杯對味的拿鐵度過美好的假日，歡迎來「House Coffee咖啡好室」光臨。
                </p>
            </div>
        </div>
    )
}

export default homeAboutUs
