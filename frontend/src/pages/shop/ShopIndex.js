import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import './brandproduct.css';
import './component/popup.css';
import ProductCard from './component/ProductCard';
import Aside from './component/Aside';
import Popup from './component/Popup';


function ShopIndex(){
    const[amount, setAmount]= useState(1)

    const params=useParams();
    //抓網址後的id
    console.log(params)
      // 向後端請求資料
    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{
      const response = await fetch(`http://localhost:3001/shop`);
      const results = await response.json();
      setDatas(results);
    }
    useEffect(()=>{
      fetchData();
    },[])
        
    if(datas.length>0){
    //   console.log(datas[0]);
      const PD=datas[0];
      const{id,p_name,price,}=PD
    //   console.log(p_name);
    
    const img1=(p_name);
    console.log(id);
  
    

  return(
    <>
    <div class="mShop">
        <p>商店</p>
    </div>
    

    <div class="container">
        <div class="row">
            <Aside />

            <main class="pMain col ">
                <div class="row justify-content-center">
                    <ProductCard />
                   
                </div>
                <Popup/>
            </main>
        </div>
    </div>
    </>
  );
}
}

export default ShopIndex