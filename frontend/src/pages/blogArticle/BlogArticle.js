import { BrowserRouter as Router, Route, Link, Switch,useParams } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';

//component
import ArticleRecommend from './component/ArticleRecommend';
import BACard from './component/BACard';


//CSS
import './articleBanner.css';


//imgs
import facebookImg from './img/share btn fb.svg'
import lineImg from './img/share btn line.svg'
import instagramImg from './img/share btn ig.svg'



function BlogArticle(props){
  
  
  const params=useParams();
  const thisBid=params.id
  console.log(thisBid) 

  const [datas,setDatas]=useState([])
  const fetchData= async()=>{
    const response= await fetch(`http://localhost:3600/blog/id?blog_id=${thisBid}`);
    const results=await response.json(); 
    setDatas(results);
    console.log(results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if(datas.length>0){
    const blogContent=datas[0];
    const{blog_id,btype,title,author,first_content,created_time,first_img}=blogContent
    // console.log(title);

  
  console.log(datas);
  return(
       <>
     
          <section className="articleSection" >
            <div className="articleBanner" alt="ArticleBanner">
            <img src={first_img}></img>
            {/* <img src={require('./img/[1coffee10001].jpg')}></img> */}
            </div>

            <div className="container articleContainer ">
              <div className="row articleRow"> 
                
                  <div className="articleTitle">{title}</div>
              
                
                
                  <div className="articleAuthor">
                  {created_time}｜{btype}｜by {author}
                </div>
                  


                  {/* <!--makeLinkDown用來將 outsideLink在縮至行動裝置版時,顯示於下方 --> */}
                  <div className="makeLinkDown">
                          
                    <div className="outsideLink">
                      <div className="facebook"><Link href="#"><img src={facebookImg} alt="facebookImg"></img></Link></div>&emsp;
                      <div className="line"><Link href="#"><img src={lineImg} alt="lineImg"></img></Link></div>&emsp;
                      <div className="Instagram"><Link href="#"><img src={instagramImg} alt="instagramImg"></img></Link></div>
                      
                    </div>
                    
                    <article className="blogArticle">
                                <p>
                                  {first_content}
                                  </p>
                                    
                                  <BACard thisBid={thisBid}/>
                                
                                <div className="articleImg">
                                    {/* <img src={require('../img/Article01.svg')} alt=""></img> */}
                                </div>
                                
                                
                                {/* <div className="articleImg"><img  src={require('../img/Article02.svg')} alt=""></img></div> */}
                                
                              
                                {/* <div className="articleImg"><img  src={require('../img/Article03.svg')} alt=""></img></div> */}
                              
                                </article>
                  </div>  
                  
                  <Link to={"/blog"}  className="articleBackBtn">
                    <div>
                      返回
                    </div>
                  </Link>



                  

                </div>   
              </div>
            
          </section>
  
  

        )

      </>
    )
  }
}


export default BlogArticle