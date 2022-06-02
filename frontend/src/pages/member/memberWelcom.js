import { Link } from "react-router-dom"

function Welcome(){
    return(
        <>
        
        <div className="mMain">
            <Link to="/member/Profile"><button>點擊進入會員中心</button></Link>
        </div>
      
        </>
    )

}
export default Welcome