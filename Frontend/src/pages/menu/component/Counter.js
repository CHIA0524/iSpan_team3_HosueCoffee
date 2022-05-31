import React from 'react';
// import { useState,useEffect} from 'react';
import '../styleCheckout.scss'



const Counter = (props) => {

    

    const {setdrinkCounter, drinkCounter, setCounter1}  = props
    
    let buttonsub = null

    if(drinkCounter > 1){buttonsub = <div 
                                        className="btn buttonLeft" 
                                        onClick={ () => { 
                                            // setCounter1(drinkCounter - 1)
                                            setdrinkCounter(drinkCounter - 1)
                                        }}>-</div>
    }
    else{
        buttonsub =  <div className="btn buttonLeft">-</div>
    }
    return (
        <div className="d-flex numButton">
            {buttonsub}
            <div className="quantity">
            {drinkCounter}{setCounter1}
            </div>
            <div
                className="btn buttonRight"
                onClick={() => {
                    // setCounter1(drinkCounter + 1)
                    setdrinkCounter(drinkCounter + 1)
                }}>+</div>
        </div>
    )
}

export default Counter