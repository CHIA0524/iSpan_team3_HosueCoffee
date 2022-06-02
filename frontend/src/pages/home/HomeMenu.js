import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import menu04 from './image/menu04.jpeg';
import menu02 from './image/menu02.jpeg';
import menu01 from './image/menu01.jpeg';

function homeMenu(props){
    return(
        <div class="menu">
                <h1>MENU</h1>
                <div class="allMenu">
                    <div class="menuHover">
                        <div class="menuCard">
                            <p>Americano</p>
                        </div>
                        <img src={menu04} alt="" />
                    </div>
                    <div class="menuHover">
                        <div class="menuCard">
                            <p>Cappuccino</p>
                        </div>
                        <img src={menu02} alt="" />
                    </div>
                    <div class="menuHover">
                        <div class="menuCard">
                            <p>Macchiato</p>
                        </div>
                        <img src={menu01} alt="" />
                    </div>
                </div>
            </div>
    )
}

export default homeMenu