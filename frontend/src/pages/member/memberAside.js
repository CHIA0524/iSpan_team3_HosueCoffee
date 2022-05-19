import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function MemberAside(){

    return(
        <>
             <aside className="adminAside col-2">
                <ul className="asideContent">
                    <p className="maindir">會員資料</p>
                    
                        <li>
                        <Link to="/member/profile">基本資料</Link>
                        </li>
                    
                        <li>
                            <Link to="/member/OrderList">訂單查詢</Link>
                        </li>
                        <li>
                            <a href="">訂餐查詢</a>
                        </li>
                        <li>
                            <a href="">優惠紅利</a>
                        </li>
                        <li>
                            <a href="">問答中心</a>
                        </li>
                        <li>
                            <Link to="/member/Password">密碼管理</Link>
                        </li>
                        <li>
                            <a href="">我的收藏</a>
                        </li>

                </ul>

            </aside>
        </>
    )

}
export default MemberAside