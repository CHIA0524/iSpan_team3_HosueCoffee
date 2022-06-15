import { useState, useEffect, useCallback,useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom';
import './brandproduct.css';
import './component/popup.css';
import ProductCard from './component/ProductCard';
import Aside from './component/Aside';
import Popup from './component/Popup';


function ShopEthiopia(props){
const{ auth ,setcarNum } =props

 //抓到點擊商品的id
const [productId, setProductId] = useState(2)
//console.log.log(productId)
//控制ＰＯＰＵＰ的ＣＳＳ
const [css, setcss] = useState()

//取得會員編號
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
        const response = await fetch('http://localhost:3001/shop/ethiopia');
        const results = await response.json();
        setDatas(results);
        var WISH=[];
        for(var i=0;i<results.length;i++){
        const PMF = await fetch(`${process.env.REACT_APP_API_URL}/shop/wishlist?fk_m_id=${thismemberid}&fk_p_id=${results[i].p_id}`);
         const PMF2 = await PMF.json();
         //console.log.log(results[i].p_id)
         //console.log.log(PMF2.total)
         WISH.push({p_id:results[i].p_id,TF:PMF2.total})
       }
       setDatasPMF(WISH)
        
        //讀取全部資料，並寫入Alldata
      const Aresponse = await fetch('http://localhost:3001/shop');
      const Aresults = await Aresponse.json();
      setAllDatas(Aresults);
   }
 
    
    
    useEffect(()=>{
      fetchData();
    },[])
   //  const handleClick = (pCard)=>{
   //  //console.log.log(pCard)
   // }
    
   //點選以外視窗，關閉popup
  
 
     //  select頁面跳轉
     const find = (event) => {
      event.preventDefault();
      if (event.target.value === "shop") {
          window.location.assign('/shop')
          }
           else if (event.target.value === "kenya") {
           window.location.assign('/shop/kenya')
           }
           else if (event.target.value === "ethiopia") {
              window.location.assign('/shop/ethiopia')
              }
          else if (event.target.value === "brazil") {
              window.location.assign('/shop/brazil')
              }
          else if (event.target.value =="colombia") {
              window.location.assign('/shop/colombia')
              }
          else if (event.target.value =="guatemala") {
              window.location.assign('/shop/guatemala')
              }
          else{
              window.location.assign('/shop/other')
          }
      }
   
   
    

  return(
    <>
     {/* {datas.map((pCard,i)=>{
         //console.log.log(pCard.id);
         
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
                            {/* <!-- 手機板的select --> */}
                            <div class="type">
                                <select class="form-select form-select-sm                     typeDetail"  onChange={(e) => find(e)} 
                                required>
                                    <option value="shop">全部</option>
                                    <option value="kenya" >肯亞</option>
                                    <option value="ethiopia" selected>衣索比亞</option>
                                    <option value="brazil">巴西</option>
                                    <option value="colombia">哥倫比亞</option>
                                    <option value="guatemala">瓜地馬拉</option>
                                    <option value="other">其他</option>
                                </select>
                            </div>
                
                            <main class="pMain col ">
                                <div class="row justify-content-center">
                                <ProductCard datas={datas} setProductId={setProductId} auth={auth} setcss={setcss}
                                    datasPMF={datasPMF}/>  
                                </div>                                

                                <Popup setcarNum={setcarNum} datas={datas} productId={productId} Alldatas={Alldatas} setcss={setcss} css={css} />
                               
                            </main>
                        </div>
                        </div>
           {/* </div>         
                    )
       })} */}
     </>
  ); 
}

export default ShopEthiopia