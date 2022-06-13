import React from "react";
import { Link } from "react-router-dom";



const MenuAside = () => (


    <div className="asideMenu main1">
        <aside>
            <div className="onlion">
                <span>線上訂餐</span>
            </div>
            <ul>
                <a href="/onlinemenu"><li>全部</li></a>
                <a href="/"><li>茶瓦納</li></a>
                <a href="/"><li>星冰樂</li></a>
                <a href="/"><li>冷萃咖啡</li></a>
                <a href="/favorite"><li>我的最愛</li></a>
            </ul>
        </aside>
    </div>

)




export default MenuAside