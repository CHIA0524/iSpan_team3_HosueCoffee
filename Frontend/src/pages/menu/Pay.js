import React from "react";
import './styleCheckout.scss'
import Dropdown from "./component/Dropdown ";





const Pay = () => (


<div className="listBody">
            <div className="Promo">
                <div className="Payment">
                    <p>付款方式</p>
                    <Dropdown/>
                    <hr className="rule"/>
                </div>
            </div>

            <div className="subtotal">
                <div className="d-flex col-3">
                    <p>商品小計:</p>
                </div>
                <div className="totalPrice">

                    <div className="d-flex justify-content-between">
                        <h6>優惠碼折扣</h6>
                        <h6>-25</h6>
                    </div>

                    <div className="d-flex justify-content-between mb-5">
                        <h6>紅利折扣</h6>
                        <h6>-25</h6>
                    </div>
                    <h4 style={{color: 'red'}}>$150</h4>
                </div>
            </div>
            
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-end">
                    <div className="btn PaymentLast">
                        繼續購物
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <div className="btn PaymentLast">
                        結帳
                    </div>
                </div>
            </div>
        </div>


    
)



export default Pay