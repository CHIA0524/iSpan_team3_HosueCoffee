import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillHeart } from "react-icons/ai";
import FCard from './FCard';

function FavoriteCard(props){
    const {setcarNum}=props
    const [datas,setDatas] = useState([])
    const [FVTotal,setFVTotal] = useState()
    const thismemberid=localStorage.getItem(true)

    window.onbeforeunload = function () {
        var scrollPos;
        if (typeof window.pageYOffset != 'undefined') {
            scrollPos = window.pageYOffset;
        }
        else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
            scrollPos = document.documentElement.scrollTop;
        }
        else if (typeof document.body != 'undefined') {
            scrollPos = document.body.scrollTop;
        }
        document.cookie = "scrollTop=" + scrollPos; //存储滚动条位置到cookies中
    }

    const fetchData=async()=>{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/account/Favfavorite?fk_m_id=${thismemberid}`)
        const results=await response.json();
        setDatas(results); 
        const FVT = await fetch(`${process.env.REACT_APP_API_URL}/account/Favfavorite/TT?fk_m_id=${thismemberid}`)
        const FVTT=await FVT.json();
        setFVTotal(FVTT.total); 
    }
    useEffect(()=>{
        fetchData();
    },[])
   
    if(FVTotal%3==0){
    return(
        <>
            {datas.length> 0 && datas.map((FavoriteData,i)=>{
                const{MF_id,p_id,p_name,p_price}=FavoriteData;
               
                   
                
                return(
                    <FCard setcarNum={setcarNum} MF_id={MF_id} p_id={p_id} p_name={p_name} p_price={p_price}/>
                )})}
        </>
    )
    }else if(FVTotal%3==2){
        return(
            <>
                {datas.length> 0 && datas.map((FavoriteData,i)=>{
                    const{MF_id,p_id,p_name,p_price}=FavoriteData;
                   
                       
                    
                    return(
                        <FCard setcarNum={setcarNum} MF_id={MF_id} p_id={p_id} p_name={p_name} p_price={p_price}/>
                    )})}
                    <div className="card FavCard NFavCard mb-4"></div>

            </>
        )
        }if(FVTotal%3==1){
            return(
                <>
                    {datas.length> 0 && datas.map((FavoriteData,i)=>{
                        const{MF_id,p_id,p_name,p_price}=FavoriteData;
                       
                           
                        
                        return(
                            <FCard setcarNum={setcarNum} MF_id={MF_id} p_id={p_id} p_name={p_name} p_price={p_price}/>
                        )})}
                    <div className="card FavCard NFavCard mb-4"></div>
                    <div className="card FavCard NFavCard mb-4"></div>
                        
                </>
            )
            }
   
}
export default FavoriteCard;