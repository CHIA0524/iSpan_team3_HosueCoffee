import React, { useEffect, useState } from 'react'



function Coupon(props){
    //用來儲存本頁資料
    const{ ptotal, setCtotal, ctotal } = props
    
    


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

    // const find = (event) => {
    //     event.preventDefault();
    //     if (event.target.value === "{C.coupon_code}") {
    //         console.log(C.coupon_code)
    //         const a = Number(C.coupon_code)/100
    //         const b = ptotal* a
    //         document.querySelector('.receiverInfo').style.display="block"
    //         }
             
    //     }

    const CouChange=()=>{
         var a=document.querySelector(".CouponDetail").value
        // console.log(a)
        // 運算折扣
        const b = Number(a)/100
        // console.log(b)
            const c = Math.round(ptotal* b)
        // console.log(c)
        setCtotal(c)

    }
    


return(
    <>   
    
         <div class="Coupon">
           <select class="form-select form-select-sm                     CouponDetail" onChange={CouChange} >
           <option className="selText" value="0" >不使用優惠券</option>
            {/* 連資料庫 */}
            {datas.map((C,CP_id)=>{
                {/* console.log(CP_id) */}
                        
                        return(
                                  <option className="selText" value={C.coupon_code}>{C.coupon_title}</option>
                                  
                                  )
                      })}
           </select>
        </div>
    </>
)
}
export default Coupon;