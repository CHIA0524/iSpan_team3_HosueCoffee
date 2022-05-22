import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Aside from './component/Aside';
import './productdetail.css';
import RecCard from './component/RecCard';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";





function ProductDetail(){
      // 向後端請求資料
    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{
      const response = await fetch('http://localhost:3001/shop/ProductDetail');
      const results = await response.json();
      setDatas(results);
    }
    useEffect(()=>{
      fetchData();
    },[])


    return(
      <>
     {datas.map((pD,i)=>{
        return(
          <div className="pCardWrap" key={i}>
            <div class="mShop">
              <p>商店</p>
             </div>

          <div class="container">
            <div class="row">
             <Aside />
                <main class="pMain col">
                    <div class="pDetail  ">
                        <div class="mImg">
                        <img class="card-img-top" src={require('./img/包裝 8.png')} alt=""></img>
                        </div>
                        <div class="pContent">
                            <h3>{pD.p_name}</h3>
                            <h4>＄{pD.price}</h4>
                            <br></br>
                            <div dangerouslySetInnerHTML={{__html: pD.content}}/>
                            <br></br>
                            <p>數量</p>
                            <div class="addNum">
                                <a href=""><button type="button" class="buttonNum" id="plus">+</button></a>
                                <input class="num" type="text" id="text" value="1" />
                                <a href=""><button type="button" class="buttonNum" id="subtract">-</button></a>
                            </div>
                            <br></br>

                            <div class="addCart">
                                <a href=""><button type="button" class="addCartBtn" id="subtract">加入購物車
                                    </button></a>
                            </div>
                        </div>


                    </div>

                    <div>
                    <div class="moreInfo ">
                            <div class="infoBtn">
                                <a href=""><IoIosArrowDropleft size={40}/></a>
                            </div>
                            <div class="card ">
                                <div class="recProduct1">推薦商品</div>
                                <RecCard />
                            </div>
                            <div class="card mHidden">
                                <div class="recProduct ">推薦商品</div>
                                <RecCard />

                            </div>
                            <div class="card  mHidden">
                                <div class="recProduct1">推薦商品</div>
                                <RecCard />

                            </div>
                            <div class="infoBtn "><a href=""><IoIosArrowDropright size={40}/></a></div>

                        </div>
                    </div>
                    </main>
            </div>
        </div>
          </div>
          )
      })}
        
     

    
      </>
    );
  }
  
  export default ProductDetail