import React from "react";
import { Link } from "react-router-dom";
import MenuType1 from "../MenuTypeToday";



const MenuAside = () => (


    <div className="asideMenu main1">
        <aside className="webmenuaside">
            <div className="onlion">
                <span>線上訂餐</span>
            </div>
            <ul>
                <a href="/onlinemenu"><li>全部</li></a>
                <a href="/MenuTypeToday"><li>每日精選咖啡</li></a>
                <a href="/MenuTypeIce"><li>冰飲咖啡</li></a>
                <a href="/MenuTypeHot"><li>熱飲咖啡</li></a>
                <a href="/favorite"><li>我的最愛</li></a>
            </ul>
        </aside>
    </div>

)




export default MenuAside