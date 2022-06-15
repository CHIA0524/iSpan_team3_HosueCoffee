import { BrowserRouter as Router, Route, Link, Switch ,useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../brandproduct.css';
import './popup.css';
import AddSweet from './AddSweet';



function Popup(props){
   // 接收父層資料

   const {datas, productId,Alldatas, css ,setcss,setcarNum} = props;    

    //數量歸1  
    const[amount, setAmount]= useState(1)
    // const params=useParams();
    //抓網址後的id
    // console.log(params)
    // console.log("datas");
    //本頁資料
    // console.log(datas);
    //全部資料
    // console.log(Alldatas);
    // console.log("datas");
    //加入購物車更新
    const updateCart = ()=>{
      //加入購物車的計算
      let o = 0
      //localStorage的變數
      const sCart = {
          id: productId+200000,
          ShopCounter:amount,
      }
      //轉存為JSON 存至LOCAL STORAGE
      let sCarts = localStorage.getItem("sCarts") ? JSON.parse(localStorage.getItem("sCarts")) : []
      for (let i = 0; i < sCarts.length; i++) {
          let item = sCarts[i]    
          if (item.id === sCart.id) {
              item.ShopCounter += sCart.ShopCounter
          } else {
              o = o + 1
          }
      }
      if (o === sCarts.length) {
        sCarts.push(sCart)
      }
      localStorage.setItem("sCarts", JSON.stringify(sCarts))

      setcarNum(JSON.parse(localStorage.getItem('sCarts')).length)



  }
    const [ShopCounter, setShopCounter] = useState(1) 
     // 準備傳至OnlineCheckPage
    if(Alldatas.length>0){  
    //   console.log(productId);
      // const PopupId=productId-200000;
      // console.log(PopupId);

    return(
      <>
             {/* <!-- popup 區 --> */}
             <div class="PpopupShow" style={css}>
                    <div class="Ppopup">
                        <button class="Pclose"  
                        onClick={() =>{
                          setcss({visibility: 'hidden' , opscity : '0'} ) 
                          setAmount (1)
                          
                          }}
                        >&times;</button>
                        <div class="productPopup">
                            <div class="PpopBox">
                                <div class="PpopBoxContent">
                                    <div class="PimgPart">
                                        <img src={require('../img/'+ Alldatas[productId-1].p_name +'.jpg')} alt=""></img>
                                    </div>
                                    <div class="PpopContent">
                                        <div class="PpopText">
                                            <p>{Alldatas[productId-1].p_name}</p>
                                            <p>${Alldatas[productId-1].p_price}</p>
                                        </div>
                                        <div class="PpopBtn">
                                            <div class="PpopAddNum">
                                              <button class="PbuttonNum" onClick={() =>{if(amount>1){setAmount(amount - 1)}}}>-</button>
                                              <div>{amount}</div>
                                              <button class="PbuttonNum" onClick={() =>{
                                              setAmount(amount + 1)}} >+</button>
                                            </div>
                                            <div class="PpopAddCart">
                                                <div type="button" class="PaddCartBtn" id="subtract" 
                                                onClick={() =>{
                                                setcss({visibility: 'hidden' , opscity : '0'} ) ;
                                                updateCart(); 
                                                setAmount (1);
                                                AddSweet()}}
                                                >
                                                加入購物車
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