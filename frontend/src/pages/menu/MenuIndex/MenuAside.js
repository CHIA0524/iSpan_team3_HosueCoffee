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
                <Link to="/onlinemenu"><li>全部</li></Link>
                <Link to="/MenuTypeToday"><li>每日精選咖啡</li></Link>
                <Link to="/MenuTypeIce"><li>冰飲咖啡</li></Link>
                <Link to="/MenuTypeHot"><li>熱飲咖啡</li></Link>
                <Link to="/favorite"><li>我的最愛</li></Link>
            </ul>
        </aside>
    </div>

)




export default MenuAside