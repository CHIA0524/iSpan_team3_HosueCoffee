import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Swal from 'sweetalert2'

import { useState, useEffect, useCallback } from 'react';
import '../pay1.css';
import { VscChromeClose } from "react-icons/vsc";
import Delsweetalert from './Delsweetalert';
import Price from './price';





function PInfo(props){
    if(localStorage.getItem('sCarts')==null){
        localStorage.setItem('sCarts',JSON.stringify([]))
    }
    

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
    //console.log.log(cartDetail)
    // 接收資料庫資料

    const {datas, setcarNum} = props 


    // 計算datas的長度
    const datamath=datas.length
    //console.log.log(datamath)
    // 計算cartDetail的長度
    const cartDetailmath=cartDetail.length
    // 建立一個空陣列

    var shopCart=[];
    //console.log.log(datas);
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


    useEffect(()=>{
// 計算cartDetail的長度
const cartDetailmath=cartDetail.length
// 建立一個空陣列

var shopCart=[];
//console.log.log(datas);
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
    },[])

    
return(
    <>

    {shopCart.map((pinfo,i)=>{
        // 設定圖片路徑
        const price = Number(pinfo.p_price)
        //console.log.log(price)
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

                    <div className="col-2 infoBox">
                        <img className="packageImg1"  src={require('../img/'+ img1 +'.jpg')} alt="fake">   

                        </img>
                    </div>
                    <div className="col-2 pName">
                        <p>{pinfo.p_name}</p>
                    </div>

                    <Price update={update} price={price}  total={total}  setcarNum={setcarNum}

                        setPtotal={setPtotal} ptotal={ptotal} productId={productId} i={i} cartDetail={cartDetail} setCartDetail={setCartDetail}
                    />
                   
                </div>
                <hr></hr>   
            </div>
      {/* 手機版 */}
            <div className="mPayInfoContent">
                <div className="box">

                    <Link href="" onClick={()=>{  
                          
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
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
        removePinfo.fire(
        '取消',
        '商品未刪除 :)',
        'error'
      )
    }
  })
  }} ><VscChromeClose size={20} /></Link>

                    <div className="boxContent">
                        <div className="imgPart">
                        <img className="packageImg"  src={require('../img/'+ img1 +'.jpg')} alt="fake">   
                        </img>
                            <div className="mPName">
                                <p>{pinfo.p_name}</p>
                                
                            </div>
                        </div>

                        <Price update={update} price={price}  total={total} 

                        setPtotal={setPtotal} ptotal={ptotal} productId={productId} i={i} cartDetail={cartDetail} setCartDetail={setCartDetail} />    

                     

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