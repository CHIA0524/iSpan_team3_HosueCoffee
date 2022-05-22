import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './pay1.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";



function pay1(){
   
  return(
    <>
       <div class="card mb-4">
           <div class="package">
               <Link to= "/shop/ProductDetail">
               <img class="card-img-top" src={require('./img/包裝 2.png')} alt=""></img>
               </Link>
           </div>
           <div class="cardName d-flex justify-content-between">
               <div>
                   <p>咖啡豆</p>
               </div>
               <div>
               
                    <Link to=""> <AiOutlineHeart /></Link>
                   <Link to=""> <AiOutlineShoppingCart /></Link>
               </div>
           </div>
           <p class="cardPrice">$499</p>
       </div>
    </>
  );
}

export default pay1