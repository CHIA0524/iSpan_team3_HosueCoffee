import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import CoffeeBagPink from './image/CoffeeBagPink.png';
import CoffeeBagYellow from './image/CoffeeBagYellow.png';
import CoffeeBagGreen from './image/CoffeeBagGreen.png';
import CoffeeBagBlue from './image/CoffeeBagBlue.png';
import CoffeeBagPurple from './image/CoffeeBagPurple.png';

function homeProducts(props) {

    // 網頁版scrollTo
    const productsimg1 = () => {
        document.querySelector('#scrollDiv1').scrollTo(100, 0);
    }
    const productsimg2 = () => {
        document.querySelector('#scrollDiv1').scrollTo(100, 361);
    }
    const productsimg3 = () => {
        document.querySelector('#scrollDiv1').scrollTo(100, 722);
    }
    const productsimg4 = () => {
        document.querySelector('#scrollDiv1').scrollTo(100, 1083);
    }
    const productsimg5 = () => {
        document.querySelector('#scrollDiv1').scrollTo(100, 1444);
    }

    // 手機版scrollTo
    const productsBTN01 = () => {
        document.querySelector('#scrollDiv1').scrollTo(10, 0);
    }
    const productsBTN02 = () => {
        document.querySelector('#scrollDiv1').scrollTo(365, 0);
    }
    const productsBTN03 = () => {
        document.querySelector('#scrollDiv1').scrollTo(718, 0);
    }
    const productsBTN04 = () => {
        document.querySelector('#scrollDiv1').scrollTo(1071, 0);
    }
    const productsBTN05 = () => {
        document.querySelector('#scrollDiv1').scrollTo(1434, 0);
    }



    return (
        <div className="product">
            <div className="allProduct" data-aos="fade-up">
                <h1>FLAGSHIP PRODUCTS</h1>
                <div className="scrollDiv" id='scrollDiv1'>
                    <div className="productscroll" id='scrollProduct1' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img className="scrollProduct1" src={CoffeeBagPink} alt="" />
                        <div className="productdetail">
                            <h5>肯亞AA TOP＄499</h5>
                            <h6>產地:非洲</h6>
                            <p> 風味:黑梅/李子/葡萄<br />AA TOP最高等級的肯亞咖啡豆其濃郁的黑梅香氣,口感豐富且尾韻悠長,轉化為肯亞特有的甜,一入口紅酒般的餘韻在口中揮之不去。
                            </p>
                        </div>
                    </div>
                    <div className="productscroll">
                        <img className="scrollProduct1" src={CoffeeBagYellow} alt="" />
                        <div className="productdetail">
                            <h5>伊莎米＄500</h5>
                            <h6>產地:肯亞</h6>
                            <p> 風味:堅果/核果/焦糖/巧克力<br />中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                    <div className="productscroll">
                        <img className="scrollProduct1" src={CoffeeBagGreen} alt="" />
                        <div className="productdetail">
                            <h5>瓜地馬拉花神＄400</h5>
                            <h6>產地:瓜地馬拉</h6>
                            <p> 風味:莓果/蜜桃<br />日曬耶加雪菲具有濃郁奔放的水果香,柔和綿長的蜜桃莓果酸卻不刺激,風味甜度高酸度明亮且細膩。
                            </p>
                        </div>
                    </div>
                    <div className="productscroll">
                        <img className="scrollProduct1" src={CoffeeBagBlue} alt="" />
                        <div className="productdetail">
                            <h5>曼巴＄300</h5>
                            <h6>產地:巴西</h6>
                            <p> 風味:可可韻/奶油/草本香韻<br />口感厚實甘醇的曼特寧搭配核果香氣絕佳的巴西咖啡豆,奶油的質感與明顯的可可味搭配後清雅的回甘口感一直會讓人回味無窮。
                            </p>
                        </div>
                    </div>
                    <div className="productscroll">
                        <img className="scrollProduct1" src={CoffeeBagPurple} alt="" />
                        <div className="productdetail">
                            <h5>模範生＄420</h5>
                            <h6>產地:哥倫比亞</h6>
                            <p> 風味:柑橘/可可/奶油<br />具有豐富的芳香水果酸氣迷人,且帶有柑橘的明亮甜感,巧克力的餘韻油脂感特佳。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="productSel">

                    <div onClick={productsimg1} className="product1" data-aos="fade-zoom-in">
                        <img src={CoffeeBagPink} alt="" />
                    </div>
                    <div onClick={productsimg2} className="product2" data-aos="fade-zoom-in-down">
                        <img src={CoffeeBagYellow} alt="" />
                    </div>
                    <div onClick={productsimg3} className="product3" data-aos="fade-zoom-in">
                        <img src={CoffeeBagGreen} alt="" />
                    </div>
                    <div onClick={productsimg4} className="product4" data-aos="fade-zoom-in-down">
                        <img src={CoffeeBagBlue} alt="" />
                    </div>
                    <div onClick={productsimg5} className="product5" data-aos="fade-zoom-in">
                        <img src={CoffeeBagPurple} alt="" />
                    </div>
                </div>
                <div className="productBTN">
                    <div onClick={productsBTN01} className="selBTN">
                    </div>
                    <div onClick={productsBTN02} className="selBTN">
                    </div>
                    <div onClick={productsBTN03} className="selBTN">
                    </div>
                    <div onClick={productsBTN04} className="selBTN">
                    </div>
                    <div onClick={productsBTN05} className="selBTN">
                    </div>

                </div>
            </div>
        </div>
    )
}


export default homeProducts