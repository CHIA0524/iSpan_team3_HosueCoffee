import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './memberAside.css'
import { useState } from 'react';
function MemberAside(){
        const menuItem=[{id:1 ,titel:'基本資料' ,goto:'/member/Profile'},
                        {id:2 ,titel:'訂單查詢' ,goto:'/member/OrderList'},
                        {id:3 ,titel:'訂餐查詢' ,goto:'/member/DrinkOList'},
                        {id:4 ,titel:'問答中心' ,goto:'/member/QAList'},
                        {id:5 ,titel:'密碼管理' ,goto:'/member/Password'},
                        {id:6 ,titel:'我的收藏' ,goto:'/member/Favorite'}]
        const [activeIndex, setActiveIndex] = useState(-1)
    return(
        <>
             <aside className="adminAside col-2">
                <ul className="asideContent">
                    <p className="maindir">會員資料</p> 
                        {menuItem.map((v,i) => {
                            return(
                                <li key={v.id} onClick={() => {setActiveIndex(i)}} >
                                    <Link to={v.goto} className={activeIndex === i ? 'active' : ''}>{v.titel}</Link>
                                </li>

                            )
                        })}
                        
{/*                     
                        <li>
                            <Link to="/member/OrderList">訂單查詢</Link>
                        </li>
                        <li>
                            <Link to="/member/DrinkOList">訂餐查詢</Link>
                        </li>
                        <li>
                            <Link to="/member/QAList">問答中心</Link> 
                        </li>
                        <li>
                            <Link to="/member/Password">密碼管理</Link>
                        </li>
                        <li>
                        <Link to="/member/Favorite">我的收藏</Link>
                        </li> */}

                </ul>

            </aside>
        </>
    )

}
export default MemberAside