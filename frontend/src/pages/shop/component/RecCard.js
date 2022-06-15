import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../productdetail.css';
import ProductDetail from '../ProductDetail';
import Slider from "react-slick";
import './RecCard.css';




function RecCard(props){
  const[amount, setAmount]= useState(1)
  // 向後端請求資料
  const [datas, setDatas ] = useState([])
 
  const fetchData = async()=>{
    const response = await fetch('http://localhost:3001/shop/rec');
    const results = await response.json();
    setDatas(results);
  }
  useEffect(()=>{
    fetchData();
  },[])

  
  // 輪播 更改寬度
  const [width, setWidth] = useState(750);
  const [display, setDisaplay] = useState(true);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  
  
  return(
    <>
     <div className="moreInfo ">
       
          <div>
            <div
              style={{
                width: width + "px",
                display: display ? "block" : "none"
              }}
             >
             <div className="RText">推薦商品</div>
              <Slider {...settings}>
                 {/* 連資料庫 */}
                      {datas.map((PCard,p_id)=>{
                        console.log(PCard.p_id);
                       const img1=(PCard.p_name);
                        return(
               
                        <div>
                             <div className="pCardWrap" key={PCard.p_id}>
                                <div className="card recCard">
                                   <div class="rPackage" >
                                    <Link to= {`/shop/ProductDetail/${PCard.p_id}`}
                                    >
                                     <img class="card-img-top recImg" src={require('../img/'+img1+'.jpg')} alt="" 
                                     onClick={() =>{
                                setAmount(1)
                                }
                                }></img>
                                     </Link>
                                    </div>
                                <div>
                                 <div>{PCard.p_name}</div>
                                 <div class="rCardPrice">${PCard.p_price}</div>
                             </div>
                        </div>
                       </div>
                        </div>
                        )
                      })}  
              </Slider>
            </div>
          </div>
        </div>
     
       
    </>
  );
}

export default RecCard