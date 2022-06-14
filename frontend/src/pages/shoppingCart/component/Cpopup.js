import { BrowserRouter as Router, Route, Link, Switch ,useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';




function Popup(){
  

    return(
      <>
      <div id="popup2" class="popupShow">
                    <div class="popup">
                        {/* <a class="close" href="#">&times;</a> */}
                        <div class="productPopup">
                            <div class="popBox">
                                <div class="popBoxContent">
                                    <div class="imgPart">
                                        <img class="packageImg" src="./img/包裝 2.png" alt=""/>
                                    </div>
                                    <div class="popContent">
                                        <div class="popText">
                                            <p>伊莎米 </p>
                                            <p>精選招牌特調(半磅)</p>
                                            <p>$499</p>
                                        </div>
                                        <div class="popBtn">
                                            <div class="addNum">
                                                <a href=""><button type="button" class="buttonNum"
                                                        id="subtract">-</button></a>
                                                <input class="num" type="text" id="text" value="1" />

                                                <a href=""><button type="button" class="buttonNum"
                                                        id="plus">+</button></a>
                                            </div>
                                            <div class="addCart">
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
           
  </>
  );
}
export default Popup