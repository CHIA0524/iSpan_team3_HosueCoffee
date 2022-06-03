import { useState,useEffect } from 'react'

function OD_List_Detail(props){
    const {o_id}=props
    const {D_qty,setD_qty}=props
    console.log(o_id)
    const [datas,setDatas] = useState([])
    const thismemberid=localStorage.getItem(true)

    const fetchData=async()=>{
        console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/morder/odList/detailed?o_id=${o_id}`)
        const results=await response.json();
        setDatas(results); 

        const count = await fetch(`${process.env.REACT_APP_API_URL}/morder/odList/detailed/count?fk_o_id=${o_id}`)
        const counta=await count.json();
        console.log(counta.total)
        setD_qty(counta.total)
        console.log(D_qty)
    
    }
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
         {datas.length> 0 && datas.map((Odlist_D,i)=>{
                const{p_name}=Odlist_D;
                
                
            return(
                            <div className="col">
                                <img className="listimg" src={require('../../shop/img/'+p_name +'.jpg')} alt=""></img>
                            </div>
                            
                        
                )})}

        </>
    )
}
export default OD_List_Detail