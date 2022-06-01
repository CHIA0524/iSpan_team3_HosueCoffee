import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../brandproduct.css';
import './popup.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import ProductDetail from '../ProductDetail';


function ProductCard(props){
    const {datas, setcss, setProductId} = props;
   const [buttonpopup,setButtonpopup] = useState(false);
   const [ cart, setcart] =useState([]);
   
   const heartClick = ()=>{
     const a= document.querySelector('.heart').check
     console.log(a)
     if(a==true){
       document.querySelector('.heart3').style.display="block"
       document.querySelector('.heart2').style.display="none"

     }else{
      document.querySelector('.heart2').style.display="block"
      document.querySelector('.heart3').style.display="none"

     }
    }   

    
    return(
      <>
       {datas.map((pCard,i)=>{
         {/* console.log(pCard.id); */}
         
         //照片設置的變數
         const img1=(pCard.p_name);
         //抓popup的變數
         const id='#'+(pCard.p_id);
        return(
          
          <div className="pCardWrap" key={pCard.id}>
             <div className="card shopCard mb-4">
                 <div className="package">
                    <Link to= {`/shop/ProductDetail/${pCard.p_id}`}>
                    <div className='pImg'>
                    <img className="card-img-top " src={require('../img/'+img1+'.jpg')} alt=""></img>
                    </div>
                    </Link>
                 </div>
                 <div className="cardName d-flex justify-content-between">
                     <div >
                          <p className="pText">{pCard.p_name}</p>
                      </div>
                      <div className="pIcon">
                          
                           <button className="heart" onClick={heartClick}> 
                           <AiOutlineHeart className="heart2" size={24}
                           /><AiFillHeart className="heart3" size={24} color="red"/></button>
                       
                           <div className="d-flex shoppingCart" key={pCard.p_id}
                           type="button" onClick={() => {
                             //因id從200001開始，故需扣除，才能使popup抓到
                             setProductId(pCard.p_id-200000)
                            setcss({visibility: 'visible' , opacity : '1'})
                           }}
                           >
                           <AiOutlineShoppingCart size={24}  />
                           </div>
                           
                      </div>
                      </div>
              </div>
              <div className="cardPrice">
              
              <p className="pText">${pCard.p_price}</p>
              </div>
          </div>
          
          )
      })}
  </>
  );
}

export default ProductCard