import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import './brandproduct.css';
import './component/popup.css';
import ProductCard from './component/ProductCard';
import Aside from './component/Aside';
import Popup from './component/Popup';


function ShopIndex(){
    const[amount, setAmount]= useState(1)

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
  
    

  return(
    <>
     {datas.map((pCard,i)=>{
         console.log(pCard.id);
         
         const img1=(pCard.p_name);
         const id='#'+(pCard.id);
          
        return(
          <div key={pCard.id}>
        
                    <div class="mShop">
                        <p>商店</p>
                    </div>
                    
                
                    <div class="container">
                        <div class="row">
                            <Aside />
                
                            <main class="pMain col ">
                                <div class="row justify-content-center">
                                    <ProductCard datas={datas}/>  
                                </div>                                
                                <Popup datas={datas}/>
                               
                            </main>
                        </div>
                        </div>
           </div>         
                    )
      })}
     </>
  );
}

export default ShopIndex