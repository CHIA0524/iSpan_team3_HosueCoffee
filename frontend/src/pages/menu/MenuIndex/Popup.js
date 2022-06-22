import React from "react";
import{useState,} from "react";
import Counter from "../component/Counter";
import SweetAlret from "../component/SweetAlret";



const Popup = (props) => {
    // 接收父層資料
    const {datas, drinkId, css, setcss} = props
    // 準備傳至OnlineCheckPage
    const [drinkCounter, setdrinkCounter] = useState(1) 
    // 上傳數量、ID至localStorage
    const update = () => {
        let k = 0
        const gift = {
            id:drinkId,
            drinkCounter:drinkCounter,
        }
        let gifts = localStorage.getItem("gifts") ? JSON.parse(localStorage.getItem("gifts")) : []
        for (let i = 0; i < gifts.length; i++) {
            let item = gifts[i]
            if (item.id === gift.id) {
                item.drinkCounter += gift.drinkCounter
            } else {
                k = k + 1
            }
        }
        if (k === gifts.length) {
            gifts.push(gift)
        }
        localStorage.setItem("gifts", JSON.stringify(gifts))
    }
    
    if(datas.length > 0){
        return(
            <div className="overlay" style={css}>
                <div className="menuPopup">
                    <div 
                        className="close" 
                        onClick={()=>{
                            setdrinkCounter(1)
                            setcss({
                                visibility: 'hidden', 
                                opacity: '0'
                            })
                        }}
                    >
                        &times;
                    </div>
                    <div className="menuContent">
                        <div className="popoimgbody">
                            <img 
                                className="popoimg"
                                src={require('../img/'+ datas[drinkId-300001].url +'.jpg')}
                                alt=""   
                            />
                        </div>
                        <div className="popupNameTop">
                            <div className="popupName">
                                <h2>
                                    {datas[drinkId-300001].drink_name}
                                </h2>
                            </div>
                            <div className="popotext">
                                <span>
                                    {datas[drinkId-300001].content}
                                </span>
                            </div>
                            <div className="content2 btn">
                                <Counter 
                                    setdrinkCounter={setdrinkCounter}  
                                    drinkCounter={drinkCounter} 
                                />
                                <div className="d-flex justify-content-end">
                                    <div 
                                        className="btn PaymentLast1 mt-1"
                                        onClick={() => {
                                            update()
                                            SweetAlret()
                                            setcss({
                                                visibility: 'hidden',
                                                opacity: '0'
                                            })
                                            setdrinkCounter(1)
                                        }}
                                    >
                                        加入購物車
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup