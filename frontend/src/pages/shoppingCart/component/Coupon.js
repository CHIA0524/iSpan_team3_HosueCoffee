import React, { useEffect, useState } from 'react'



function Coupon(props){
    //用來儲存本頁資料
    const [datas, setDatas ] = useState([])
    const thismemberid=localStorage.getItem(true)
    const fetchData = async()=>{
        //讀取本頁資料，並寫入datas
        const response = await fetch(`http://localhost:3001/shoporder/coupon?fk_m_id=${thismemberid}`);
        const results = await response.json();
        setDatas(results);
        console.log(results);
        
    }
  
    useEffect(()=>{
        fetchData();
    },[])
   
return(
    <>   
         <div class="Coupon">
           <select class="form-select form-select-sm                     CouponDetail" 
            >
            {/* 連資料庫 */}
            {datas.map((C,CP_id)=>{
                {/* console.log(CP_id) */}
                        
                        return(
                                  <option className="selText" value="{C.coupon_code}">{C.coupon_title}</option>
                                  
                                  )
                      })}
           </select>
        </div>
    </>
)
}
export default Coupon;