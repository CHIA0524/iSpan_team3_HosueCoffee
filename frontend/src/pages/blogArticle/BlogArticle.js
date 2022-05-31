import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './articleBanner.css';
// import Blog from './component/BlogCard';

//imgs
import facebookImg from './img/share btn fb.svg'
import lineImg from './img/share btn line.svg'
import instagramImg from './img/share btn ig.svg'


function BlogArticle(props){
    return(
      <>
   <section>
    <div className="articleBanner"></div>

    <div className="container">
      <div className="row "> 
          <div className="title">冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹</div>
        
          <div className="author">2022/04/08｜咖啡篇by hsphere</div>


          {/* <!--makeLinkDown用來將 outsideLink在縮至行動裝置版時,顯示於下方 --> */}
          <div className="makeLinkDown">
                  
            <div className="outsideLink">
              <div className="facebook"><Link href="#"><img src={facebookImg} alt="facebookImg"></img></Link></div>&emsp;
              <div className="line"><Link href="#"><img src={lineImg} alt="lineImg"></img></Link></div>&emsp;
              <div className="Instagram"><Link href="#"><img src={instagramImg} alt="instagramImg"></img></Link></div>
              
            </div>
            
            
            <article>
              <p>
                &emsp;&emsp;炎炎夏日，來杯清涼消暑的冰咖啡解解渴是再好也不過的事了，近來市面上各種冷萃咖啡產品推陳出新，如：冰滴咖啡、冷泡咖啡、冰釀咖啡…等。適量飲用優質的黑咖啡對人體有益，就讓小編帶著大家一起了解關於冷萃咖啡的奧秘。</p>
                
                <p>
                有別於一般的熱水萃取方式，冷萃咖啡Cold Brew Coffee / Toddy，是使用冰/冷水長時間的萃取，咖啡中的芬芳物質會慢慢被釋出，因長時間的萃取，帶有發酵風味及濃郁的酒香。傳說是大學畢業生陶德辛普森Todd Simpson喝到來自秘魯的濃縮咖啡後，靈感乍現，進而於1964年研發出冷萃咖啡，同時又受到其妻子擁有腸胃疾病的影響，更致力於嘗試沖煮出不易傷胃的咖啡形態。市面上常見的冰滴咖啡、冷泡咖啡、冰釀咖啡….等，都屬於冷萃咖啡的一種。
              </p>
              
              
              
              <p>
                <b>冷萃咖啡 – 冰水滴漏製成法</b><br />
                ▍冰滴咖啡
                英文為 Cold Drip Coffee，顧名思義是以冰水滴漏的方式，緩慢萃取出咖啡。相傳在1699年荷蘭人到印尼爪哇島種植咖啡時，為了降低咖啡的酸味、以及對腸胃的過度刺激，荷蘭人便使用冷水來沖煮咖啡，同時更發現以冷水沖煮出的咖啡，可以擁有較長的保存期限。但因現今冰滴咖啡的蹤跡幾乎無法在荷蘭看到，相反的，亞洲國家卻很盛行，因此也有亞洲國家為行銷而杜撰此由來一說。
              </p>
              
              <p>
                冰滴咖啡壺的最上方為冰塊放置處、咖啡粉置於中層、最下方則是咖啡液收集壺，藉由冰塊緩慢融化成水，再均勻滴漏於咖啡粉中，是一種冰塊融化與咖啡萃取同時進行、進而萃取出咖啡的過程。冰滴咖啡的風味香醇、能夠鎖住其本身的咖啡香氣，且層次乾淨細緻、口感滑順不苦澀，有時還會有淡淡的酒香，是非常受亞洲人歡迎的咖啡款式之一！
              </p>
              
              <p> 
                冰滴咖啡整體的萃取時間較長，從萃取起始至完全萃取，大約需要4~8小時，爾後，再將萃取完成的咖啡放入冰箱冷藏1~7天，才算是完成冰滴咖啡製作的所有過程，而因其製作時程花費較長，故市售價格也較為昂貴。
                
                濃郁口感：中等，香醇口感
                萃取溫度：低溫，約4~10℃
                品飲風味：層次豐富、滑順不苦澀
              </p>
              
              <div className="articleImg">
                <img src={require('./img/Article01.svg')} alt=""></img>
              </div>
              
              
              <p>
                
                <b>冷萃咖啡 – 浸泡製成法</b><br />
                ▍冷泡咖啡
                有點類似法壓壺或聰明濾杯的概念，將咖啡完全浸泡於冰/冷水中，再放入冰箱，通常至少浸泡12小時，才能有效將咖啡粉中的物質和層次萃取出來，若希望風味更加濃醇，亦可將浸泡時間拉長至24~48小時。
              </p>

              <p>  
                由冰/冷水長時間緩慢萃取出的冷泡咖啡，大幅降低了咖啡的酸澀風味，味道較為圓潤、也萃取出更飽滿的油脂含量，同時還有助於排除部分咖啡豆本身帶有的煙燻氣息，若能賦予其足夠長的萃取時間，有時更能喝到因發酵而提煉出的酒香口感，冷泡咖啡整體的風味可說是圓滑感十足。
                
                濃厚程度：中等，滑順圓潤口感
                萃取溫度：低溫
                品飲風味：油脂滑順與發酵感
              </p><br />
                
              <p>  
                ▍冰釀咖啡
                藉由咖啡低溫發酵的原理，讓沖煮完成的咖啡冰鎮一段時間，鎖住其香氣並醞釀更豐富的口感，再取出飲用。就冰釀咖啡而言，咖啡萃取的溫度就沒有冰滴咖啡這麼講究，主要會著重於沖煮完成後冰鎮的這個過程。
                
                濃厚程度：中等，清香風味
                萃取溫度：不限 品飲風味：清爽、發酵
                
              </p>
              
              <div className="articleImg"><img  src={require('./img/Article02.svg')} alt=""></img></div>
              
              <p>
              <b>延伸知識 – 關於氮氣咖啡</b><br />
                ▍氮氣咖啡 / 氮氣冷萃咖啡
                將氮氣打入咖啡中的一款咖啡，屬於冷萃咖啡的花式做法。藉由高壓和低溫，將氮氣注入已萃取完成的冷萃咖啡中，使其口感綿密細膩、滑順、且不酸澀刺激，有著類似啤酒的品飲感受，無須添加牛奶或糖分，就能提升口中淡淡回甘的感覺，進而讓大腦有喝到甜味的錯覺。
              </p>
                
              <p> 
                氮氣咖啡的另一個重點，是氮氣也助於延長咖啡的新鮮度，當咖啡放置一段時間後，空氣會使之慢慢氧化，而注入氮氣的咖啡，就像有一層暫時性的保護膜，能夠維持咖啡本身的品質，並讓風味更加穩定，對於消暑清涼，更是很不錯的選擇！
                
                濃郁口感：低，清爽口感
                萃取溫度：低溫 品飲風味：綿密、發酵、回甘
                品飲風味：綿密、發酵、回甘
              </p>
              <div className="articleImg"><img  src={require('./img/Article03.svg')} alt=""></img></div>
              <p>
                高溫難耐的夏日，雖然冷萃咖啡帶來了無比沁涼的感受，且口感上清新滑順，沒有濃郁苦澀的風味，但因需耗費較長的時間萃取，故其咖啡因含量更甚短時間高溫萃取的咖啡，對咖啡因濃淡度較敏感的品飲者，需要特別留意！
              </p>
            </article>
          </div>  
          
          <div className="backBtn"><Link  href="#">返回</Link></div>



          <div className="recommend"><h2>相關文章推薦</h2></div>

          <div className="recommendWrapper ">
            
            <div className="slideBtnLeft">
              <Link href="#"><img src={require('./img/Vector-left.svg')} alt=""></img></Link>
                  </div>
              </div>

            <div className="recommendCard recHidden col">
                <Link href="">
                  <img src="../img/3-3-1024x682.jpg" alt=""></img>
                </Link>
                <div><p>曼特寧、麝香貓咖啡咖啡人必知的印尼咖啡</p></div>
            </div>
           
           
            <div className="recommendCard recHidden col">
                <Link href="">
                  <img src="../img/3-3-1024x682.jpg" alt=""></img>
                </Link>
                <div><p>曼特寧、麝香貓咖啡咖啡人必知的印尼咖啡</p></div>
            </div>
           
           
            <div className="recommendCard recHidden col">
                <Link href="">
                  <img src="../img/3-3-1024x682.jpg" alt=""></img>
                </Link>
                <div><p>曼特寧、麝香貓咖啡咖啡人必知的印尼咖啡</p></div>
            </div>
        
           
              <div className=" slideBtnRight">
                <Link href="#"><img src="../img/Vector-right.svg"  alt=""></img></Link>
              </div>

        </div>   
      </div>
    
  </section>
 
      </>
    )
}

export default BlogArticle