import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../productdetail.css';
import ProductDetail from '../ProductDetail';



function RecCard(){
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
       {datas.map((PCard,i)=>{
         console.log(PCard.id);
       
          
         return(
             <div className="pCardWrap" key={PCard.id}>
             <div className="card recCard">
             <div class="rPackage">
                <Link to= {`/shop/ProductDetail/${PCard.id}`}>
                  <img class="card-img-top" src={require('../img/包裝 2.png')} alt=""></img>
                  </Link>
             </div>
             <div>
                 <p>{PCard.p_name}</p>
                 <p class="rCardPrice">${PCard.price}</p>
             </div>
             </div>
             </div>
        )
      })}
    </>
  );
}

export default RecCard