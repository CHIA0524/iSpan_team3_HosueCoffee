import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../brandproduct.css';
import './popup.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import ProductDetail from '../ProductDetail';


function ProductCard(){
    
    // 向後端請求資料
    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{
      const response = await fetch('http://localhost:3001/shop');
      const results = await response.json();
      setDatas(results);
    }
    useEffect(()=>{
      fetchData();
    },[])
    
   
    
    const [buttonpopup,setButtonpopup] = useState(false);
    
    return(
      <>
       {datas.map((pCard,i)=>{
         console.log(pCard.id);
         
         const img1=(pCard.p_name);
         const id='#'+(pCard.id);
          
        return(
          
          <div className="pCardWrap" key={pCard.id}>
             <div className="card shopCard mb-4">
                 <div className="package">
                    <Link to= {`/shop/ProductDetail/${pCard.id}`}>
                    <div className='pImg'>
                    <img className="card-img-top " src={require('../img/'+img1+'.jpg')} alt=""></img>
                    </div>
                    </Link>
                 </div>
                 <div className="cardName d-flex justify-content-between">
                     <div>
                          <p>{pCard.p_name}</p>
                      </div>
                      <div>
                           <Link to=""> <AiOutlineHeart size={20}/></Link>

                           <a href={id}>
                           <AiOutlineShoppingCart size={20}/>
                           </a>
                           
                      </div>
                      </div>
              </div>
              <div className="cardPrice">
              
              <p>${pCard.price}</p>
              </div>
          </div>
          
          )
      })}
  </>
  );
}

export default ProductCard