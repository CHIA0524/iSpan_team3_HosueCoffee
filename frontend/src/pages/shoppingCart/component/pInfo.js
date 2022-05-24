import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../pay1.css';
import { VscChromeClose } from "react-icons/vsc";
import AddNumBtn from './AddNumBtn';
import Delsweetalert from './Delsweetalert';




function PInfo(props){
    // 小計
const [ subTotal, setsubTotal ]= useState('1')


 
    // const removePinfo=()=>{
    //  if(window.confirm("確定要刪除此商品媽？")== true){
    //     window.alert("商品已刪除");
        
    // }else{
    //      window.alert("商品未刪除");
        
    // }}



return(
    <>
            <div className="payInfo">
                
                <div className="payInfoContent">
                    <div className="col-2">
                        <img className="packageImg" src={require('../img/包裝 9.png')} alt=""></img>
                    </div>
                    <div className="col-4 pName">
                        <p>伊莎米 精選招牌特調(半磅)</p>
                    </div>
                  
                        <AddNumBtn setsubTotal= {setsubTotal} />
                  
                    <div className="col-2">
                        <button className="deletBtn" onClick={Delsweetalert}>刪除</button>
                    </div>
                    <div className="col-1">

                        <p>${499* Number(subTotal)}</p>
                    </div>
                </div>
                <hr></hr>
                
            </div>
      {/* 手機版 */}
            <div className="mPayInfoContent">
                <div className="box">
                    <Link href=""><VscChromeClose size={20} /></Link>
                    <div className="boxContent">
                        <div className="imgPart">
                            <img className="packageImg" src={require('../img/包裝 9.png')}alt=""></img>
                            <div>
                                <p>伊莎米 </p>
                                <p>精選招牌特調(半磅)</p>
                            </div>
                        </div>
                        <AddNumBtn setfinalTotal= {setsubTotal}/>

                    </div>
                </div>
            </div>
      
  </>
  );
}

export default PInfo