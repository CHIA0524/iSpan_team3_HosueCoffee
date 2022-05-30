import React from "react";
import{useState} from "react";
import "../style.scss";
import Counter from "../component/Counter";






const Popup = (props) => {

        // 接收父層資料
        const {datas, drinkId, css, setcss} = props
    
        const [drinkCounter, setdrinkCounter] = useState(1) 
        
        if(datas.length>0){
    
            return(
                    <div  className="overlay" style={css}>
                        <div className="popup">
                            <div className="close" onClick={()=>{setdrinkCounter(1)
                                                                setcss({visibility: 'hidden' ,opacity:'0'})
                                                                }}>&times;</div>
                            <div className="content">
                                <div className="popoimg">
                                    <img src={require('./img/'+ datas[drinkId-1].url +'.jpg')}alt=""/>
                                </div>
                                <div className="popupNameTop">
                                    <div className="popupName">
                                        <h2>{datas[drinkId-1].drink_name}</h2>
                                    </div>
                                    <div className="popotext">
                                        <span>
                                        {datas[drinkId-1].content}
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
                                        <Counter setdrinkCounter={setdrinkCounter}  drinkCounter={drinkCounter} />
                                        <div className="btn PaymentLast1 mt-1">加入購物車</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )

            }

;}

export default Popup