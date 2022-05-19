import React from 'react';
import { useState } from 'react';
import '../styleCheckout.scss'



const Counter = () => {

    let [quantity, setquantity] = useState(1)

    return (
        <div className="d-flex numButton">

            <div className="btn buttonLeft" onClick={() => { setquantity(quantity - 1) }}>-</div>

            <div className="quantity">
                {quantity}
            </div>
            <div className="btn buttonRight" onClick={() => { setquantity(quantity + 1) }}>+</div>
        </div>

    )



}


export default Counter