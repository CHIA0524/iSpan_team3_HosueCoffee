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
  

//   const{setfinalTotal} = props
// 計算總數量
//   const {subTotal,setsubTotal }= props
const pmoney=499
  // console.log(subTotal)
//   const {ptotal,setPtotal }= props
useEffect(()=>{
},[])


    // const totalPrice = () => {
    //     let total = 0
    //     for (let i = 0; i < productsInOrder.length; i++) {
    //       total += productsInOrder[i].count * productsInOrder[i].price
    //     }
    //     return total
    //   }

return(
    <>
        <div className="payInfoAll">
            <div className="payInfo">
                
                <div className="payInfoContent">
                    <div className="col-2">
                        <img className="packageImg" src={require('../img/包裝 9.png')} alt=""></img>
                    </div>
                    <div className="col-4 pName">
                        <p>伊莎米 精選招牌特調(半磅)</p>
                    </div>
                    <div className="col-3 numberDesk ">
                     <p>數量：</p>
                     <div className="addNum">
                         <button className="NumL" onClick={() =>{if(subTotal>1){
                             setsubTotal(subTotal - 1)
                             setPtotal(ptotal-pmoney)
                            
                             }}}>-</button>
                         <div>{subTotal}</div>
                         <button className="NumR" onClick={() =>{

                             setsubTotal(subTotal + 1)
                             setPtotal(pmoney*(subTotal+ 1))
                             setPtotal(ptotal+pmoney)

                           }
                         }>+</button>
                      </div>
                      </div>
                  
                        {/* <AddNumBtn subTotal={subTotal} setsubTotal= {setsubTotal} ptotal={ptotal} setPtotal={setPtotal}/> */}
                   
                    <div className="col-2">
                        <button className="deletBtn" onClick={Delsweetalert}>刪除</button>
                    </div>
                    <div className="col-1">
                         

                        <p >${pmoney* Number(subTotal)}
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
  </>
  );
}

export default PInfo