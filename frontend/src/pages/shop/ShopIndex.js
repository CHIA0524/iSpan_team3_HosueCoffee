import { useState, useEffect, useCallback,useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import './brandproduct.css';
import './component/popup.css';
import ProductCard from './component/ProductCard';
import Aside from './component/Aside';
import Popup from './component/Popup';


function ShopIndex(props){
  //抓到點擊商品的id
const{ auth } =props
const [productId, setProductId] = useState(2)
console.log(productId)
//控制ＰＯＰＵＰ的ＣＳＳ
const [css, setcss] = useState()
//取得會員編號
const [thismemberid,setThismemberid]=useState(localStorage.getItem("true"))

const[amount, setAmount]= useState(1)

     // 向後端請求資料

     //用來儲存本頁資料
     const [datas, setDatas ] = useState([])
     //用來儲存全部資料
     const [Alldatas, setAllDatas ] = useState([])

     //用來儲存是否收藏
     const [datasPMF, setDatasPMF ] = useState([])

     const fetchData = async()=>{
       //讀取本頁資料，並寫入datas
       const response = await fetch('http://localhost:3001/shop');
       const results = await response.json();
       setDatas(results);
        console.log("------")
        console.log(results)
        console.log("------")
       //設定一個空陣列
       var PFMARR=[];
       //對本頁的的資料進行迴圈，對比收藏表裡是否有此會員跟此商品
       for(var i=0;i<results.length;i++){
        const PMF = await fetch(`${process.env.REACT_APP_API_URL}/shop/FavoriteYN?fk_m_id=${thismemberid}&fk_p_id=${results[i].p_id}`);
        const PMF2 = await PMF.json();
        console.log(results[i].p_id)
        console.log(PMF2.total)

        PFMARR.push({p_id:results[i].p_id , TF:PMF2.total})
        console.log("這是第"+(i+1)+"筆商品")
        console.log(PFMARR)
      }
      setDatasPMF(PFMARR)
       //讀取全部資料，並寫入data
       const Aresponse = await fetch('http://localhost:3001/shop');
       const Aresults = await Aresponse.json();
       setAllDatas(Aresults);
     }
    //  console.log("-----")
    //  console.log(datasPMF);
    //  console.log("-----")
     useEffect(()=>{
       fetchData();
     },[])
    //  const handleClick = (pCard)=>{
    //  console.log(pCard)
    // }
     
    //點選以外視窗，關閉popup
   
    

  return(
    <>
     {/* {datas.map((pCard,i)=>{
         console.log(pCard.id);
         
         const img1=(pCard.p_name);
         const id='#'+(pCard.id); */}
          
        {/* return( */}
          {/* <div key={pCard.id}> */}
       
                    <div class="mShop">
                        <p>商店</p>
                    </div>
                    
                
                    <div class="container" >
                        <div class="row" >
                            <Aside />
                
                            <main class="pMain col ">
                                <div class="row justify-content-center">
                                    <ProductCard datas={datas} setProductId={setProductId} auth={auth} setcss={setcss} datasPMF={datasPMF}/>  
                                </div>                                
                                <Popup datas={datas} productId={productId} Alldatas={Alldatas} setcss={setcss} css={css} />
                               
                            </main>
                        </div>
                        </div>
           {/* </div>         
                    )
       })} */}
     </>
  ); 
} 

export default ShopIndex