import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

function homeStore(){
    return(
        <div class="store">
                <h1>STORE</h1>
                <div class="allStore">
                    {/* <div class="storeSelect">
                        <select name="city" id="city">
                            <option value="" disabled selected>選擇縣市</option>
                            <option value="tainan">台南</option>
                            <option value="kaohsiung">高雄</option>
                            <option value="taipei">台北</option>
                        </select>
                    </div>
                    <div class="storeselect">
                        <select name="store" id="store">
                            <option value="" disabled selected>選擇門市</option>
                            <option value="store1">門市1</option>
                            <option value="store2">門市2</option>
                            <option value="store3">門市3</option>
                            <option value="store4">門市4</option>
                            <option value="store5">門市5</option>
                        </select>
                    </div> */}
                    <button id="storeBtn" type="button">搜尋</button>
                </div>
            </div>
    )
}

export default homeStore