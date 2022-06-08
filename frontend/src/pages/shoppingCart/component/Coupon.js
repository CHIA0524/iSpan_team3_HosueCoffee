import React, { useEffect, useState } from 'react'



function Coupon(props){
    //用來儲存本頁資料
    const [datas, setDatas ] = useState([])

    const fetchData = async()=>{
        //讀取本頁資料，並寫入datas
        const response = await fetch('http://localhost:3001/shoppingcart/coupon');
        const results = await response.json();
        setDatas(results);
        
    }
  
    useEffect(()=>{
        fetchData();
    },[])
   
return(
    <>   
         <div class="Coupon">
           <select class="form-select form-select-sm                     CouponDetail" 
        //    name="article"
        //     id="article"
            
            >
            {/* 連資料庫 */}
            {datas.map((C,CP_id)=>{
                console.log(CP_id)
                        
                        return(
                                  <option className="selText" value="shop">{C.coupon_title}</option>
                                  
                                  )
                      })}
           </select>
        </div>
    </>
)
}
export default Coupon;