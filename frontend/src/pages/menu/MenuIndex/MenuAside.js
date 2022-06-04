import React from "react";
import { Link } from "react-router-dom";



const MenuAside = () => (


    <div className="asideMenu main1">
        <aside>
            <div className="onlion">
                <span>線上訂餐</span>
            </div>
            <ul>
                <a href="/"><li>全部</li></a>
                <a href="/"><li>茶瓦納</li></a>
                <a href="/"><li>星冰樂</li></a>
                <a href="/"><li>冷萃咖啡</li></a>
                <a href="/"><li>我的最愛</li></a>
                <Link to='/OnlineCheckPage'><li>暫時購物車</li></Link>
            </ul>
        </aside>
    </div>

)




export default MenuAside