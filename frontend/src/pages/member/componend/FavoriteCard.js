import { useState } from 'react';
import { useEffect } from 'react';
function FavoriteCard(){
    const [datas,setDatas] = useState([])
    const [total,settotal]=useState(1)
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
                const{p_name,p_price}=FavoriteData;
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
                            <a href=""><img src={require('../img/heart.png')} alt=""></img></a>
                        </div>
                    </div>
                    <p className="MFcardPrice">{p_price}</p>
                    <div className="cardFoot">
                        <div className="addMNum" >
                            <div className="MNumL" onClick={()=>{if(total>1){
                                settotal(total-1);
                            }}}>-</div>
                            {/* <div className="MNumL" >-</div> */}
                            <div className="addMNumDV"><input className="addMNumV"  value={total} type="text" readonly onkeypress='return event.charCode >= 48 && event.charCode <= 57'></input></div>
                            {/* <div className="MNumR" >+</div> */}
                            <div className="MNumR" onClick={()=>{
                                settotal(total+1);
                            }}>+</div>
                        </div>  
                        <button className="cardBuy">選購</button>
                    </div>
                </div>
                )})}
        </>
    )
   
}
export default FavoriteCard;