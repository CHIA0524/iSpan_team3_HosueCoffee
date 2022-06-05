import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function Heart(props){
    const {pt_id,datasPMF,pt_name}=props
    const thismemberid=localStorage.getItem(true)
    console.log(pt_id)

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
    
    return(
        <>
        {datasPMF.map((key,p_id)=>{
            if(key.p_id==pt_id){
                if(key.TF==1){
                    return(
                        <button className="heart" onClick={async()=>{
                             if(window.confirm('請問要刪除收藏的 '+pt_name+' 嗎')==true){
                                    window.alert("已刪除此收藏")
                                    window.location.reload(function () {
                                        if (document.cookie.match(/scrollTop=([^;]+)(;|$)/) != null) {
                                            var arr = document.cookie.match(/scrollTop=([^;]+)(;|$)/); //cookies中不为空，则读取滚动条位置
                                            document.documentElement.scrollTop = parseInt(arr[1]);
                                            document.body.scrollTop = parseInt(arr[1]);}
                                        })
                                    const response = await fetch(`${process.env.REACT_APP_API_URL}/shop/Favfavorite/DF?fk_m_id=${thismemberid}&fk_p_id=${pt_id}`)

                                    // console.log(process.env.REACT_APP_API_URL);
                                }else{
                                    alert("取消刪除")
                                }
                              }} > 
                           <AiFillHeart className="heart3" size={24}  style = {{ color: 'red' }}     
                             
                        /></button>
                    )

                }else{
                    if(thismemberid){
                        return(
                        
                        <button className="heart" onClick={async()=>{
                             if(window.confirm('請問要收藏 '+pt_name+' 嗎')==true){
                                    window.alert("成功收藏")
                                    window.location.reload(function () {
                                        if (document.cookie.match(/scrollTop=([^;]+)(;|$)/) != null) {
                                            var arr = document.cookie.match(/scrollTop=([^;]+)(;|$)/); //cookies中不为空，则读取滚动条位置
                                            document.documentElement.scrollTop = parseInt(arr[1]);
                                            document.body.scrollTop = parseInt(arr[1]);}
                                        })
                                    const response = await fetch(`${process.env.REACT_APP_API_URL}/shop/Favfavorite/CRF?fk_m_id=${thismemberid}&fk_p_id=${pt_id}`)

                                    // console.log(process.env.REACT_APP_API_URL);
                                }else{
                                    alert("取消收藏")
                                } }} > 
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