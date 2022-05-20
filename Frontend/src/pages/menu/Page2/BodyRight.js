import React from 'react';
import {Link} from "react-router-dom";
import '../checkout2.scss'



const BodyRight = () => (


    <div class="body2">  
        <div class="totalCard">
            <div class="d-flex justify-content-between">
                <div>
                    <span>商品小計</span>
                </div>
                <div>
                    <span>$250</span>
                </div>
            </div> 
            <hr/> 
            <div class="d-flex justify-content-between my-2">
                <div class="d-flex">
                    <span>運費</span>
                </div>
                <div>
                    <span>自取免運</span>
                </div>
            </div>
            <div class="d-flex justify-content-between my-2 mb-3">
                <div>
                    <span>優惠折扣</span>
                </div>
                <div>
                    <span>$100</span>
                </div>
            </div>
            <div class="d-flex justify-content-between my-2 mt-5">
                <div>
                    <span>結帳金額</span>
                </div>
                <div>
                    <h3 style={{color:'red'}}>$150</h3>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="d-flex justify-content-end mt-4">
                    <div class="btn PaymentLast mt-1">上一頁</div>
                </div>
                <div class="d-flex justify-content-end mt-4">
                    <Link to="/OnlineCheckPage3">
                        <div class="btn PaymentLast mt-1">結帳</div>
                    </Link>
                </div>
            </div>
        </div>
    </div>


)




export default BodyRight