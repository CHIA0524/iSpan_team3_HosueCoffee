import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react'
function MemberBack(){
    return(
        <>
            <div className="mMember">
            <Link to="/member/Profile">
            <p>&lt;&ensp;會員中心</p>
            </Link>
            </div>
        </>
    )
}
export default MemberBack