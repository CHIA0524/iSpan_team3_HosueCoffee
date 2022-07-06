import { useState, useEffect, useCallback,useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import './brandproduct.css';
import './component/popup.css';
import ProductCard from './component/ProductCard';
import Aside from './component/Aside';
import Popup from './component/Popup';


function ShopKenya(props){
const{ auth } =props

  //抓到點擊商品的id
const [productId, setProductId] = useState(2)
// console.log(productId)
//控制ＰＯＰＵＰ的ＣＳＳ
const [css, setcss] = useState()
const [thismemberid,setThismemberid]=useState(localStorage.getItem("true"))

const[amount, setAmount]= useState(1)

     
     
     //用來儲存本頁資料
     const [datas, setDatas ] = useState([])
     //用來儲存全部資料
     const [Alldatas, setAllDatas ] = useState([])
    //用來儲存是否收藏
    const [datasPMF, setDatasPMF ] = useState([])
     // 向後端請求資料
     const fetchData = async()=>{
         //讀取本頁資料，並寫入datas
         const response = await fetch('http://localhost:3001/shop/kenya');
         const results = await response.json();
         setDatas(results);
         var PFMARR=[];
         for(var i=0;i<results.length;i++){
         const PMF = await fetch(`${process.env.REACT_APP_API_URL}/shop/FavoriteYN?fk_m_id=${thismemberid}&fk_p_id=${results[i].p_id}`);
          const PMF2 = await PMF.json();
          // console.log(results[i].p_id)
          // console.log(PMF2.total)
          PFMARR.push({p_id:results[i].p_id,TF:PMF2.total})
        }
        setDatasPMF(PFMARR)
         
         //讀取全部資料，並寫入Alldata
       const Aresponse = await fetch('http://localhost:3001/shop');
       const Aresults = await Aresponse.json();
       setAllDatas(Aresults);
    }
  
     
     
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
                                    <ProductCard datas={datas} setProductId={setProductId} setcss={setcss} auth={auth} datasPMF={datasPMF}/>  
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

export default ShopKenya