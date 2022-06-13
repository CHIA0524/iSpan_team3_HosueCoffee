import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../brandproduct.css';
import './popup.css';

import Heart from './heart';
import ProductDetail from '../ProductDetail';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiColorFill } from 'react-icons/bi';



function ProductCard(props){
   const {datas, setcss, setProductId, auth,datasPMF} = props;
  
   //  const [buttonpopup,setButtonpopup] = useState(false);
  //  const [ cart, setcart] =useState([]);
  //  const [ liked, setLiked] =useState([true]);
  
   //  抓取member的ＩＤ
  //  const memeId=localStorage.getItem(true)
  //  抓取member的ＩＤ
  //  const thismemberid=localStorage.getItem("true"); 
  //   設定收藏的value
  // const [whishList,setWishList]= useState()


    
    return(
      <>
       {datas.map((pCard,i)=>{
         {/* console.log(pCard.id); */}
         const pt_id=pCard.p_id
         const pt_name=pCard.p_name
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
                 <div className="pCardName d-flex justify-content-between">
                     <div >
                          <p className="pText">{pCard.p_name}</p>
                      </div>
                      <div className="pIcon">
                          {/* 收藏 */}
                          <Heart pt_id={pt_id}  datasPMF={datasPMF} auth={auth}/>


                           {/* 快速加入購物車 */}
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