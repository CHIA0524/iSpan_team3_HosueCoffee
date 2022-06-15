import  { React,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FacebookShareButton,
    LineShareButton,
  } from 'react-share';


//CSS
import '../articleBanner.css';

//imgs
import facebookImg from '../img/share btn fb.svg'
import lineImg from '../img/share btn line.svg'
import instagramImg from '../img/share btn ig.svg'




const ArticleLinkShare = (props) => {
  const {thisBid}=props
  const shareUrl =`http://localhost:3001/blog/blogArticle?blog_id=${thisBid}`;

  
  return (
    <>
        


         {/* <!--makeLinkDown用來將 outsideLink在縮至行動裝置版時,顯示於下方 --> */}
                    
                    <div className="outsideLink">
                      <FacebookShareButton
                        url={shareUrl}
                      >
                      <div className="facebook"><img src={facebookImg} alt="facebookImg" round={true}></img></div>

                      </FacebookShareButton>&emsp;
                      
                  
 
                      <LineShareButton
                        url={shareUrl}
                      >
                      <div className="line_share"><img src={lineImg} alt="lineImg">
                      </img></div>
                      </LineShareButton>
                    </div>
                  
                              



      </>
    );
  }

export default ArticleLinkShare;



                