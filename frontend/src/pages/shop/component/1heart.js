import { AiFillHeart } from "react-icons/ai";

function Heart(props){
    const {pt_id,datasPMF}=props
    console.log(pt_id)
    console.log(pt_id)
    
    return(
        <>
        {datasPMF.map((key,p_id)=>{
            if(key.p_id==pt_id){
                if(key.TF==1){
                    return(
                        <button className="heart" onClick={()=>{
                             alert("成功加入收藏") }} > 
                           <AiFillHeart className="heart3" size={24}  style = {{ color: 'red' }}     
                             
                        /></button>
                    )

                }else{
                    return(
                        <button className="heart" onClick={()=>{
                             alert("成功加入收藏") }} > 
                           <AiFillHeart className="heart3" size={24}       
                             
                        /></button>
                    )
                }
            }
           
        })}
        </>
    )
}
export default Heart