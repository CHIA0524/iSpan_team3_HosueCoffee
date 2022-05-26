import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './Home.css';

import banner01 from './image/banner01.jpg';
import banner02 from './image/banner02.jpg';
import banner03 from './image/banner03.jpg';
import menu04 from './image/menu04.jpeg';
import menu02 from './image/menu02.jpeg';
import menu01 from './image/menu01.jpeg';
import coffeebag01 from './image/coffeebag01.png';
import blogimg from './image/blogimg.jpg';

function Home(props) {
    return (
        <>
        
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner01} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner02} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner03} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="appeal">
                <div class="content">
                    <h1>BRAND APPEAL</h1>
                    <p>從原產地的一株咖啡樹，最終成為您手中的一杯咖啡；我們堅持採購並且烘焙最高品質的咖啡，這是我們一直努力的基本原則；最初的十英呎到最後十英呎的珍貴體驗，為咖啡的故事做了最佳的註解，同時也塑造出咖啡家族的獨特風味及口感特性，閱讀咖啡的故事，可以讓您更瞭解咖啡，豐富您的咖啡體驗。
                    </p>
                </div>
            </div>
            <div class="menu">
                <h1>MENU</h1>
                <div class="allMenu">
                    <div class="menuHover">
                        <div class="menuCard">
                            <p>Americano</p>
                        </div>
                        <img src={menu04} alt="" />
                    </div>
                    <div class="menuHover">
                        <div class="menuCard">
                            <p>Cappuccino</p>
                        </div>
                        <img src={menu02} alt="" />
                    </div>
                    <div class="menuHover">
                        <div class="menuCard">
                            <p>Macchiato</p>
                        </div>
                        <img src={menu01} alt="" />
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="allProduct">
                    <h1>FLAGSHIP PRODUCTS</h1>
                    <div className="scrollDiv">
                        <div class="productscroll">
                            <img id="scrollProduct1" src={coffeebag01} alt="" />
                            <div class="productdetail">
                                <h5>伊莎米 精選招牌特調＄499</h5>
                                <h6>產地:肯亞</h6>
                                <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                                </p>
                            </div>
                        </div>
                        <div class="productscroll">
                            <img id="scrollProduct1" src={coffeebag01} alt="" />
                            <div class="productdetail">
                                <h5>伊莎米 精選招牌特調＄499</h5>
                                <h6>產地:肯亞</h6>
                                <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                                </p>
                            </div>
                        </div>
                        <div class="productscroll">
                            <img id="scrollProduct1" src={coffeebag01} alt="" />
                            <div class="productdetail">
                                <h5>伊莎米 精選招牌特調＄499</h5>
                                <h6>產地:肯亞</h6>
                                <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                                </p>
                            </div>
                        </div>
                        <div class="productscroll">
                            <img id="scrollProduct1" src={coffeebag01} alt="" />
                            <div class="productdetail">
                                <h5>伊莎米 精選招牌特調＄499</h5>
                                <h6>產地:肯亞</h6>
                                <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                                </p>
                            </div>
                        </div>
                        <div class="productscroll">
                            <img id="scrollProduct1" src={coffeebag01} alt="" />
                            <div class="productdetail">
                                <h5>伊莎米 精選招牌特調＄499</h5>
                                <h6>產地:肯亞</h6>
                                <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="productSel">

                        <div id="product1">
                            <a href="scrollProduct1">
                                <img src={coffeebag01} alt="" /></a>
                        </div>
                        <div id="product2">
                            <a href="scrollProduct2">
                                <img src={coffeebag01} alt="" /></a>
                        </div>
                        <div id="product3">
                            <a href="scrollProduct3">
                                <img src={coffeebag01} alt="" /></a>
                        </div>
                        <div id="product4">
                            <a href="scrollProduct4">
                                <img src={coffeebag01} alt="" /></a>
                        </div>
                        <div id="product5">
                            <a href="scrollProduct5">
                                <img src={coffeebag01} alt="" /></a>
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
            <div class="blog">
                <h1>TODAY’S ARTICLE</h1>
                <div class="allCard">
                    <div class="cardBorder">
                        <div class="cardImg"><img src={blogimg} alt=""/></div>
                        <div class="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div class="cardInfo">
                            <a href="">+more</a>
                            <span>date</span>
                        </div>
                    </div>
                    <div class="cardBorder">
                        <div class="cardImg"><img src={blogimg} alt=""/></div>
                        <div class="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div class="cardInfo">
                            <a href="">+more</a>
                            <span>date</span>
                        </div>
                    </div>
                    <div class="cardBorder">
                        <div class="cardImg"><img src={blogimg} alt=""/></div>
                        <div class="cardText">
                            <h3>冰滴咖啡</h3>
                            <p>冰滴咖啡、冷泡咖啡、冰釀咖啡、氮氣咖啡，各式冷萃咖啡介紹....... </p>
                        </div>
                        <div class="cardInfo">
                            <a href="">+more</a>
                            <span>date</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="store">
                <h1>STORE</h1>
                <div class="allStore">
                    <div class="storeSelect">
                        <select name="city" id="city">
                            <option value="" disabled selected>選擇縣市</option>
                            <option value="tainan">台南</option>
                            <option value="kaohsiung">高雄</option>
                            <option value="taipei">台北</option>
                        </select>
                    </div>
                    <div class="storeselect">
                        <select name="store" id="store">
                            <option value="" disabled selected>選擇門市</option>
                            <option value="store1">門市1</option>
                            <option value="store2">門市2</option>
                            <option value="store3">門市3</option>
                            <option value="store4">門市4</option>
                            <option value="store5">門市5</option>
                        </select>
                    </div>
                    <button id="storeBtn" type="button">搜尋</button>
                </div>
            </div>
            <div class="aside">

                <div class="new">
                    <h1>NEWS</h1>
                    <div class="allNew">
                        <div class="new1 row">
                            <h5 class="col">台北店公休公告</h5>
                            <h5 class="newTime col">2022/06/17</h5>
                        </div>
                        <div class="new1 row">
                            <h5 class="col">台中店公休公告</h5>
                            <h5 class="newTime col">2022/06/17</h5>
                        </div>
                        <div class="new1 row">
                            <h5 class="col">台南店公休公告</h5>
                            <h5 class="newTime col">2022/06/17</h5>
                        </div>
                        <div class="new1 row">
                            <h5 class="col">高雄總店公休公告</h5>
                            <h5 class="newTime col">2022/06/17</h5>
                        </div>
                    </div>
                </div>
                <div class="activity">
                    <h1>ACTIVITY</h1>
                    <div class="box1">
                        <div class="coupon1">
                            <div class="couponText">
                                <h6>15%OFF</h6>
                                <p>活動日期<br/>2022/05/01-2022/05/20</p>
                            </div>
                        </div>
                        <div class="copy1">COPY</div>
                        <div class="coupon1">
                            <div class="couponText">
                                <h6>15%OFF</h6>
                                <p>活動日期<br/>2022/05/01-2022/05/20</p>
                            </div>
                        </div>
                        <div class="copy1">COPY</div>
                        <div class="coupon1">
                            <div class="couponText">
                                <h6>15%OFF</h6>
                                <p>活動日期<br/>2022/05/01-2022/05/20</p>
                            </div>
                        </div>
                        <div class="copy1">COPY</div>
                    </div>
                </div>
            </div>
            <div class="aboutUs">
                <div class="aboutUsTest">
                    <h1>ABOUT US</h1>
                    <p>由一群熱愛喵星球也愛喝咖啡的朋友，打造了一間友善動物且溫馨的咖啡店。不管是平日上班前來杯黑咖啡； 還是假日想找個舒服的咖啡店好好地喝上一杯對味的拿鐵度過美好的假日，歡迎來「coffee
                        house咖啡好室」光臨。
                    </p>
                </div>
            </div>
            <div class="topBTN">
                <button><i class="fa-solid fa-chevron-up"></i>
                </button>
            </div>
        </>
    );
}

export default Home