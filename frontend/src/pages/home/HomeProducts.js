import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';

import CoffeeBagBlack from './image/CoffeeBagBlack.png';
import CoffeeBagYellow from './image/CoffeeBagYellow.png';
import CoffeeBagWhite from './image/CoffeeBagWhite.png';
import CoffeeBagPink from './image/CoffeeBagPink.png';
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
        document.querySelector('#scrollDiv1').scrollTo(282, 0);
    }
    const productsBTN03 = () => {
        document.querySelector('#scrollDiv1').scrollTo(550, 0);
    }
    const productsBTN04 = () => {
        document.querySelector('#scrollDiv1').scrollTo(820, 0);
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
                        data-aos-duration="1500"
                       >
                        <img className="scrollProduct1" src={CoffeeBagBlack} alt="" />
                        <div className="productdetail">
                            <h5>肯亞AA TOP＄499</h5>
                            <h6>產地:非洲</h6>
                            <p> 風味:黑梅/李子/葡萄<br />AA TOP最高等級的肯亞咖啡豆其濃郁的黑梅香氣,口感豐富且尾韻悠長,轉化為肯亞特有的甜,一入口紅酒般的餘韻在口中揮之不去。<br /><a className='ABC123' href="/shop/ProductDetail/200001">前往商品頁面</a>
                            </p>
                            

                        </div>
                    </div>
                    <div className="productscroll"
                   >
                        <img className="scrollProduct1" src={CoffeeBagPurple} alt="" />
                        <div className="productdetail">
                        <h5>曼巴＄300</h5>
                            <h6>產地:巴西</h6>
                            <p> 風味:可可韻/奶油/草本香韻<br />口感厚實甘醇的曼特寧搭配核果香氣絕佳的巴西咖啡豆,奶油的質感與明顯的可可味搭配後清雅的回甘口感一直會讓人回味無窮。<br /><a className='ABC123' href="/shop/ProductDetail/200005">前往商品頁面</a>
                            </p>
                        </div>
                    </div>

                    <div className="productscroll">
                        <img className="scrollProduct1" src={CoffeeBagPink} alt="" />
                        <div className="productdetail">
                            <h5>瓜地馬拉花神＄400</h5>
                            <h6>產地:瓜地馬拉</h6>
                            <p> 風味:莓果/蜜桃<br />日曬耶加雪菲具有濃郁奔放的水果香,柔和綿長的蜜桃莓果酸卻不刺激,風味甜度高酸度明亮且細膩。<br /><a className='ABC123' href="/shop/ProductDetail/200003">前往商品頁面</a>
                            </p>
                        </div>
                    </div>
                    <div className="productscroll" >
                        <img className="scrollProduct1" src={CoffeeBagWhite} alt="" />
                        <div className="productdetail">
                            <h5>耶加雪菲＄380</h5>
                            <h6>產地:衣索比亞</h6>
                            <p> 風味:核果/可可/花香味/柑橘<br />花神具有非常愉悅優雅花香主體的風味,酸性柔和且以巧克力般的風味尾韻作結,整體口感乾淨且明亮<br /><a className='ABC123' href="/shop/ProductDetail/200002">前往商品頁面</a>
                            </p>
                        </div>
                    </div>
                    <div className="productscroll" >
                        <img className="scrollProduct1" src={CoffeeBagYellow} alt="" />
                        <div className="productdetail">
                            <h5>模範生＄420</h5>
                            <h6>產地:哥倫比亞</h6>
                            <p> 風味:柑橘/可可/奶油<br />具有豐富的芳香水果酸氣迷人,且帶有柑橘的明亮甜感,巧克力的餘韻油脂感特佳。<br /><a className='ABC123' href="/shop/ProductDetail/200004">前往商品頁面</a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="productSel">

                    <div onClick={productsimg1} className="product1" data-aos="fade-zoom-in">
                        <img src={CoffeeBagBlack} alt="" />
                    </div>
                    <div onClick={productsimg2} className="product2" data-aos="fade-zoom-in-down">
                        <img src={CoffeeBagPurple} alt="" />
                    </div>
                    <div onClick={productsimg3} className="product3" data-aos="fade-zoom-in">
                        <img src={CoffeeBagPink} alt="" />
                    </div>
                    <div onClick={productsimg4} className="product4" data-aos="fade-zoom-in-down">
                        <img src={CoffeeBagWhite} alt="" />
                    </div>
                    <div onClick={productsimg5} className="product5" data-aos="fade-zoom-in">
                        <img src={CoffeeBagYellow} alt="" />
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