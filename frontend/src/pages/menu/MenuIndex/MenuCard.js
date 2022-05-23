import React from "react";
import "../style.scss"
import {AiOutlineHeart} from 'react-icons/ai';


const MenuCard = () => (


    <div className="card">
        <a href="#popup1">
            <div className="">
                <img src="https://fakeimg.pl/180x180/eeeeee/aaa"alt=""/>
            </div>
            <div className="cardpading">
                <span>可可綿雲瑪奇朵</span>
            </div>
            <div className="d-flex justify-content-between cardpading">
                <span className="d-flex align-items-center">$150</span>
                <span>
                    <AiOutlineHeart/>
                </span>
            </div>
        </a>
    </div>

)



export default MenuCard