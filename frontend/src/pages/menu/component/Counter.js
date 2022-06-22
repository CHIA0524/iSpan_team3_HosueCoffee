import React, { useState, useEffect } from 'react';




const Counter = (props) => {

    // 解構popup傳來的值
    const {setdrinkCounter, drinkCounter,settotalPrice1}  = props
    // 設一個空變數裝加減按鈕
    let buttonsub = null
    let buttonadd = null 
    // 接收list傳來的數量跟ID
    let drinkNum = props.Counter
    let idP = props.id
    let price = props.price 
    // 使用usedate監控數量變化
    const [listDrinkNum,setlistDrinkNum] = useState(drinkNum)
    // 更新後的數量存在localStorage
    const update = (dd) => {
        let k = 0
        const gift = {
            id: idP,
            drinkCounter: dd,
        }
        let gifts = localStorage.getItem("gifts") ? JSON.parse(localStorage.getItem("gifts")) : []
        for (let i = 0; i < gifts.length; i++) {
            let item = gifts[i]
            if (item.id === gift.id) {
                item.drinkCounter = gift.drinkCounter
            } else {
                k = k + 1
            }
        }
        if (k === gifts.length) {
            gifts.push(gift)
        }
        localStorage.setItem("gifts", JSON.stringify(gifts))
    }
    // 判斷是哪一個頁面使用了Counter
    if(drinkCounter){
        if(drinkCounter > 1){
            buttonsub = 
                <div 
                    className="btn buttonLeft" 
                    onClick={ () => { 
                        setdrinkCounter(drinkCounter - 1)
                    }}
                >
                    -
                </div>
            buttonadd=
                <div
                    className="btn buttonRight"
                    onClick={() => {
                        setdrinkCounter(drinkCounter + 1);
                    }}
                >
                    +
                </div>
        }else{      
            buttonsub =
                <div className="btn buttonLeft">
                    -
                </div>
            buttonadd=
                <div
                    className="btn buttonRight"
                    onClick={() => {
                        setdrinkCounter(drinkCounter + 1);
                    }}
                >
                    +
                </div>
        }
    }else{
        if(listDrinkNum > 1){
            buttonsub = 
                <div 
                    className="btn buttonLeft" 
                    onClick={ () => { 
                        const dd = listDrinkNum -1 
                        setlistDrinkNum(listDrinkNum - 1)
                        update(dd)
                        settotalPrice1(price*dd)
                    }}
                >
                    -
                </div>
            buttonadd=
            <div
                className="btn buttonRight"
                onClick={() => {
                    const cc = listDrinkNum + 1 
                    setlistDrinkNum(listDrinkNum + 1);
                    update(cc)
                    settotalPrice1(price*cc)
                }}
                >
                +
            </div>
            }else{
                buttonsub = <div 
                className="btn buttonLeft" 
            >
                -
            </div>
        }
            buttonadd=
            <div
                className="btn buttonRight"
                onClick={() => {
                    const ee = listDrinkNum + 1 
                    setlistDrinkNum(listDrinkNum + 1);
                    update(ee)
                    settotalPrice1(price*ee)
                }}
            >
                +
            </div>
    }
    return (
        <div className="d-flex">
            <div className=' menuNumButton'>
                {buttonsub}
                <div className="quantity">
                    {drinkCounter}
                    {listDrinkNum}
                </div>
                {buttonadd}
            </div>
        </div>
    )
}




export default Counter