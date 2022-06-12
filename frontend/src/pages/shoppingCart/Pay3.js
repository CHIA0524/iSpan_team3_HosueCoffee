import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom'
import './pay3.css';
import Steps3 from './component/Steps3';
import CCard from './component/CCard';





function Pay3(){

    const params = useParams()
  const [datas,setDatas] = useState([])
  const [payMoney,setPayMoney] = useState([])
  const [shipPay, setShipPay] = useState()
    const o_id=params.id
    var payM=0
  const fetchData=async()=>{
        console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/shoporder/Shoppingcart/id?o_id=${o_id}`)
        const results=await response.json();  
       setDatas(results);
       console.log(results)
       const res = await fetch(`${process.env.REACT_APP_API_URL}/morder/odList/detailed?o_id=${o_id}`)
        const result=await res.json();
        console.log(result)
        for(var m = 0 ; m<result.length;m++ ){
            console.log(result[m]);
            const price=result[m].p_price;
        const qty=result[m].qty;
        payM=payM+(price*qty)  
        console.log(payM);  
        }
        var payship=0
        const shipprice =()=> {
            if(results[0].shipment = "黑貓"){
                if(payM > 1500){
                setShipPay(0)
                payship=0
                }else{
                setShipPay(80)
                payship=80
                }
            }else{
                if(payM > 1500){
                    setShipPay(0)
                    payship=0
                    }else{
                    setShipPay(100)
                    payship=100
                    }
            }}
            console.log(payship)
        const coupon = results[0].used_coupon
        const point = results[0].used_points
        console.log(coupon)
        console.log(point)
        
        
        const finalPay = payM + payship - coupon - point
        setPayMoney(finalPay)
          }
   useEffect(()=>{
      fetchData();
  },[])

   
  return(
      <>
      <div className="payThree">
         <div className="container main">
         <Steps3/>
         <div className="showMoney">付款金額：&emsp;${payMoney}</div>
         <div></div>

         <div className="pCardPart">
         <CCard />
         
         <div className="finalBtn" >
                               {/* <button  className="btn btn-primary btn-lg btn-block pbtn " onClick={preStep}
                              >上一步 </button> */}
                              <button type="button" className=" fbtn " 
                            //   onClick={complete}
                            // onClick={cardStep}
                              >結帳 </button>
         </div>
         </div>
         </div>
         </div>  
     </>
  );
}

export default Pay3