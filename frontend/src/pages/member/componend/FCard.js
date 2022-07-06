import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import AddSweet from "../../shop/component/AddSweet";
function FCard(props){
    const {MF_id,p_id,p_name,p_price,setcarNum}=props
    const[amount, setAmount]= useState(1)
    const updateCart = ()=>{
        //加入購物車的計算
        let o = 0
        //localStorage的變數
        const sCart = {
            id: p_id,
            ShopCounter:amount,
        }
        //轉存為JSON 存至LOCAL STORAGE
        let sCarts = localStorage.getItem("sCarts") ? JSON.parse(localStorage.getItem("sCarts")) : []
        for (let i = 0; i < sCarts.length; i++) {
            let item = sCarts[i]    
            if (item.id === sCart.id) {
                item.ShopCounter += sCart.ShopCounter
            } else {
                o = o + 1
            }
        }
        if (o === sCarts.length) {
          sCarts.push(sCart)
        }
        localStorage.setItem("sCarts", JSON.stringify(sCarts))
        setcarNum(JSON.parse(localStorage.getItem('sCarts')).length)
    }

    return(
        <>
            <div className="card FavCard mb-4" id={MF_id}>
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
                                    document.getElementById(MF_id).style.display="none"
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
                            <div className="MNumL" onClick={()=>{if(amount>1){
                                setAmount(amount-1)

                            }}}>-</div>
                           
                            <div >{amount}</div>
                            
                            <div className="MNumR" onClick={()=>{
                                setAmount(amount+1)
                            }}>+</div>
                        </div>  
                        <button type='button' className="cardBuy" 
                        onClick={()=>{
                            updateCart(); 
                            setAmount (1);
                            AddSweet();
                        }}
                        >選購</button>
                    </div>
                </div>
        </>
    )
}
export default FCard