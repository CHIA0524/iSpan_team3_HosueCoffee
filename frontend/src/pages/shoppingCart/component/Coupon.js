import React, { useEffect, useState } from 'react'



function Coupon(props){
    //用來儲存本頁資料
    const{ ptotal, setCtotal, ctotal, setMC_id } = props
    
    


    const [datas, setDatas ] = useState([])
    const thismemberid=localStorage.getItem(true)
    const fetchData = async()=>{
        //讀取本頁資料，並寫入datas
        const response = await fetch(`http://localhost:3001/shoporder/coupon?fk_m_id=${thismemberid}`);
        const results = await response.json();
        setDatas(results);
        //console.log.log(results);
        
    }
  
    useEffect(()=>{
        fetchData();
    },[])

    

    const CouChange=()=>{
        var a=document.querySelector(".CouponDetail").value
       if(a==0){
           const c = Number(a)/100
           const d = Math.round(ptotal* c)

           setCtotal(d)
       }else{
           //取的會員優惠券id
           const b=a.substr(3,)
           //console.log.log(b)
           //回傳會員優惠券id
           setMC_id(b)

           //擷取優惠券折數
           const c=Number(a.substr(0,2))/100
           //console.log.log(c)

           //計算折購金額
           const d = Math.round(ptotal* c)
           //回傳折扣金額
           setCtotal(d)

       }
    }
    


return(
    <>   
    
         <div class="Coupon">
           <select class="form-select form-select-sm                     CouponDetail" onChange={CouChange} >
           <option className="selText" value="0" >不使用優惠券</option>
            {/* 連資料庫 */}
            {datas.map((C,CP_id)=>{
                {/* //console.log.log(CP_id) */}
                        
                        return(
                            <option className="selText" value={C.coupon_code+"+"+C.MC_id}>{C.coupon_title}</option>
                                  
                                  )
                      })}
           </select>
        </div>
    </>
)
}
export default Coupon;