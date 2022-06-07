import Delsweetalert from './Delsweetalert';
import { useState } from 'react';
function Price(props){
    const {update,price,total,setPtotal, ptotal,TTmoney,productId,i}=props;
    const[amount, setAmount]= useState(0)

    const [thisTT,setThisTT]=useState(Number(total))
    console.log(ptotal);
        //加入購物車更新
        const updateCart = (dd,ee,cc)=>{
            //加入購物車的計算
            let o = 0
            //localStorage的變數
            const sCart = {
                id: productId,
                ShopCounter:dd,
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
      
        }
return(
    <>
                    <div className="col-3 numberDesk ">
                       <p>數量：</p>
                       <div className="addPNum">
                          <button className="PNumL" onClick={() =>{
  
                            if(thisTT>1){
                             setThisTT(thisTT-1)
                             setPtotal(ptotal-price)
                            const dd = amount -1 
                             updateCart(dd); 
                            }
                             }}>-</button>
                            <div>{thisTT}</div>
                            <button className="PNumR" onClick={() =>{
                             setThisTT(thisTT+1)
                             setPtotal(ptotal+price)
                            const cc = amount + 1 
                            updateCart(cc); 
                           }
                           }>+</button>
                      </div>
                    </div>
                  
                    {/* 刪除     */}
                   <Delsweetalert  productId={productId} thisTT={thisTT} price={price} ptotal={ptotal} setPtotal={setPtotal} i={i}/>
                   
                   {/* 商品小計 */}
                    <div className="col-1">
                        <p>${price*thisTT}</p>
                    </div>
                {/* 手機版 */}
                    <div class="number">
                        <div class="mAddNum">
                            <button className="buttonNum" onClick={() =>{
                            setThisTT(thisTT-1)
                             setPtotal(ptotal-price)
                            const dd = amount -1 
                             updateCart(dd); 
                            }
                             }>-</button>
                            <div>{total}</div>
                           <button className="buttonNum"onClick={() =>{
                             setThisTT(thisTT+1)
                             setPtotal(ptotal+price)
                            const cc = amount + 1 
                            updateCart(cc); 
                           }
                           } >+</button>
                        </div>
                        <h3>${price* Number(total)}</h3>
                      </div>     
    </>
)
}
export default Price;