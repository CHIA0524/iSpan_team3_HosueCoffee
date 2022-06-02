import React, { useState, useEffect } from 'react';




const Counter = (props) => {

    // 解構popup傳來的值
    const {setdrinkCounter, drinkCounter}  = props


    let buttonsub = null

    let buttonadd = null 

    let num = props.Counter

    const [aaa,setaaa] = useState(num)
    
   


if(drinkCounter){

    if(drinkCounter > 1){
        buttonsub = 
            <div 
                className="btn buttonLeft" 
                onClick={ () => { 
                    setdrinkCounter(drinkCounter - 1)
                    // update()
                }}
            >
                -
            </div>
        buttonadd=
            <div
                className="btn buttonRight"
                onClick={() => {
                    setdrinkCounter(drinkCounter + 1);
                    // update()
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
                    // update()
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
                    // update()
                }}
            >
                -
            </div>
        buttonadd=
        <div
            className="btn buttonRight"
            onClick={() => {
                setaaa(aaa + 1);
                // update()
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
                // update()
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