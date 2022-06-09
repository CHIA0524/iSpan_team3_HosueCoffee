import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import menu03 from './image/menu03.jpeg';
import menu02 from './image/menu02.jpeg';
import menu01 from './image/menu01.jpeg';

function homeMenu(props){
    return(
        <div className="menu">
                <h1>MENU</h1>
                <div className="allMenu">
                    <div className="menuHover">
                        <div className="menuCard">
                            <p>Americano</p>
                        </div>
                        <img src={menu03} alt="" />
                    </div>
                    <div className="menuHover">
                        <div className="menuCard">
                            <p>Cappuccino</p>
                        </div>
                        <img src={menu02} alt="" />
                    </div>
                    <div className="menuHover">
                        <div className="menuCard">
                            <p>Macchiato</p>
                        </div>
                        <img src={menu01} alt="" />
                    </div>
                </div>
            </div>
    )
}

export default homeMenu