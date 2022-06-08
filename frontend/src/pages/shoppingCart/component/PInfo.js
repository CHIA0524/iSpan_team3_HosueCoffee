import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../pay1.css';
import { VscChromeClose } from "react-icons/vsc";
import Delsweetalert from './Delsweetalert';
import Price from './price';





function PInfo(props){
   

    // 數量變數
    const [ subTotal, setsubTotal ]= useState(1)
    // 小計
    // const [ ptotal, setPtotal ]= useState(0)
    const {setPtotal, ptotal, thisTT } = props
    // const m = pmoney* Number(subTotal)
    
    //設定全部金額
    var TTmoney = 0;

useEffect(()=>{

},[])

    
    // TODO計數器資料傳遞
    
    // 接收localStorage上的購物車資料
    const [cartDetail,setCartDetail] = useState(JSON.parse(localStorage.getItem('sCarts')))
    console.log(cartDetail)
   
    // 接收資料庫資料
    const {datas} = props 

    // 計算datas的長度
    const datamath=datas.length
    console.log(datamath)
    // 計算cartDetail的長度
    const cartDetailmath=cartDetail.length
    // 建立一個空陣列

    var shopCart=[];
    console.log(datas);
    for( let c=0; c<cartDetailmath; c++){
    for( let i=0; i<datamath; i++){     
            
            if(datas[i].p_id === cartDetail[c].id)
            { 
                var newdata = datas[i]  
                var newarr = newdata
                shopCart.push(newarr)
            } 
        }
    }

return(
    <>

    {shopCart.map((pinfo,i)=>{
        
        // 設定圖片路徑
        const price = Number(pinfo.p_price)
        console.log(price)
        const productId=pinfo.p_id
        const img1 = (pinfo.p_name)
        const total = cartDetail[i].ShopCounter
        const update = total 
       
    

         TTmoney=TTmoney+(Number(total)*price)
        setPtotal(TTmoney)

        return(         
        <div className="payInfoAll"  key={pinfo.id}>
            <div className="payInfo">
                <div className="payInfoContent">
                    <div className="col-2">
                        <img className="packageImg"  src={require('../img/'+ img1 +'.jpg')} alt="fake">   
                        </img>
                    </div>
                    <div className="col-4 pName">
                        <p>{pinfo.p_name}</p>
                    </div>
                    <Price update={update} price={price}  total={total} 
                        setPtotal={setPtotal} ptotal={ptotal} productId={productId} i={i} cartDetail={cartDetail} setCartDetail={setCartDetail}
                    />
                   
                </div>
                <hr></hr>   
            </div>
      {/* 手機版 */}
            <div className="mPayInfoContent">
                <div className="box">
                    <Link href="" onClick={Delsweetalert}><VscChromeClose size={20} productId={productId} thisTT={thisTT} price={price} ptotal={ptotal} setPtotal={setPtotal} i={i} /></Link>
                    <div className="boxContent">
                        <div className="imgPart">
                        <img className="packageImg"  src={require('../img/'+ img1 +'.jpg')} alt="fake">   
                        </img>
                            <div className="mPName">
                                <p>{pinfo.p_name}</p>
                                
                            </div>
                        </div>

                        <Price update={update} price={price}  total={total} 
                        setPtotal={setPtotal} ptotal={ptotal} productId={productId} i={i} />    
                     

                    </div> 
                </div>
            </div>
       </div>
       )
     })
     }
   </>   
    )    
    

}

export default PInfo