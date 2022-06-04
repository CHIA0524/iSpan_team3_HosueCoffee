import { BrowserRouter as Router, Route, Link, Switch ,useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../brandproduct.css';
import './popup.css';
import AddSweet from './AddSweet';



function Popup(props){
  const {datas, productId,Alldatas, css ,setcss} = props;
    
    //數量歸1  
    const[amount, setAmount]= useState(1)
    // const params=useParams(); 
    //抓網址後的id
    // console.log(params)
    // console.log("datas");

    //本頁資料
    console.log(datas);
    //全部資料
    console.log(Alldatas);
    // console.log("datas");
    
    if(Alldatas.length>0){
      
      console.log(productId);
      // const PopupId=productId-200000;
      // console.log(PopupId);
  
      
   
      
    
    return(
      <>
             {/* <!-- popup 區 --> */}
             <div class="popupShow" style={css}>
                    <div class="popup">
                        <button class="close"  
                        onClick={() =>{
                          setcss({visibility: 'hidden' , opscity : '0'} ) 
                          setAmount (1)
                          
                          }}
                        >&times;</button>
                        <div class="productPopup">
                            <div class="popBox">
                                <div class="popBoxContent">
                                    <div class="PimgPart">
                                        <img src={require('../img/'+ Alldatas[productId-1].p_name +'.jpg')} alt=""></img>
                                    </div>
                                    <div class="popContent">
                                        <div class="popText">
                                            <p>{Alldatas[productId-1].p_name}</p>
                                            <p>${Alldatas[productId-1].p_price}</p>
                                        </div>
                                        <div class="popBtn">
                                            <div class="popAddNum">
                                              <button class="buttonNum" onClick={() =>{if(amount>1){setAmount(amount - 1)}}}>-</button>
                                              <div>{amount}</div>
                                              <button class="buttonNum" onClick={() =>{
                                              setAmount(amount + 1)}} >+</button>
                                            </div>
                                            <div class="popAddCart">
                                                <div type="button" class="addCartBtn" id="subtract" 
                                                onClick={() =>{
                                                setAmount (1);AddSweet()}}
                                                >加入購物車
                                                  </div>
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
}
}

export default Popup