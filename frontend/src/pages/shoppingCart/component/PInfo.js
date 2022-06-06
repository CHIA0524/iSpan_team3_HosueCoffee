import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../pay1.css';
import { VscChromeClose } from "react-icons/vsc";
import AddNumBtn from './AddNumBtn';
import Delsweetalert from './Delsweetalert';





function PInfo(props){
    // 數量變數
    const [ subTotal, setsubTotal ]= useState(1)
    // 小計
    // const [ ptotal, setPtotal ]= useState(0)
    const {setPtotal, ptotal } = props
    // const m = pmoney* Number(subTotal)
    const [ total, setotal ]= useState(1)
  

//   const{setfinalTotal} = props
// 計算總數量
//   const {subTotal,setsubTotal }= props
const pmoney=499
  // console.log(subTotal)
//   const {ptotal,setPtotal }= props
useEffect(()=>{
},[])

    
    // TODO計數器資料傳遞
    
    // 接收localStorage上的購物車資料
    const cartDetail = JSON.parse(localStorage.getItem('sCarts'))
    console.log(cartDetail)
    // 接收資料庫資料
    const {datas} = props 

    // 計算datas的長度
    const datamath=datas.length
    console.log(datamath)
    // 計算cartDetail的長度
    const cartDetailmath=cartDetail.length
    // 建立一個空陣列

    var shopCart=[];
    console.log(datas);
    for( let i=0; i<datamath; i++){     
        for( let c=0; c<cartDetailmath; c++){
            
            if(datas[i].p_id === cartDetail[c].id)
            { 
                var newdata = datas[i]  
                var newarr = newdata
                shopCart.push(newarr)
            } 
        }
    }  

return(
    <>
    {shopCart.map((pinfo,i)=>{
        // 設定圖片路徑
        const img1 = (pinfo.p_name)
        const total = cartDetail[i].ShopCounter
        return(         
        <div className="payInfoAll" key={pinfo.id}>
            <div className="payInfo">
                <div className="payInfoContent">
                    <div className="col-2">
                        <img className="packageImg"  src={require('../img/'+ img1 +'.jpg')} alt="fake">   
                        </img>
                    </div>
                    <div className="col-4 pName">
                        <p>{pinfo.p_name}</p>
                    </div>
                    <div className="col-3 numberDesk ">
                     <p>數量：</p>
                     <div className="addPNum">
                         <button className="PNumL" onClick={() =>{if((Number(document.getElementById(pinfo.p_name).innerHTML))>1){
                            //  setsubTotal(subTotal - 1)
                            //  setPtotal(ptotal-pmoney)
                            document.getElementById(pinfo.p_name).innerHTML=Number(document.getElementById(pinfo.p_name).innerHTML)-1
                            
                             }}}>-</button>
                         <div id={pinfo.p_name}>{total}</div>
                         <button className="PNumR" onClick={() =>{
                             document.getElementById(pinfo.p_name).innerHTML=Number(document.getElementById(pinfo.p_name).innerHTML)+1
                             

                            //  setsubTotal(subTotal + 1)
                            //  setPtotal(pmoney*(subTotal+ 1))
                            //  setPtotal(ptotal+pmoney)

                           }
                         }>+</button>
                      </div>
                      </div>
                  
                        {/* <AddNumBtn subTotal={subTotal} setsubTotal= {setsubTotal} ptotal={ptotal} setPtotal={setPtotal}/> */}
                   
                    <div className="col-2">
                        <button className="deletBtn" onClick={Delsweetalert}>刪除</button>
                    </div>
                    <div className="col-1">
                        <p >{pmoney* Number(total)}
                        </p>
                    </div>
                </div>
                <hr></hr>
                
            </div>
      {/* 手機版 */}
            <div className="mPayInfoContent">
                <div className="box">
                    <Link href="" onClick={Delsweetalert}><VscChromeClose size={20} /></Link>
                    <div className="boxContent">
                        <div className="imgPart">
                            <img className="packageImg" src={require('../img/包裝 9.png')}alt=""></img>
                            <div className="mPName">
                                <p>伊莎米 精選招牌特調(半磅)</p>
                                
                            </div>
                        </div>
                        <div class="number">
                        <div class="mAddNum">
                            <button className="buttonNum" onClick={() =>{if(subTotal>1){
                            setsubTotal(subTotal - 1)
                            }}}>-</button>
                            <div>{subTotal}</div>
                           <button className="buttonNum"onClick={() =>{
                            setsubTotal(subTotal + 1)
                            }} >+</button>
                        </div>
                        <h3>${pmoney* Number(subTotal)}</h3>
                      </div>   

                    </div>
                </div>
            </div>
       </div>
       )
     })}
   </>   
    )    

}

export default PInfo