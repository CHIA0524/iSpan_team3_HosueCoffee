import { doc } from 'prettier';
import React from 'react';
import { useState, useEffect } from 'react';


function HomeActivityComponent() {

    const myCopy = () => {
        alert('saved');
    }

    return (
        <>
         <div class="activity">
                <h1>ACTIVITY</h1>
                <div class="box1">
                    <div class="coupon1">
                        <div class="couponText">
                            <h6>15%OFF</h6>
                            <p>活動日期<br />2022/05/01-2022/05/20</p>
                        </div>
                    </div>
                    <div class="copyText" onClick={myCopy}>
                        SAVE
                    </div>
                    <div class="coupon1">
                        <div class="couponText">
                            <h6>15%OFF</h6>
                            <p>活動日期<br />2022/05/01-2022/05/20</p>
                        </div>
                    </div>
                    <div class="copyText" onClick={myCopy}>
                        SAVE
                    </div>
                    <div class="coupon1">
                        <div class="couponText">
                            <h6>15%OFF</h6>
                            <p>活動日期<br />2022/05/01-2022/05/20</p>
                        </div>
                    </div>
                    <div class="copyText" onClick={myCopy}>
                        SAVE
                    </div>
                </div>
            </div>
    </>
    )
}

export default HomeActivityComponent