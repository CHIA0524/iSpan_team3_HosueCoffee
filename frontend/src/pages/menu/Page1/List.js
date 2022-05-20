import React from 'react';
import '../styleCheckout.scss'
import Fakeing from '../Fakeimg150.png'
import Counter from '../component/Counter';
import Delete from '../component/Delete';

const List = () => (

    <div className="listBody">
            <div className="d-flex align-items-center justify-content-between">
                <div className="col-3">
                    <img className="listImg" src={Fakeing} alt="fake" />
                </div>
                <div className="nameRotate">
                    <div className="col-6 coffeeName">
                        <span>可可綿雲琪朵</span>
                    </div>
                    <div className="d-flex col-6 amount">
                        <div className="quantityText">
                            數量：
                        </div>
                        <Counter/>
                    </div>
                </div>
                <Delete/>

                <div className="price">
                    $150
                </div>
            </div>
        </div>

)

export default List