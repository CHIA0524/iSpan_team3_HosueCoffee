import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import coffeebag01 from './image/coffeebag01.png';



function homeProducts() {
    
    function productsimg1() {
        window.scrollTo(100, 0);
      }

    return (
        <div class="product">
            <div class="allProduct">
                <h1>FLAGSHIP PRODUCTS</h1>
                <div className="scrollDiv">
                    <div class="productscroll" id='scrollProduct1'>
                        <img class="scrollProduct1" src={coffeebag01} alt="" />
                        <div class="productdetail">
                            <h5>伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                    <div class="productscroll">
                        <img class="scrollProduct1" src={coffeebag01} alt="" />
                        <div class="productdetail">
                            <h5>伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                    <div class="productscroll">
                        <img class="scrollProduct1" src={coffeebag01} alt="" />
                        <div class="productdetail">
                            <h5>伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                    <div class="productscroll">
                        <img class="scrollProduct1" src={coffeebag01} alt="" />
                        <div class="productdetail">
                            <h5>伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                    <div class="productscroll">
                        <img class="scrollProduct1" src={coffeebag01} alt="" />
                        <div class="productdetail">
                            <h5>伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                </div>

                <div class="productSel">

                    <div onclick="productsimg1()" class="product1">
                        <img src={coffeebag01} alt="" />
                    </div>
                    <div onclick="productsimg2()" class="product2">
                        <img src={coffeebag01} alt="" />
                    </div>
                    <div class="product3">
                        <img src={coffeebag01} alt="" />
                    </div>
                    <div class="product4">
                        <img src={coffeebag01} alt="" />
                    </div>
                    <div class="product5">
                        <img src={coffeebag01} alt="" />
                    </div>
                </div>
                <div class="productBTN">
                    <a href="">
                        <div class="selBTN">
                        </div>
                    </a>
                    <a href="">
                        <div class="selBTN">
                        </div>
                    </a>
                    <a href="">
                        <div class="selBTN">
                        </div>
                    </a>
                    <a href="">
                        <div class="selBTN">
                        </div>
                    </a>
                    <a href="">
                        <div class="selBTN">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default homeProducts