import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../brandproduct.css';
import './popup.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import ProductDetail from '../ProductDetail';
import { BiColorFill } from 'react-icons/bi';


function ProductCard(props){
    const {datas, setcss, setProductId, auth} = props;
   const [buttonpopup,setButtonpopup] = useState(false);
   const [ cart, setcart] =useState([]);
   const [ liked, setLiked] =useState([true]);
   const memeId=localStorage.getItem(true)
   
  const thismemberid=localStorage.getItem("true");

   //^設定收藏時的提示訊息^
   const [mailMessage, setMailMessage] = useState("");
    //設定收藏的value
  const [whishList,setWishList]= useState()


  //  確認是否已收藏
   const ConfirmedWish=async ()=>{

     //^取得資料庫使否有這筆EMAIL，若有回傳1，沒有回傳0^
  
        const response = await fetch(`${process.env.REACT_APP_API_URL}/account/checkmail?member_mail=${whishList}`);
        console.log(process.env.REACT_APP_API_URL);
        const results = await response.json();
        if(results.total === 0 ){
        //^如果接收到0^
            setMailMessage("信箱可使用");
            //^提示訊息顯示"信箱可使用"^
            document.querySelector('.CKNmail').style.color="#e4d2a3"
            //修改網頁版提示訊息顏色為正常顏色
            document.querySelector('.CKNmail_m').style.color="#4C3410"
            //修改手機版提示訊息顏色為正常顏色
        }else{
        //^如果接收到1^
            setMailMessage("信箱已被註冊");
            //^提示訊息顯示"信箱已被註冊"^
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
                 <div className="pCardName d-flex justify-content-between">
                     <div >
                          <p className="pText">{pCard.p_name}</p>
                      </div>
                      <div className="pIcon">
                          {/* 收藏 */}
                          {auth? 
                          <> <button className="heart" onClick={()=>{
                             alert("成功加入收藏") }} > 
                           <AiFillHeart className="heart3" size={24}       
                             
                           /></button>
                           </>
                           :
                           <> <button className="heart" > 
                           <AiFillHeart className="heart3" size={24}    onClick={()=>{
                             alert("登入方可收藏") }  }   
                           /></button></>}
                           
                       
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