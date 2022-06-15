import { BrowserRouter as Router, Route, Link, Switch,useParams } from 'react-router-dom';
import React,{ useEffect, useState,Component  } from 'react';

//component
import ArticleRecommend from './component/ArticleRecommend';
import BACard from './component/BACard';
import ArticleMobRecommend from './component/ArticleMobRecommend';
import ArticleLinkShare from './component/ArticleLinkShare';

//CSS
import './articleBanner.css';




function BlogArticle(props){

  const params=useParams();
  const thisBid=params.id
  const[blog,setBlog]=useState([])
  const [arecomend,setarecomend]=useState([])
  const [datas,setDatas]=useState([])

  
  
  const fetchData= async()=>{
    const response= await fetch(`http://localhost:3001/blog/id?blog_id=${thisBid}`);
    const results=await response.json(); 
    setDatas(results);

    const response1 = await fetch('http://localhost:3001/blog')
    const datas1 = await response1.json();
    setarecomend(datas1)
  }
  

  useEffect(() => {
    fetchData()
  }, [params.id])



  if(datas.length>0){
    const blogContent=datas[0];
    const{blog_id,btype,title,author,first_content,created_time,first_img}=blogContent
    const firstImg=(first_img);
    

  
  return(
       <>
      
            <div className="articleBanner" alt="ArticleBanner">
              <img className='articleImg00' src={require("./img/"+firstImg+".jpg")} alt=''></img>
            </div>

            <div className="container articleContainer ">
              <div className="row articleRow"> 
                
                  <div className="articleTitle">{title}</div>
              
                
                  
                  <div className="articleAuthor">
                  {created_time}｜{btype}｜by {author}
                </div>
                  


                  {/* <!--makeLinkDown用來將 outsideLink在縮至行動裝置版時,顯示於下方 --> */}
                  <div className="makeLinkDown ">
                      <ArticleLinkShare thisBid={thisBid}/>

                    <article className="blogArticle">
                              <p>&emsp;&emsp;
                              {first_content}
                                </p>
                                  
                                <BACard thisBid={thisBid}/>
                              
                              <div className="articleImg">
                              </div>
                    
                      </article>
                  </div>  
                  
                  <Link to={"/blog"}  className="articleBackBtn">
                    <div>
                      返回
                    </div>
                  </Link>

                 

                  <div className="articleRecommend WRec">
                    <ArticleRecommend arecomend={arecomend}/>
                  </div>
                  <div className="articleRecommend MRec ">
                    <ArticleMobRecommend arecomend={arecomend}/>
                  </div>

                </div>   
              </div>
            

  
              <div className="citeSrc">此網頁來自《iDrip》網站 https://www.idrip.coffee
              </div>
  
        

      </>
    )
  }
}

export default BlogArticle