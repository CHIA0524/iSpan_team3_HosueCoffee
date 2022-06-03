import { useState } from 'react';
import { useEffect } from 'react';
function FavoriteCard(){
    const [datas,setDatas] = useState([])
    const thismemberid=localStorage.getItem(true)
    const fetchData=async()=>{
        console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/account/Favfavorite?fk_m_id=${thismemberid}`)
        const results=await response.json();
        setDatas(results); 
    }
    useEffect(()=>{
        fetchData();
    },[])
   

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
                            <img onClick={async()=>{
                                if(window.confirm('請問要刪除收藏的 '+p_name+' 嗎')==true){
                                    window.alert("已刪除此收藏")
                                    window.location.reload()
                                    // console.log(process.env.REACT_APP_API_URL);
                                    const response = await fetch(`${process.env.REACT_APP_API_URL}/account/Favfavorite/DF?MF_id=${MF_id}`)
                                }else{
                                    alert("取消刪除")
                                }
                            }} src={require('../img/heart.png')} alt=""></img>
                        </div>
                    </div>
                    <p className="MFcardPrice">{p_price}</p>
                    <div className="cardFoot">
                        <div className="addMNum" >
                            <div className="MNumL" onClick={()=>{if(Number(document.getElementById(p_name).innerHTML)>1){
                               document.getElementById(p_name).innerHTML=Number(document.getElementById(p_name).innerHTML)-1
                            }}}>-</div>
                           
                            <div id={p_name}>1</div>
                            
                            <div className="MNumR" onClick={()=>{
                                console.log()
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
   
}
export default FavoriteCard;