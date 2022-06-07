import React from 'react';
import { Link } from 'react-router-dom';


//CSS
import '../articleBanner.css';


const ArticleRecommend = (props) => {
    // const {article}=props
    return (
        <>
            <div className="articleRecommend"><h2>相關文章推薦</h2></div>

            <div className="articleRecommendWrapper">
            
            <div className="articleSlideBtnLeft">
                {/* <Link href="#"><img src={require('./img/Vector-left.svg')} alt=""></img></Link> */}
                    </div>
                </div>

            <div className="articleRecommendCard articleRecHidden col">
                <Link href="">
                    {/* <img src={require('./img/3-3-1024x682.jpg')}  alt=""></img> */}
                </Link>
                <div><p>曼特寧、麝香貓咖啡咖啡人必知的印尼咖啡</p></div>
            </div>
            
            
            <div className="articleRecommendCard articleRecHidden col">
                <Link href="">
                    {/* <img src={require('./img/3-3-1024x682.jpg')} alt=""></img> */}
                </Link>
                <div><p>曼特寧、麝香貓咖啡咖啡人必知的印尼咖啡</p></div>
            </div>
            
            
            <div className="articleRecommendCard articleRecHidden col">
                <Link href="">
                    {/* <img src={require('./img/3-3-1024x682.jpg')} alt=""></img> */}
                </Link>
                <div><p>曼特寧、麝香貓咖啡咖啡人必知的印尼咖啡</p></div>
            </div>

            
                <div className=" articleSlideBtnRight">
                {/* <Link href="#"><img src={require('./img/Vector-right.svg')} alt=""></img></Link> */}
                </div>

        </>
    )
}


export default ArticleRecommend;




