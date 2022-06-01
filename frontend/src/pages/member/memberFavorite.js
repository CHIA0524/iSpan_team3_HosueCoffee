import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import MemberBack from './memberBack';
import './memberFavorite.css'
import FavoriteCard from './componend/FavoriteCard';
function MemberFavorite(props){
    const{auth}=props;
    const {dataCheck}=props;
    if(!auth){
      window.location.replace("http://localhost:3000/member")
    }if(!dataCheck){
      window.location.replace("http://localhost:3000/member/NewData");
    }
    return(
        <>
             <MemberBack/>
            <div className="container">
        <div className="row">
        <MemberAside/>
        <main className="mMain col">
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