import React from "react";
import "../style.scss";
import Counter from "../component/Counter";




const Popup = () => (



<div id="popup1" className="overlay">
                    <div className="popup">
                        <div className="popupName">
                            <h2>可可綿雲瑪奇朵</h2>
                        </div>
                        <a className="close" href="/">&times;</a>
                        <div className="content">
                            <div className="popoimg">
                                <img src="https://fakeimg.pl/200x200/eeeeee/aaa"alt=""/>
                            </div>
                            <div className="popotext">
                                <span>
                                    我們都知道，只要有意義，那麼就必須慎重考慮。三小究竟是怎麼樣的存在，
                                    始終是個謎題。由於，如果仔細思考三小，會發現其中蘊含的深遠意義。
                                    鄧小平說過一句經典的名言，制度好可以使壞人無法任意橫行，
                                    制度不好可以使好人無償充分做好事，甚至會走向反面。這似乎解答了我的疑惑。
                                </span>
                            </div>
                        </div>
                        <div className="content1">
                            <div className="d-flex numButton">
                                <Counter/>
                            </div>
                            <div className="content2 btn2">
                                <div className="d-flex justify-content-end mt-4">
                                    <div className="btn PaymentLast mt-1">加入購物車</div>
                                </div>
                            </div>
                        </div>
                        <div className="content2 btn1">
                            <div className="d-flex justify-content-end">
                                <div className="btn PaymentLast mt-1 ">加入購物車</div>
                            </div>
                        </div>
                    </div>
                </div>




)


export default Popup