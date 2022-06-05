import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function Heart(props){
    const {pt_id,datasPMF,pt_name}=props
    const thismemberid=localStorage.getItem(true)
    console.log(pt_id)
    
    return(
     <>
     {datasPMF.map((key,p_id)=>{
         if(key.p_id==pt_id){
             if(key.Liked == 1){
                 return(
                    <button className="heart" onClick={async()=>{
                                   window.location.reload()
                                    // console.log(process.env.REACT_APP_API_URL);
                                    const response = await fetch(`${process.env.REACT_APP_API_URL}/shop/Favfavorite/DF?fk_m_id=${thismemberid}&fk_p_id=${pt_id}`)    
                              }} > 
                           <AiFillHeart className="heart3" size={24}  style = {{ color: 'red' }}     
                             
                        /></button>
                    )
                }else{
                    if(thismemberid){
                        return(
                        
                        <button className="heart" onClick={async()=>{
                                    window.location.reload()
                                    // console.log(process.env.REACT_APP_API_URL);
                                    const response = await fetch(`${process.env.REACT_APP_API_URL}/shop/Favfavorite/CRF?fk_m_id=${thismemberid}&fk_p_id=${pt_id}`)
                                } } > 
                           <AiOutlineHeart className="heart3" size={24}       
                             
                        /></button>
                    )
                    }else{
                        return(
                        
                        <button className="heart" onClick={()=>{
                             alert("請登入") }} > 
                           <AiOutlineHeart className="heart3" size={24}       
                             
                        /></button>
                    )
                    }
                    
                }
         }
     })}



     </>
    )
}
export default Heart
