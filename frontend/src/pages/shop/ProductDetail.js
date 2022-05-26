import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import { useState, useEffect, useCallback, Component } from 'react';
import Aside from './component/Aside';
import './productdetail.css';
import RecCard from './component/RecCard';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
// import MultipleItems from './component/MultipleItems';
// import RecSlider from './component/RecSlider';
// import RRRSlider from './component/RRRSlider';






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
    
    const img1=(p_name);

    return(
      <>
            <div className="mShop">
              <p>商店</p>
             </div>

          <div className="container">
            <div className="row">
             <Aside />
                <main className="pMain col">
                    <div className="pDetail  ">
                        <div className="mImg">
                          <img className="card-img-top" src={require('./img/'+img1+'.jpg')} alt=""></img>
                        </div>
                        <div className="pContentInfo">
                            <p className="productName">{p_name}</p>
                            <h4>＄{price}</h4>
                            <div  dangerouslySetInnerHTML={{__html: content}}/>
                            <br></br>
                            <div/>
                            <br></br>
                            <p>數量</p>
                            <div className="addNum1">
                                <a href=""><button type="button" className="buttonNum" >-</button></a>
                                <input className="num" type="text" id="text" value="1" />
                                <a href=""><button type="button" className="buttonNum" >+</button></a>
                            </div>
                            <br></br>

                            <div className="addCart">
                                <a href=""><button type="button" className="addCartBtn" id="subtract">加入購物車
                                    </button></a>
                            </div>
                        </div>


                    </div>

                   
                 <div className="moreInfo ">
                      <div className="Box">
                        {/* <div className="boxText">推薦商品</div>
                          <div className="infoInline">
                            <div className="infoBtn">
                                <a href=""><IoIosArrowDropleft size={40}/></a>
                            </div> */}
                            {/* <MultipleItems/>                                      */}
                            {/* <div className="infoBtn ">
                             <a href=""><IoIosArrowDropright size={40}/></a>
                            </div>
                           </div>
                         </div> */}
                      </div>
                    </div> 

                    {/* <div className="moreInfo ">
                    <RecSlider/>   
                    </div> */}
                    {/* <div className="moreInfo ">
                    <RRRSlider/>   
                    </div> */}
                    </main>
            </div>
        </div>
       
          )
      
        
     

    
      </>
    )
  }
  }
  
  
  export default ProductDetail

//   <div className="card ">
//   <div className="recProduct1">推薦商品</div>  
//     <RecCard />
// </div>
// <div className="card mHidden">
//   <div className="recProduct ">推薦商品</div>
//   {/* <RecCard /> */}

// </div>
// <div className="card  mHidden">
//   <div className="recProduct1">推薦商品</div>
//   {/* <RecCard /> */}

// </div>