import React from 'react';




const Counter = (props) => {

    // 解構popup傳來的值
    const {setdrinkCounter, drinkCounter}  = props
    
    let buttonsub = null

    if(drinkCounter > 1){buttonsub = <div 
                                        className="btn buttonLeft" 
                                        onClick={ () => { 
                                            setdrinkCounter(drinkCounter - 1)
                                        }}
                                        >-
                                    </div>
    }

    else{
        buttonsub = <div className="btn buttonLeft">
                    -
                    </div>
    }

    return (
        <div className="d-flex numButton">
            {buttonsub}
            <div className="quantity">
                {drinkCounter}
            </div>
            <div
                className="btn buttonRight"
                onClick={() => {
                    setdrinkCounter(drinkCounter + 1)
                }}>+
            </div>
        </div>
    )
}

export default Counter