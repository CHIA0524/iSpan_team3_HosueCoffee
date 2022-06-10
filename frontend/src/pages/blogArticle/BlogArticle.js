import { BrowserRouter as Router, Route, Link, Switch,useParams } from 'react-router-dom';
import React,{ useEffect, useState,Component  } from 'react';

//component
import ArticleRecommend from './component/ArticleRecommend';
import BACard from './component/BACard';
import {
  FacebookShareButton
  
} from 'react-share';

//CSS
import './articleBanner.css';
import './Demo.css';
import exampleImage from './react-share-pin-example.png';

//imgs
import facebookImg from './img/share btn fb.svg'
import lineImg from './img/share btn line.svg'
import instagramImg from './img/share btn ig.svg'


class BlogArticle extends Component {
  render() {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';

function BlogArticle(props){
  
  
  const params=useParams();
  const thisBid=params.id
  const[blog,setBlog]=useState([])
  const [arecomend,setarecomend]=useState([])
  const [datas,setDatas]=useState([])
  console.log(blog);
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
    console.log(first_img);
  
  console.log(datas);
  return(
       <>
     
          <section className="articleSection" >
            <div className="articleBanner" alt="ArticleBanner">
            
            <img className='articleImg00' src={require("./img/"+firstImg+".jpg")} alt=''></img>
            </div>
            <div className="container articleContainer ">
              <div className="row articleRow"> 
                
                  <div className="articleTitle">{title}</div>
              
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                  
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
                                   
                                </div>
                                
                               
                              
                                </article>
                  </div>  
                  
                  <Link to={"/blog"}  className="articleBackBtn">
                    <div>
                      返回
                    </div>
                  </Link>

                 

                  <div className="articleRecommend">
                    <ArticleRecommend arecomend={arecomend}/>
                  </div>

                </div>   
              </div>
            
          </section>
  
  

        )

      </>
    )
  }
}


export default BlogArticle