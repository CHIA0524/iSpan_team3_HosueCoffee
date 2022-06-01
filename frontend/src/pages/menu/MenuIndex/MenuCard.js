import {React, useEffect} from "react";
// import{useState,useEffect} from "react";
import "../style.scss"
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';







const MenuCard = (props) => {

    // 傳遞點擊id    // 接收父層資料
    const {setdrinkId, setcss, datas} = props

    // 異步回調
    useEffect(() => {},[setdrinkId]);

    return(
            <>
                {/* 印出資料 */}
                {datas.map((mu,i)=>{

                const img1 = (mu.drink_name)

                return(

                    <div 
                        className="card" 
                        type="button" 
                        key={mu.id}  
                        onClick={()=>{
                            setdrinkId((mu.id))
                            setcss({visibility: 'visible' ,opacity:'1'})
                        }}>
                        <div>
                            <div className="imgdiv">
                                <img src={require('./img/'+ img1 +'.jpg')} alt=""/>
                            </div>
                            <div className="cardpa">
                                <span>{mu.drink_name}</span>
                                <span>
                                    <AiOutlineHeart size={20}/>
                                    <AiFillHeart  size={20}/>
                                </span>
                            </div>
                            <div className="d-flex justify-content-between cardpading">
                                <span className="d-flex align-items-center">
                                    ${mu.price}
                                </span>
                            </div>
                        </div>    
                    </div>
                )
                })}
            </>   
    )    
}





export default MenuCard