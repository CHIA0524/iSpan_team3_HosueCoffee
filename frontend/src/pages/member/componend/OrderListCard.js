import { Link } from 'react-router-dom'
import OD_List_Detail from './OD-List-Detail'
import { useState,useEffect } from 'react'
function OrderListCard(){
    const [datas,setDatas] = useState([])
    const [D_qty,setD_qty]=useState([])
    const thismemberid=localStorage.getItem(true)

    const fetchData=async()=>{
        console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/morder/odList?fk_member_id=${thismemberid}`)
        const results=await response.json();
        setDatas(results); 
        console.log(datas)
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
        {datas.length> 0 && datas.map((Odlist,i)=>{
                const{o_id,order_condition,CREATEd_at}=Odlist;
                const time=CREATEd_at.substring(0,10)
                console.log(time)
                
            return(
            <Link to={'/member/Order'}>
            <div className="listcard row">
                        <div className="col-3 listdata col-3None">
                            <div className="state">訂單狀態: {order_condition}</div>
                            <div>訂單編號: {o_id}</div>
                            <div>成立時間: {CREATEd_at}</div>
                        </div>
                        <div className="col-1 col-3None"></div>
                        <div className="col-8 col-wn">
                            <div className="state">訂單狀態: {order_condition}</div>
                            <div>訂單編號: {o_id}</div>
                            <div>成立時間: {CREATEd_at}</div>
                        </div>
                        <div className="col-4 col-wn rwdGT ttpiece">&gt;</div>
                        <div className="col row">
                            <OD_List_Detail o_id={o_id} D_qty={D_qty} setD_qty={setD_qty}/>
                          
                            <div className="col-3 ttpiece col-3None">共{D_qty}件&gt;</div>
                            <div className="col-3 ttpiece col-wn">共{D_qty}件</div>
                        </div>
                       
                </div>
                </Link>
                )})}
        </>
    )
}
export default OrderListCard