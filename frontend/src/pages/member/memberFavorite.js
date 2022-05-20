import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import './memberFavorite.css'
import FavoriteCard from './FavoriteCard';
function MemberFavorite(){
    return(
        <>
             <div className="mMember col-wn">
            <p>&lt;&ensp;會員中心</p>
            </div>
            <div className="container">
        <div className="row">
        <MemberAside/>
        <main className="pMain col">
            <div className=" row justify-content-center">
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                
            </div>

        </main>
        </div>
    </div>

        </>
    )
}
export default MemberFavorite;