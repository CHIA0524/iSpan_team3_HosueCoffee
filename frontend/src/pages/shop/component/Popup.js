import { BrowserRouter as Router, Route, Link, Switch ,useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../brandproduct.css';
import './popup.css';



function Popup(){
    
    const[amount, setAmount]= useState(1)

    const params=useParams();
    //抓網址後的id
    // console.log(params)
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
      // console.log(datas[0]);
      const PD=datas[0];
      const{id,p_name,price}=PD
    //   console.log(p_name);
    // console.log(id);
    
    const img1=(p_name);
    const pid='#'+(id);
  
    
    return(
      <>
             {/* <!-- popup 區 --> */}
             <div id={pid} class="popupShow">
                    <div class="popup">
                        <a class="close" href="#">&times;</a>
                        <div class="productPopup">
                            <div class="popBox">
                                <div class="popBoxContent">
                                    <div class="imgPart">
                                        <img class="packageImg" src={require('../img/'+img1+'.jpg')} alt=""></img>
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
          
          
     
  </>
  );
}}

export default Popup