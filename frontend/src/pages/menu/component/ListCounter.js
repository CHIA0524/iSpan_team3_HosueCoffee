import React, { useState } from 'react';




const ListCounter = (props) => {

    // 解構popup傳來的值
    
    let buttonsub = null
    
    let num = props.num


    console.log(num);

    if(2 > 1 ){

        buttonsub = <div
                        className="btn buttonLeft" 
                        onClick={ () => { 
                        
                        }}
                    >
                        -
                    </div>
    }else
        buttonsub = 
                    <div className="btn buttonLeft">
                        -
                    </div>
    return (
        <div className="d-flex numButton">
            {buttonsub}
            <div className="quantity">
                {/* {drinkCounter} */}

            </div>
            <div
                className="btn buttonRight"
                onClick={() => {
                    
                }}
            >
                +
            </div>
        </div>
    )
}

    


export default ListCounter