import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

function HomeStore() {
        const [selected, setSelected] = useState("");
        const changeSelectOptionHandler = (event) => {
            setSelected(event.target.value);
        };
        const newTaipeiStore = ["新北店"];
        const kaohsiungStore = ["前金店", "中正店", "七賢店", "廣林店", "大順店", "楠梓店", "藍昌店"];
        const tainanStore = ["府榮店", "長榮店", "永康店", "湖美店"];
        const chiayiStore = ["垂楊店"];
        let type = null;
        let EachStoreName = null;
        if (selected === "新北市") {
            type = newTaipeiStore;
        } else if (selected === "高雄市") {
            type = kaohsiungStore;
        } else if (selected === "台南市") {
            type = tainanStore;
        } else if (selected === "嘉義市") {
            type = chiayiStore;
        }
        if (type) {
            EachStoreName = type.map((el) => <option key={el}>{el}</option>);
    }


    return (
        <div className="store" data-aos="flip-down" data-aos-easing="linear"
        data-aos-duration="1500">
            <h1>STORE</h1>
            <div className="allStore">
                <form>
                    <div className="storeSelect">
                        <select onChange={changeSelectOptionHandler} name="city" id="city">
                            <option>選擇縣市</option>
                            <option>新北市</option>
                            <option>台南市</option>
                            <option>高雄市</option>
                            <option>嘉義市</option>
                        </select>
                    </div>
                    <div className="storeselect">
                        <select name="store" id="store">
                            { EachStoreName }
                        </select>
                    </div>
                    <button id="storeBtn" type="button">搜尋</button>
                </form>
            </div>
        </div>
    );
};

export default HomeStore