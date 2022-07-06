import { useEffect,useState } from "react";
function MCouponY(props){
    const {setMCYES}=props
    const [datas,setDatas] = useState([])
    const thismemberid=localStorage.getItem(true)
    const fetchData=async()=>{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/morder/couYes?fk_m_id=${thismemberid}`)
        const results=await response.json();
        setDatas(results);
        // console.log(results.length)
        setMCYES(results.length)
    }
    
    useEffect(()=>{
        fetchData(); 
    },[])
    
    return(
        <>
         {datas.length> 0 && datas.map((MCYES,i)=>{
                
                const{coupon_title,coupon_end_date,coupon_code}=MCYES;
                const off=100-coupon_code
                
                return(
                 
             <div class="container couponCard">
                  <div class="row">
                      <h5>{coupon_title}</h5>
                    <div class="col">
                      <div>使用期限</div>
                      {/* <div>至{coupon_end_date}</div> */}
                    </div>
                    <div class="col">
                    <div className="end_date">{coupon_end_date}</div>
                    </div>
                  </div>
                    <hr></hr>
                </div>
        
             
                )
            })}
        </>
    )
}
export default MCouponY;
