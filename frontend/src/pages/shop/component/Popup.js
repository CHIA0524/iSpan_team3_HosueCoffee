import { BrowserRouter as Router, Route, Link, Switch ,useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../brandproduct.css';
import './popup.css';



function Popup(props){
  const {datas, productId, css ,setcss} = props;
    
    const[amount, setAmount]= useState(1)

    // const params=useParams();
    //抓網址後的id
    // console.log(params)
        
    if(datas.length>0){
      console.log(productId);
      
   

 
  
    
    return(
      <>
             {/* <!-- popup 區 --> */}
             <div class="popupShow" style={css}>
                    <div class="popup">
                        <div class="close"  
                        onClick={() =>{
                          setcss({visibility: 'hidden' , opscity : '0'}      )                  
                        }}>&times;</div>
                        <div class="productPopup">
                            <div class="popBox">
                                <div class="popBoxContent">
                                    <div class="PimgPart">
                                        <img  src={require('../img/'+datas[productId-1].p_name+'.jpg')} alt=""></img>
                                    </div>
                                    <div class="popContent">
                                        <div class="popText">
                                            <p>{datas[productId-1].p_name}</p>
                                            <p>${datas[productId-1].price}</p>
                                        </div>
                                        <div class="popBtn">
                                            <div class="popAddNum">
                                              <button class="buttonNum" onClick={() =>{if(amount>1){setAmount(amount - 1)}}}>-</button>
                                              <div>{amount}</div>
                                              <button class="buttonNum" onClick={() =>{
                                              setAmount(amount + 1)}} >+</button>
                                            </div>
                                            <div class="popAddCart">
                                                <a href="/"><button type="button" class="addCartBtn" id="subtract">加入購物車
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