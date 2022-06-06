import React, { useState, useEffect } from 'react';




const Counter = (props) => {

    // 解構popup傳來的值
    const {setdrinkCounter, drinkCounter}  = props

    let buttonsub = null

    let buttonadd = null 

    let num = props.Counter

    let idP = props.id

    const [aaa,setaaa] = useState(num)
    
    const update = ()=>{

        let k = 0

        const gift = {

            id: idP,

            drinkCounter:aaa,
        }

        let gifts = localStorage.getItem("gifts") ? JSON.parse(localStorage.getItem("gifts")) : []

        for (let i = 0; i < gifts.length; i++) {

            let item = gifts[i]
            console.log(gifts[i]);
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
    if(aaa > 1){
        buttonsub = 
            <div 
                className="btn buttonLeft" 
                onClick={ () => { 
                    setaaa(aaa - 1)
                    update()
                }}
            >
                -
            </div>
        buttonadd=
        <div
            className="btn buttonRight"
            onClick={() => {
                setaaa(aaa + 1);
                update()
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
                setaaa(aaa + 1);
                update()
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
                    {aaa}
                </div>
                {buttonadd}
            </div>
        )

}




export default Counter