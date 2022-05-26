import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import './brandproduct.css';
import './component/popup.css';
import ProductCard from './component/ProductCard';
import Aside from './component/Aside';


function ShopIndex(){
    const[amount, setAmount]= useState(1)

    const params=useParams();
    //抓網址後的id
    console.log(params)
      // 向後端請求資料
    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{
      const response = await fetch(`http://localhost:3001/shop#id?id=${params.id}`);
      const results = await response.json();
      setDatas(results);
    }
    useEffect(()=>{
      fetchData();
    },[])
        
    if(datas.length>0){
      console.log(datas[0]);
      const PD=datas[0];
      const{id,p_name,price,content}=PD
    //   console.log(p_name);
    
    const img1=(p_name);
    // const id =(id);
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
                {/* <!-- popup 區 --> */}
                <div id={id} class="popupShow">
                    <div class="popup">
                        <a class="close" href="#">&times;</a>
                        <div class="productPopup">
                            <div class="popBox">
                                <div class="popBoxContent">
                                    <div class="imgPart">
                                        <img class="packageImg" src={require('./img/'+img1+'.jpg')} alt=""></img>
                                    </div>
                                    <div class="popContent">
                                        <div class="popText">
                                            <p>{p_name} </p>
                                            <p>${price}</p>
                                        </div>
                                        <div class="popBtn">
                                            <div class="popAddNum">
                                              <button class="buttonNum" onClick={() =>{if(amount>1){ setAmount(amount - 1)}}}>-</button>
                                              <div>{amount}</div>
                                              <button class="buttonNum" onClick={() =>{
                                              setAmount(amount + 1)}} >+</button>
                                            </div>
                                            <div class="popAddCart">
                                                <a href=""><button type="button" class="addCartBtn" id="subtract">加入購物車
                                                    </button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    </div>
    </>
  );
}
}

export default ShopIndex