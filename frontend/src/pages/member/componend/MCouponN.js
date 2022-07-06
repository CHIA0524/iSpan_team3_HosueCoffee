import { useEffect,useState } from "react";
function MCouponN(props){
    const {setMCNO}=props
    const [datas,setDatas] = useState([])
    const thismemberid=localStorage.getItem(true)
    const fetchData=async()=>{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/morder/couNo?fk_m_id=${thismemberid}`)
        const results=await response.json();
        setDatas(results);
        // console.log(results.length)
        setMCNO(results.length)
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
             <div class="container">
                  <div class="row">
                    <div class="col">
                      <h5>{coupon_title}</h5>
                      <div>使用期限</div>
                      <div>至{coupon_end_date}</div>
                    </div>
                    <div class="col">
                      <h3>已過期</h3>
                    </div>
                  </div>
                    <br></br>
                </div>
                )
            })}
        </>
    )
}
export default MCouponN;
