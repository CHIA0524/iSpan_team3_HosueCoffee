import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import menu03 from './image/menu03.png';
import menu02 from './image/menu02.png';
import menu01 from './image/menu01.png';
import menuHover03 from './image/home menu hover03.png';
import menuHover02 from './image/home menu hover02.png';
import menuHover01 from './image/home menu hover01.png';

function homeMenu(props) {
    return (
        <div className="homeMenu" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
            <h1>MENU</h1>
            <div className="allMenu" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
                <div className="menuHover">
                    <img className='menuImg' src={menu01} alt="" />
                    <a href="/onlinemenu"><img className='menuHoverImg' src={menuHover01} alt="" /></a>
                </div>
                <div className="menuHover">
                    <img className='menuImg' src={menu02} alt="" />
                    <a href="/onlinemenu"><img className='menuHoverImg' src={menuHover02} alt="" /></a>
                </div>
                <div className="menuHover">
                    <img className='menuImg' src={menu03} alt="" />
                    <a href="/onlinemenu"><img className='menuHoverImg' src={menuHover03} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default homeMenu