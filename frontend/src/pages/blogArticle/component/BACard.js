import { useState,useEffect } from "react";

function BACard(props){
    const [datas,setDatas]=useState([])
    const {thisBid}=props
    const fetchData= async()=>{
      const response= await fetch(`http://localhost:3001/blog/blogArticle?blog_id=${thisBid}`);
      const results=await response.json(); 
      setDatas(results);
      
    }

    useEffect(() => {
        fetchData()
      }, [])
      
    return(
    <>
    {datas.map((BA,i) => {
      //console.log(BA.img_src)
      const articleSimg=(BA.img_src);
      
        return(
          <div>
        <p dangerouslySetInnerHTML={{__html: BA.sencond_content}}></p>
        
        <img className="articleCardImg" src={require("../img/"+articleSimg+".jpg")} alt="BlogCardImg"></img>
        
        </div>

        )
    })}
    </>
    )
}
export default BACard;