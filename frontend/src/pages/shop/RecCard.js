import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './productdetail.css';


function RecCard(){


  return(
    <>
          <div class="rPackage">
             <Link to="/shop/ProductDetail/1">
               <img class="card-img-top" src={require('./img/包裝 2.png')} alt=""></img>
               </Link>
          </div>
          <div>
              <p>咖啡豆</p>
              <p class="rCardPrice">$499</p>
          </div>
    </>
  );
}

export default RecCard