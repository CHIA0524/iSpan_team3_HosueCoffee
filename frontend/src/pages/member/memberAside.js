import { BrowserRouter as Router, Route, Link, Switch ,NavLink} from 'react-router-dom';
import './memberAside.css'
import { useState } from 'react';
function MemberAside(){
        const menuItem=[{id:1 ,titel:'基本資料' ,goto:'/member/Profile'},
                        {id:2 ,titel:'訂單查詢' ,goto:'/member/OrderList'},
                        {id:3 ,titel:'優惠紅利' ,goto:'/member/Point'},
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
                                    <NavLink className={activeIndex === i ? 'active' : ''}  to={v.goto}>{v.titel}</NavLink>
                                </li>

                            )
                        })}
                </ul>

            </aside>
        </>
    )

}
export default MemberAside