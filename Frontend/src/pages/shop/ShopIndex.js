import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './brandproduct.css';
import './popup.css';
import ProductCard from './ProductCard';

function ShopIndex(){


  return(
    <>
    <div class="mShop">
        <p>商店</p>
    </div>
    {/* <!-- 手機板的select --> */}
    <div class="type">
        <select class="form-select form-select-sm typeDetail">
            <option selected>全部</option>
            <option value="1">肯亞</option>
            <option value="2">衣索比亞</option>
            <option value="3">巴西</option>
            <option value="4">哥倫比亞</option>
            <option value="5">瓜地馬拉</option>
            <option value="6">其他</option>
        </select>

    </div>

    <div class="container">
        <div class="row">
            <aside class="adminAside col-2">
                <ul class="asideContent">
                    <p class="maindir">商店</p>
                    <li>
                        <a href="">全部</a>
                    </li>
                    <li>
                        <a href="">肯亞</a>
                    </li>
                    <li>
                        <a href="">衣索比亞</a>
                    </li>
                    <li>
                        <a href="">巴西</a>
                    </li>
                    <li>
                        <a href="">哥倫比亞</a>
                    </li>
                    <li>
                        <a href="">瓜地馬拉</a>
                    </li>
                    <li>
                        <a href="">其他</a>
                    </li>

                </ul>

            </aside>

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
            </main>
        </div>
    </div>
    </>
  );
}

export default ShopIndex