import { Link } from "react-router-dom"
import React from 'react'
function Member404(){
    return(
        <>
    <div>請登入</div>
    <Link to="/memberLogin"><button>前往登入業面</button></Link>
    </>
    )
}
export default Member404;