import React from "react";





const Totalpay = () =>(



    <>
    <div className="member2">
            <span>金額統計</span>
        </div>
        <div className="member3">
            <div className="memberBody3 memberTotal">
                <div className="memberBodyIn2">
                    <span>小計</span>
                    <span>150</span>
                </div>
                <div className="memberBodyIn2">
                    <span>優惠卷折抵</span>
                    <span>0</span>
                </div>
                <div className="memberBodyIn2">
                    <span>紅利折抵</span>
                    <span>0</span>
                </div>
                <div className="memberBodyIn2">
                    <span>總額</span>
                    <span className="totalPrice">150</span>
                </div>
            </div>
        </div>
        <div className="member2">
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-end mt-4">
                    <div className="btn PaymentLast mt-1">繼續購物</div>
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <div className="btn PaymentLast mt-1">訂單查詢</div>
                </div>
            </div>
        </div>
    </>




)


export default Totalpay