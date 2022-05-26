import React, { useState ,useEffect} from "react";
// import{useState,useEffect} from "react";
import "../style.scss"
import {AiOutlineHeart} from 'react-icons/ai';






const MenuCard = (props) => {

    // 傳遞點擊id
    const {srtdrinkId} = props

    // 異步回調
    useEffect(() => {},[srtdrinkId]);

    // 接收父層資料
    const {datas} = props

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
                srtdrinkId((mu.id))
            }}>
            <div>
                <div className="">
                    <img src={require('./img/'+ img1 +'.jpg')} alt=""/>
                </div>
                <div className="cardpa">
                    <span>{mu.drink_name}</span>
                    <span>
                        <AiOutlineHeart/>
                    </span>
                </div>
                <div className="d-flex justify-content-between cardpading">
                    <span className="d-flex align-items-center">${mu.price}</span>
                </div>
            </div>    
        </div>
                )
                
                        })}
    </>   
        )    
}





export default MenuCard