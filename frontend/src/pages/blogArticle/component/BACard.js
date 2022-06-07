import { useState,useEffect } from "react";

function BACard(props){
    const [datas,setDatas]=useState([])
    const {thisBid}=props
    const fetchData= async()=>{
      const response= await fetch(`http://localhost:3600/blog/blogArticle?blog_id=${thisBid}`);
      const results=await response.json(); 
      setDatas(results);
      console.log(results)
    }

    useEffect(() => {
        fetchData()
      }, [])
      
    return(
    <>
    {datas.map((BA,i) => {
        return(
        <p dangerouslySetInnerHTML={{__html: BA.sencond_content}}></p>
        
        )
    })}
    </>
    )
}
export default BACard;