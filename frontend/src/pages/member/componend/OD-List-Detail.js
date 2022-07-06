import { useState,useEffect } from 'react'

function OD_List_Detail(props){
    const {o_id}=props
    // console.log(o_id)
    const [datas,setDatas] = useState([])
    const [conTT,setConTT] = useState()
    const thismemberid=localStorage.getItem(true)

    const fetchData=async()=>{
        // console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/morder/odList/detailed3?o_id=${o_id}`)
        const results=await response.json();
        setDatas(results); 

        const count = await fetch(`${process.env.REACT_APP_API_URL}/morder/odList/detailed/count?fk_o_id=${o_id}`)
        const counta=await count.json();
        // console.log(counta.total)
        setConTT(counta.total)
        
    }
    useEffect(()=>{
        fetchData();
    },[])
    if(conTT>=3){
        return(
            <>
             <div className="col row">
            {datas.length> 0 && datas.map((Odlist_D,i)=>{
                    const{p_name}=Odlist_D;
                    
                    
                return(
                                <div className="col-3">
                                    <img className="listimg" src={require('../../shop/img/'+p_name +'.jpg')} alt=""></img>
                                </div>
                                
                            
                    )})}
                    <div className="col-3 ttpiece col-3None">共{conTT}件&gt;</div>
                    <div className="col-3 ttpiece col-wn">共{conTT}件</div>
                    </div>

            </>
        )
    }else if(conTT==2){
        return(
            <>
             <div className="col row">

            <div className="col-3"></div>

            {datas.length> 0 && datas.map((Odlist_D,i)=>{
                    const{p_name}=Odlist_D;
                    
                    
                return(
                                <div className="col-3">
                                    <img className="listimg" src={require('../../shop/img/'+p_name +'.jpg')} alt=""></img>
                                </div>
                                
                            
                    )})}
                    <div className="col-3 ttpiece col-3None">共{conTT}件&gt;</div>
                    <div className="col-3 ttpiece col-wn">共{conTT}件</div>
                    </div>

            </>
        )

    }else{
        return(
            <>
             <div className="col row">

                                <div className="col-6"></div>
                    {datas.length> 0 && datas.map((Odlist_D,i)=>{
                    const{p_name}=Odlist_D;
                    
                    
                return(
                    
                                <div className="col-3">
                                    <img className="listimg" src={require('../../shop/img/'+p_name +'.jpg')} alt=""></img>
                                </div>
                                
                            
                    )})}
                    <div className="col-3 ttpiece col-3None">共{conTT}件&gt;</div>
                    <div className="col-3 ttpiece col-wn">共{conTT}件</div>
                    </div>

            </>
        )

    }
}
export default OD_List_Detail