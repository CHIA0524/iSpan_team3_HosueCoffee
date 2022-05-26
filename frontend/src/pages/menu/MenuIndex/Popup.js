import React from "react";
import{useState,useEffect,} from "react";
import "../style.scss";
import Counter from "../component/Counter";






const Popup = (props) => {

        // 接收父層資料
        const {datas} = props

        const{drinkId} = props

        console.log(drinkId)   //TODO  Counter的值傳到LIST 

        const [drinkCounter, setdrinkCounter] = useState() 

        // console.log(datas);
            
            return(

                <div  className="overlay" >
                    <div className="popup">
                        <a className="close" href="/menu">&times;</a>
                        <div className="content">
                            <div className="popoimg">
                                <img src=""alt=""/>
                            </div>
                            <div className="popupNameTop">
                                <div className="popupName">
                                    <h2>123</h2>
                                </div>
                                <div className="popotext">
                                    <span>
                                
                                    </span>
                                </div>
                                <div className="content1">
                                    <div className="content2 btn2">
                                        <div className="d-flex justify-content-end mt-4">
                                            <div className="btn PaymentLast1 mt-1">加入購物車</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content2 btn1">
                                    <Counter setdrinkCounter={setdrinkCounter}/>
                                    <div className="btn PaymentLast1 mt-1">加入購物車</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                )



;}

export default Popup