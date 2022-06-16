import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";





const Totalpay = () => {


        const [datas, setDatas ] = useState([])
        const fetchData = async()=>{
                                const response = await fetch('http://localhost:3001/menu/oder');
                                const results = await response.json();
                                setDatas(results);
                        }
        useEffect(()=>{fetchData()
        },[])
    
    
    console.log(datas);
    if(datas.length>0){
    return(
            <>
            <div className="member2">
                    <span>金額統計</span>
                </div>
                <div className="member3">
                    <div className="memberBody3 memberTotal">
                        <div className="memberBodyIn2">
                            <span>小計</span>
                            <span>{datas[0].drink_total_price}</span>
                        </div>
                        <div className="memberBodyIn2">
                            <span>優惠卷折抵</span>
                            <span>0</span>
                        </div>
                        <div className="memberBodyIn2">
                            <span>紅利折抵</span>
                            <span>0</span>
                        </div>
                        <div className="memberBodyIn2">
                            <span>總額</span>
                            <span className="totalPrice">{datas[0].drink_total_price}</span>
                        </div>
                    </div>
                </div>
                <div className="member2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-end mt-4">
                            {/* <div className="btn PaymentLast mt-1">訂單查詢</div> */}
                        </div>
                        <Link to='/onlinemenu'>
                        <div className="d-flex justify-content-end mt-4">
                            <div className="btn PaymentLast mt-1">繼續購物</div>
                        </div>
                        </Link>
                    </div>
                </div>
            </>

    )
    }

    }


export default Totalpay