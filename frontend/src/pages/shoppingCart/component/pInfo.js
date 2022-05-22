import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../pay1.css';



function pInfo(){

  return(
    <>
       <div class="pInfo">
                <hr></hr>
                <div class="payInfoContent">
                    <div class="col-2">
                        <img class="packageImg" src={require('../img/包裝 9.png')} alt=""></img>
                    </div>
                    <div class="col-4 pName">
                        <p>伊莎米 精選招牌特調(半磅)</p>
                    </div>
                    <div class="col-3 num d-flex">
                        <p>數量：</p>
                        <div class="addNum">
                            <div class="NumL">-</div>
                            <div><input type="text" value="" /></div>
                            <div class="NumR">+</div>
                        </div>
                    </div>
                    <div class="col-2">
                        <p>刪除</p>
                    </div>
                    <div class="col-1">
                        <p>$499</p>
                    </div>
                </div>
                <hr></hr>
            </div>
      {/* 手機版 */}
            <div class="mPayInfoContent">
                <div class="box">
                    <Link href=""><img class="X" src="./img/Vector.png" alt=""></img></Link>
                    <div class="boxContent">
                        <div class="imgPart">
                            <img class="packageImg" src={require('../img/包裝 9.png')}alt=""></img>
                            <div>
                                <p>伊莎米 </p>
                                <p>精選招牌特調(半磅)</p>
                            </div>
                        </div>
                        <div class="number">
                            <div class="mAddNum">
                                <Link href=""><button type="button" class="buttonNum" id="plus">+</button></Link>
                                <input class="num" type="text" id="text" value="" />
                                <Link href=""><button type="button" class="buttonNum" id="subtract">-</button></Link>
                            </div>
                            <h3>$499</h3>
                        </div>
                    </div>
                </div>
            </div>
      
  </>
  );
}

export default pInfo