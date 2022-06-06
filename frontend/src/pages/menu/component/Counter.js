import React, { useState, useEffect } from 'react';




const Counter = (props) => {

    // 解構popup傳來的值
    const {setdrinkCounter, drinkCounter}  = props
    // 設一個空變數莊加減按鈕
    let buttonsub = null
    let buttonadd = null 
    // 接收list傳來的數量跟ID
    let drinkNum = props.Counter
    let idP = props.id
    // 使用usedate監控數量變化
    const [listDrinkNum,setlistDrinkNum] = useState(drinkNum)

    const update = (dd,ee,cc)=>{

        let k = 0

        const gift = {

            id: idP,

            drinkCounter:dd,
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
}
else{
    if(listDrinkNum > 1){
        buttonsub = 
            <div 
                className="btn buttonLeft" 
                onClick={ () => { 
                    const dd = listDrinkNum -1 
                    setlistDrinkNum(listDrinkNum - 1)
                    update(dd)
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
            }}
        >
            +
        </div>
}

return (
            <div className="d-flex numButton">
                {buttonsub}
                <div className="quantity">
                    {drinkCounter}
                    {listDrinkNum}
                </div>
                {buttonadd}
            </div>
        )

}




export default Counter