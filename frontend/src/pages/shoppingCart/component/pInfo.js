import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../pay1.css';
import { VscChromeClose } from "react-icons/vsc";
import AddNumBtn from './AddNumBtn';


function PInfo(props){
const [ finalTotal, setfinalTotal ]= useState('1')


  return(
    <>
            <div class="payInfo">
                
                <div class="payInfoContent">
                    <div class="col-2">
                        <img class="packageImg" src={require('../img/包裝 9.png')} alt=""></img>
                    </div>
                    <div class="col-4 pName">
                        <p>伊莎米 精選招牌特調(半磅)</p>
                    </div>
                  
                        <AddNumBtn setfinalTotal= {setfinalTotal} />
                  
                    <div class="col-2">
                        <p>刪除</p>
                    </div>
                    <div class="col-1">

                        <p>${499* Number(finalTotal)}</p>
                    </div>
                </div>
                <hr></hr>
                
            </div>
      {/* 手機版 */}
            <div class="mPayInfoContent">
                <div class="box">
                    <Link href=""><VscChromeClose size={20} /></Link>
                    <div class="boxContent">
                        <div class="imgPart">
                            <img class="packageImg" src={require('../img/包裝 9.png')}alt=""></img>
                            <div>
                                <p>伊莎米 </p>
                                <p>精選招牌特調(半磅)</p>
                            </div>
                        </div>
                        <AddNumBtn setfinalTotal= {setfinalTotal}/>
                    </div>
                </div>
            </div>
      
  </>
  );
}

export default PInfo