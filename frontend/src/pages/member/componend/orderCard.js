import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function OrderCard(props){
    const {thiso_id}=props
    const{alltotalpay,setAlltotalpay}=props
    const [datas,setDatas] = useState([])

    const fetchData=async()=>{
        // console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/morder/odList/detailed?o_id=${thiso_id}`)
        const results=await response.json();
        setDatas(results); 
        
        
    }
    var allMoney=0
    for(let i=0;i<datas.length;i++){
        const price=datas[i].p_price;
        const qty=datas[i].qty;
        
        const toto=price*qty;
        allMoney=allMoney+toto
       
    }
    setAlltotalpay(allMoney)
    // console.log(alltotalpay)
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
        
        {datas.length> 0 && datas.map((Odlist_D,i)=>{
                    
                    const{p_name,p_price,qty,p_id}=Odlist_D;
                    {/* setAlltotalpay(alltotalpay+p_price*qty) */}
                    const toto=p_price*qty
                    const internationalNumberFormat = new Intl.NumberFormat('en-US')
                    const toto3=(internationalNumberFormat.format(toto))
                return(
                    <div>
                            <div className="row d-flex align-items-center">
                                <div className="col-2 col-3None wnimg_div">
                                <Link to={`/shop/ProductDetail/${p_id}`}>
                                    <img className="wnimg"  src={require('../../shop/img/'+p_name +'.jpg')} alt=""></img>

                                </Link>
                                </div>
                                <div className="col-1 col-3None"></div>

                                <div className="col-3 col-3None">
                                    <p className="odproname">{p_name}</p>
                                </div>
                                <div className="col-2 col-3None">
                                    <p>數量：{qty}</p>
                                </div>
                                <div className="col-1 col-3None"></div>

                                <div className="col-1 col-3None">
                                    <p>${p_price}</p>
                                </div>
                                <div className="col-1 col-3None"></div>
                                <div className="col-1 col-3None">
                                    <p>${toto3}</p>
                                    
                                </div>
                                <hr className='od_hr '></hr>
                                <div className="col-5 col-wn">
                                    <Link to={`/shop/ProductDetail/${p_id}`}>
                                         <img src={require('../../shop/img/'+p_name +'.jpg')}alt=""></img>
                                    </Link>
                                </div> 
                                <div className="col-1 col-wn"></div>
                                <div className="col-6 col-wn wnmain">
                                    <p className="odname_m rwdODP">{p_name}</p>
                                    <p className="rwdODP">數量：{qty}&emsp;</p>
                                    <p className="wn_money col rwdODP">單價:{p_price} </p>
                                    <p className="wn_TTM col rwdODP">小計:{toto3}</p>
                                </div>
                                
                            </div>
                            
                            
                                </div>
                            )})}
        </>
    )
}
export default OrderCard;