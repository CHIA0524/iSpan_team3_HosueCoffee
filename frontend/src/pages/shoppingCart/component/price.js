import Swal from 'sweetalert2'

import { useState } from 'react';
function Price(props){

    const {update,price,total,setPtotal, ptotal,TTmoney,productId,i,cartDetail,setCartDetail,setcarNum}=props;
    //金額千分位
    const internationalNumberFormat = new Intl.NumberFormat('en-US')

    // const datas1 = JSON.parse(localStorage.getItem('sCarts'))
    const [datasNEW, setdatasNEW] = useState(cartDetail)
    const[amount, setAmount]= useState(0)

    const [thisTT,setThisTT]=useState(Number(total))
    //console.log.log(ptotal);
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
            setCartDetail(JSON.parse(localStorage.getItem('sCarts')))

      setcarNum(JSON.parse(localStorage.getItem('sCarts')).length)

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

                            <div>{total}</div>

                            <button className="PNumR" onClick={() =>{
                             setThisTT(thisTT+1)
                             setPtotal(ptotal+price)
                            const cc = amount + 1 
                            updateCart(cc); 
                           }
                           }>+</button>
                      </div>
                    </div>

                    <div className="col-2 wedTotal">
                        <p>${price}</p>

                    </div>

                   <div className="col-2">
                        <button className="deletBtn"  onClick={()=>{  
                          
                          const removePinfo = Swal.mixin({
                           customClass: {
                               confirmButton: 'btn btn-success',
                               cancelButton: 'btn btn-danger'
                           },
                           buttonsStyling: false
                           })
                           removePinfo.fire({
                               title: '刪除',
                               text: "你確定要刪除嗎？",
                               icon: 'warning',
                               showCancelButton: true,
                               confirmButtonText: '是的，刪除!',
                               cancelButtonText: '取消!',
                               reverseButtons: true
                           }).then((result) => {
                               if (result.isConfirmed) {
                                 Swal.getConfirmButton(
                                   removePinfo.fire(
                                       '刪除!',
                                       '商品已刪除.',
                                       'success'
                                       )
                                   )
        

                        const data = JSON.parse(localStorage.getItem('sCarts'))
            
                        const newData = data.filter((v,i)=> v.id!==productId)
                       
                        localStorage.setItem("sCarts", JSON.stringify(newData))
                        setCartDetail(newData)
                       
                        setPtotal(ptotal-(price*thisTT));
                        setcarNum(JSON.parse(localStorage.getItem('sCarts')).length)
            
                     } else if (
                       result.dismiss === Swal.DismissReason.cancel
                     ) {
                         removePinfo.fire(
                         '取消',
                         '商品未刪除 :)',
                         'error'
                       )
                     }
                     })
                     }}>刪除</button>
                    </div>
                   
                   {/* 商品小計 */}

                    <div className="col-1 wedTotal">
                        <p>${internationalNumberFormat.format(price*total)}</p>

                    </div>
                {/* 手機版 */}
                    <div class="number">
                        <div class="mAddNum">
                            <button className="buttonNum" onClick={() =>{
                             if(thisTT>1){
                             setThisTT(thisTT-1)

                             setPtotal(ptotal-price)
                            const dd = amount -1 
                             updateCart(dd); 
                            }

                            }
                             }>-</button>
                            <div className="mnumtotal">{total}</div>
                           <button className="buttonNum" onClick={() =>{

                             setThisTT(thisTT+1)
                             setPtotal(ptotal+price)
                            const cc = amount + 1 
                            updateCart(cc); 
                           }
                           } >+</button>
                        </div>
                        <h4 className="mtotaltext">${internationalNumberFormat.format(price*total)}</h4>

                      </div>     
    </>
)
}
export default Price;