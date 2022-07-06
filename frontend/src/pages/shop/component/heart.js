import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import LoginSweet from './LoginSweet';

function Heart(props){
    const {pt_id,datasPMF}=props
    const thismemberid=localStorage.getItem(true)
    // console.log(pt_id)
    
    return(
     <>
     {datasPMF.map((key, p_id) => {
         if(key.p_id == pt_id){
             if(key.TF == 1){
                 return(
                    <button className="heart" onClick={async()=>{
                                   window.location.reload()
                                    // console.log(process.env.REACT_APP_API_URL);
                                    // 刪除資料
                                    const response = await fetch(`${process.env.REACT_APP_API_URL}/shop/wishlist/delete?fk_m_id=${thismemberid}&fk_p_id=${pt_id}`)    
                              }} > 
                           <AiFillHeart className="heart3" size={24}  style = {{ color: 'red' }}/>
                    </button>
                    )
                }else{
                    if(thismemberid){
                        return(    
                        <button className="heart" onClick={async()=>{
                                    window.location.reload()
                                    // console.log(process.env.REACT_APP_API_URL);
                                    // 新增資料
                                    const response = await fetch(`${process.env.REACT_APP_API_URL}/shop/wishlist/add?fk_m_id=${thismemberid}&fk_p_id=${pt_id}`)
                                } } > 
                           <AiOutlineHeart className="heart3" size={24}/>
                        </button>
                    )
                    }else{
                        return(
                        
                        <button className="heart" onClick={()=>{
                             LoginSweet() }} > 
                           <AiOutlineHeart className="heart3" size={24}/>
                        </button>
                    )
                    }
                    
                }
         }
     })}



     </>
    )
}
export default Heart
