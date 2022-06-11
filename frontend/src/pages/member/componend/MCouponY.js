import { useEffect,useState } from "react";
function MCouponY(props){
    const {setMCYES}=props
    const [datas,setDatas] = useState([])
    const thismemberid=localStorage.getItem(true)
    const fetchData=async()=>{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/morder/couYes?fk_m_id=${thismemberid}`)
        const results=await response.json();
        setDatas(results);
        console.log(results.length)
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
                  <div>
             <div class="container col-3None">
                  <div class="row">
                    <div class="col">
                      <h5>{coupon_title}</h5>
                      <div>使用期限</div>
                      <div>至{coupon_end_date}</div>
                    </div>
                    <div class="col">
                      <h3>{off}折</h3>
                    </div>
                  </div>
                    <br></br>
                </div>
             <div class="container col-wn">
                  <div class="row">
                      <h5>{coupon_title}</h5>
                    <div class="col">
                      <div>使用期限</div>
                      
                    </div>
                    <div class="col">
                      <h5>{off}折</h5>
                    </div>
                    <div>{coupon_end_date}</div>
                  </div>
                    <br></br>
                </div>
                </div>
             
                )
            })}
        </>
    )
}
export default MCouponY;
