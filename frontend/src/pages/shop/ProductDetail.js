import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Aside from './component/Aside';
import './productdetail.css';
import RecCard from './component/RecCard';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";





function ProductDetail(){
  const params=useParams();
  //抓網址後的id
  console.log(params)
      // 向後端請求資料
    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{
      const response = await fetch(`http://localhost:3001/shop/ProductDetail/id?id=${params.id}`);
      const results = await response.json();
      setDatas(results);
    }
    useEffect(()=>{
      fetchData();
    },[])
            if(datas.length>0){
            console.log(datas[0]);
            const PD=datas[0];
            const{id,p_name,price,content}=PD
            console.log(p_name);

    return(
      <>
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
                        <div class="pContentInfo">
                            <p className="productName">{p_name}</p>
                            <h4>＄{price}</h4>
                            <div  dangerouslySetInnerHTML={{__html: content}}/>
                            <br></br>
                            <div/>
                            <br></br>
                            <p>數量</p>
                            <div class="addNum1">
                                <a href=""><button type="button" class="buttonNum" >-</button></a>
                                <input class="num" type="text" id="text" value="1" />
                                <a href=""><button type="button" class="buttonNum" >+</button></a>
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
       
          )
      
        
     

    
      </>
    );
  }
  }
  
  export default ProductDetail