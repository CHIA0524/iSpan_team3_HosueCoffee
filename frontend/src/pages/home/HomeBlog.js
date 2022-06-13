import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import blogimg01 from './image/blog10001.jpg';
import blogimg02 from './image/blog20001.jpg';
import blogimg03 from './image/blog30001.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
function homeBlog(){
    return(
        <div className="homeBlog" data-aos="fade-down" data-aos-duration="2000">
                <h1>TODAY’S ARTICLE</h1>
                <div className="allCard" >
                    <div className="cardBorder">
                        <div className="cardImg"><img src={blogimg01} alt=""/></div>
                        <div className="cardText">
                            <h5>你聽過白咖啡嗎？跟拿鐵、卡布奇諾、瑪奇朵有什麼不同？</h5>
                            <p>屬於義式濃縮咖啡一員的白咖啡，主要是以蒸汽牛奶搭配濃縮咖啡、最後再鋪上一層細緻奶泡而製成的義式花式咖啡，與拿鐵、卡布奇諾、瑪奇朵等牛奶咖啡屬同一家族，雖然主成分皆是以濃縮咖啡與牛奶沖調而成的咖啡飲品，但各款咖啡的調配都有不同的比例，稍有誤差可能就會製成另一款牛奶咖啡。 </p>
                        </div>
                        <div className="cardInfo">
                            <a href="/blog/BlogArticle/500001">+more</a>
                            <span>2022-04-28</span>
                        </div>
                    </div>
                    <div className="cardBorder" data-aos="fade-up" data-aos-duration="2000">
                        <div className="cardImg"><img src={blogimg02} alt=""/></div>
                        <div className="cardText">
                            <h5>手沖咖啡，不同溫度對於咖啡風味的感受有何不同？</h5>
                            <p>因為很重要，所以提及咖啡沖煮，不厭其煩地都會一再被講者、書籍、影片叮嚀，咖啡在沖煮時，最重要的沖煮變因是咖啡粉量、研磨粗細、沖煮時間，以及沖煮水溫。萃取與研磨之間的變化效應，通常緊接在四大沖煮變因之後，坊間針對萃取與研磨開設的課程更是不可計數。</p>
                        </div>
                        <div className="cardInfo">
                            <a href="/blog/BlogArticle/500002">+more</a>
                            <span>2022-03-05</span>
                        </div>
                    </div>
                    <div className="cardBorder">
                        <div className="cardImg"><img src={blogimg03} alt=""/></div>
                        <div className="cardText">
                            <h5>'賴昱權 烘出咖啡的千百風情'</h5>
                            <p>賴昱權說：「第一次感覺到身為咖啡師的自己如此重要。因為，一杯咖啡可能是某個人的命運，溫暖，或是愛情。」</p>
                        </div>
                        <div className="cardInfo">
                            <a href="/blog/BlogArticle/500004">+more</a>
                            <span>2022-06-06</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default  homeBlog