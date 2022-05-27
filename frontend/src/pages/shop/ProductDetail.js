import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Aside from './component/Aside';
import './productdetail.css';
import RecCard from './component/RecCard';
import MRecCard from './component/MRecCard';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";






function ProductDetail(props){
  // 數量變數
  const[amount, setAmount]= useState(1)
 //   const{setfinalTotal} = props
 // 計算總數量
  const {setsubTotal  }= props

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
    },[params.id])
        
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
                            <button onClick={() =>{if(amount>1){
                               setAmount(amount - 1)
                               setsubTotal(amount - 1)
                               }}}>-</button>
                                <div className="NTotal">{amount}</div>
                                <button className="NumR" onClick={() =>{
                                setAmount(amount + 1)
                                setsubTotal(amount + 1)}
                                }>+</button>
                            </div>
                            <br></br>

                            <div className="addCart">
                                <a href=""><button type="button" className="addCartBtn" id="subtract">加入購物車
                                    </button></a>
                            </div>
                        </div>


                    </div>
                  <div className="DRec">
                  <RecCard/>
                  </div>
                  <div className="MRec">
                  <MRecCard/>
                  </div>
                </main>
            </div>
        </div>
       
          
      
        
     

    
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