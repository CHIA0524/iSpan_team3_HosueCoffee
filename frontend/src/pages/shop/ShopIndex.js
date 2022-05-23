import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './brandproduct.css';
import './component/popup.css';
import ProductCard from './component/ProductCard';
import Aside from './component/Aside';


function ShopIndex(){
    const[total, setTotal]= useState(1)

  return(
    <>
    <div class="mShop">
        <p>商店</p>
    </div>
    

    <div class="container">
        <div class="row">
            <Aside />

            <main class="pMain col ">
                <div class="row justify-content-center">
                    <ProductCard />
                   
                </div>
                {/* <!-- popup 區 --> */}
                <div id="popup1" class="popupShow">
                    <div class="popup">
                        <a class="close" href="#">&times;</a>
                        <div class="productPopup">
                            <div class="popBox">
                                <div class="popBoxContent">
                                    <div class="imgPart">
                                        <img class="packageImg" src={require('./img/包裝 2.png')} alt=""></img>
                                    </div>
                                    <div class="popContent">
                                        <div class="popText">
                                            <p>伊莎米 </p>
                                            <p>精選招牌特調(半磅)</p>
                                            <p>$499</p>
                                        </div>
                                        <div class="popBtn">
                                            <div class="popAddNum">
                                              <button class="buttonNum" onClick={() =>{if(total>1){ setTotal(total - 1)}}}>-</button>
                                              <div>{total}</div>
                                              <button class="buttonNum" onClick={() =>{
                                              setTotal(total + 1)}} >+</button>
                                            </div>
                                            <div class="popAddCart">
                                                <a href=""><button type="button" class="addCartBtn" id="subtract">加入購物車
                                                    </button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    </div>
    </>
  );
}

export default ShopIndex