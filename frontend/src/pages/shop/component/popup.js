import React from 'react';
import { Link } from 'react-router-dom';
import './popup.css';
import ProductCard from './ProductCard';

function popup(props){
    return(props.trigger) ?(
        <div id="popup1" class="popupShow">
        <div class="popup">
            <Link class="close" href="#">&times;</Link>
            { props.children }
            <div class="productPopup">
                <div class="popBox">
                    <div class="popBoxContent">
                        <div class="imgPart">
                            <img class="packageImg" src="./img/包裝 2.png" alt=""></img>
                        </div>
                        <div class="popContent">
                            <div class="popText">
                                <p>伊莎米 </p>
                                <p>精選招牌特調(半磅)</p>
                                <p>$499</p>
                            </div>
                            <div class="popBtn">
                                <div class="addNum">
                                    <Link href=""><button type="button" class="buttonNum"
                                            id="subtract">-</button></Link>
                                    <input class="num" type="text" id="text" value="1" />

                                    <Link href=""><button type="button" class="buttonNum"
                                            id="plus">+</button></Link>
                                </div>
                                <div class="addCart">
                                    <Link href=""><button type="button" class="addCartBtn" id="subtract">加入購物車
                                        </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    ) : "";
}


export default popup