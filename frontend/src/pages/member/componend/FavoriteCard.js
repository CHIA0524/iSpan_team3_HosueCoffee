import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillHeart } from "react-icons/ai";

function FavoriteCard(){
    const [datas,setDatas] = useState([])
    const [FVTotal,setFVTotal] = useState()
    const thismemberid=localStorage.getItem(true)
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
            <div className="card FavCard mb-4">
                    <div className="package F_package">
                        <a href=""><img className="card-img-top F_package_img" src={require('../../shop/img/'+p_name +'.jpg')} alt=""></img></a>
                    </div>
                    <div className="cardName d-flex justify-content-between">
                        <div>
                            <p>{p_name}</p>
                        </div>
                        <div>
                            <button className='heart' onClick={async()=>{
                                if(window.confirm('請問要刪除收藏的 '+p_name+' 嗎')==true){
                                    window.alert("已刪除此收藏")
                                    window.location.reload()
                                    const response = await fetch(`${process.env.REACT_APP_API_URL}/account/Favfavorite/DF?MF_id=${MF_id}`)
                                }else{
                                    alert("取消刪除")
                                }
                            }}><AiFillHeart className="heart3" size={24}  style = {{ color: 'red' }}     
                             
                             /></button>
                        </div>
                    </div>
                    <p className="MFcardPrice">${p_price}</p>
                    <div className="cardFoot">
                        <div className="addMNum" >
                            <div className="MNumL" onClick={()=>{if(Number(document.getElementById(p_name).innerHTML)>1){
                               document.getElementById(p_name).innerHTML=Number(document.getElementById(p_name).innerHTML)-1
                            }}}>-</div>
                           
                            <div id={p_name}>1</div>
                            
                            <div className="MNumR" onClick={()=>{
                                document.getElementById(p_name).innerHTML=Number(document.getElementById(p_name).innerHTML)+1
                            }}>+</div>
                        </div>  
                        <button type='button' className="cardBuy" 
                        onClick={()=>{
                            const pNum=Number(document.getElementById(p_name).innerHTML)
                            alert("商品編號:"+p_id+" 商品數量:"+pNum);
                            console.log("商品編號:"+p_id+" 商品數量:"+pNum);
                            document.getElementById(p_name).innerHTML=1;
                        }}
                        >選購</button>
                    </div>
                </div>
                )})}
        </>
    )
    }else if(FVTotal%3==2){
        return(
            <>
                {datas.length> 0 && datas.map((FavoriteData,i)=>{
                    const{MF_id,p_id,p_name,p_price}=FavoriteData;
                   
                       
                    
                    return(
                <div className="card FavCard mb-4">
                        <div className="package F_package">
                            <a href=""><img className="card-img-top F_package_img" src={require('../../shop/img/'+p_name +'.jpg')} alt=""></img></a>
                        </div>
                        <div className="cardName d-flex justify-content-between">
                            <div>
                                <p>{p_name}</p>
                            </div>
                            <div>
                                <button className='heart' onClick={async()=>{
                                    if(window.confirm('請問要刪除收藏的 '+p_name+' 嗎')==true){
                                        window.alert("已刪除此收藏")
                                        window.location.reload()
                                        const response = await fetch(`${process.env.REACT_APP_API_URL}/account/Favfavorite/DF?MF_id=${MF_id}`)
                                    }else{
                                        alert("取消刪除")
                                    }
                                }}><AiFillHeart className="heart3" size={24}  style = {{ color: 'red' }}     
                                 
                                 /></button>
                            </div>
                        </div>
                        <p className="MFcardPrice">${p_price}</p>
                        <div className="cardFoot">
                            <div className="addMNum" >
                                <div className="MNumL" onClick={()=>{if(Number(document.getElementById(p_name).innerHTML)>1){
                                   document.getElementById(p_name).innerHTML=Number(document.getElementById(p_name).innerHTML)-1
                                }}}>-</div>
                               
                                <div id={p_name}>1</div>
                                
                                <div className="MNumR" onClick={()=>{
                                    document.getElementById(p_name).innerHTML=Number(document.getElementById(p_name).innerHTML)+1
                                }}>+</div>
                            </div>  
                            <button type='button' className="cardBuy" 
                            onClick={()=>{
                                const pNum=Number(document.getElementById(p_name).innerHTML)
                                alert("商品編號:"+p_id+" 商品數量:"+pNum);
                                console.log("商品編號:"+p_id+" 商品數量:"+pNum);
                                document.getElementById(p_name).innerHTML=1;
                            }}
                            >選購</button>
                        </div>
                    </div>
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
                    <div className="card FavCard mb-4">
                            <div className="package F_package">
                                <a href=""><img className="card-img-top F_package_img" src={require('../../shop/img/'+p_name +'.jpg')} alt=""></img></a>
                            </div>
                            <div className="cardName d-flex justify-content-between">
                                <div>
                                    <p>{p_name}</p>
                                </div>
                                <div>
                                    <button className='heart' onClick={async()=>{
                                        if(window.confirm('請問要刪除收藏的 '+p_name+' 嗎')==true){
                                            window.alert("已刪除此收藏")
                                            window.location.reload()
                                            const response = await fetch(`${process.env.REACT_APP_API_URL}/account/Favfavorite/DF?MF_id=${MF_id}`)
                                        }else{
                                            alert("取消刪除")
                                        }
                                    }}><AiFillHeart className="heart3" size={24}  style = {{ color: 'red' }}     
                                     
                                     /></button>
                                </div>
                            </div>
                            <p className="MFcardPrice">${p_price}</p>
                            <div className="cardFoot">
                                <div className="addMNum" >
                                    <div className="MNumL" onClick={()=>{if(Number(document.getElementById(p_name).innerHTML)>1){
                                       document.getElementById(p_name).innerHTML=Number(document.getElementById(p_name).innerHTML)-1
                                    }}}>-</div>
                                   
                                    <div id={p_name}>1</div>
                                    
                                    <div className="MNumR" onClick={()=>{
                                        document.getElementById(p_name).innerHTML=Number(document.getElementById(p_name).innerHTML)+1
                                    }}>+</div>
                                </div>  
                                <button type='button' className="cardBuy" 
                                onClick={()=>{
                                    const pNum=Number(document.getElementById(p_name).innerHTML)
                                    alert("商品編號:"+p_id+" 商品數量:"+pNum);
                                    console.log("商品編號:"+p_id+" 商品數量:"+pNum);
                                    document.getElementById(p_name).innerHTML=1;
                                }}
                                >選購</button>
                            </div>
                        </div>
                        )})}
                    <div className="card FavCard NFavCard mb-4"></div>
                    <div className="card FavCard NFavCard mb-4"></div>
                        
                </>
            )
            }
   
}
export default FavoriteCard;