import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './brandproduct.css';
import './popup.css';
import { AiOutlineShoppingCart } from "react-icons/di";

function ProductCard(){


  return(
    <>
       <div class="card mb-4">
           <div class="package">
               <Link to="">
               <img class="card-img-top" src={require('./img/包裝 2.png')} alt=""></img>
               </Link>
           </div>
           <div class="cardName d-flex justify-content-between">
               <div>
                   <p>咖啡豆</p>
               </div>
               <div>
                    <div> <AiOutlineShoppingCart /></div>
                   <div> <AiOutlineShoppingCart /></div>
               </div>
           </div>
           <p class="cardPrice">$499</p>
       </div>
    </>
  );
}

export default ProductCard