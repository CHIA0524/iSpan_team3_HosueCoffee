import { useState, useEffect, useCallback,useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import './brandproduct.css';
import './component/popup.css';
import ProductCard from './component/ProductCard';
import Aside from './component/Aside';
import Popup from './component/Popup';


function ShopKenya(){
  //抓到點擊商品的id
const [productId, setProductId] = useState(2)
console.log(productId)
//控制ＰＯＰＵＰ的ＣＳＳ
const [css, setcss] = useState()

const[amount, setAmount]= useState(1)

     // 向後端請求資料
     const [datas, setDatas ] = useState([])
     const fetchData = async()=>{
       const response = await fetch('http://localhost:3001/shop/kenya');
       const results = await response.json();
       setDatas(results);
     }
     useEffect(()=>{
       fetchData();
     },[])
    //  const handleClick = (pCard)=>{
    //  console.log(pCard)
    // }
     
    //點選以外視窗，關閉popup
   
    

  return(
    <>
     {/* {datas.map((pCard,i)=>{
         console.log(pCard.id);
         
         const img1=(pCard.p_name);
         const id='#'+(pCard.id); */}
          
        {/* return( */}
          {/* <div key={pCard.id}> */}
       
                    <div class="mShop">
                        <p>商店</p>
                    </div>
                    
                
                    <div class="container" >
                        <div class="row" >
                            <Aside />
                
                            <main class="pMain col ">
                                <div class="row justify-content-center">
                                    <ProductCard datas={datas} setProductId={setProductId} setcss={setcss}/>  
                                </div>                                
                                <Popup datas={datas} productId={productId} setcss={setcss} css={css} />
                               
                            </main>
                        </div>
                        </div>
           {/* </div>         
                    )
       })} */}
     </>
  ); 
}

export default ShopKenya