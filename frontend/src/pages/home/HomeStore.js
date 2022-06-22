import { Link, NavLink, useLocation } from 'react-router-dom';
import { display } from '@mui/system';
import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

function HomeStore() {
        const [selectedURL, setSelectedURL] = useState("");
        const [selected, setSelected] = useState("");
        const [photo,setphoto]=useState("1.jpg")
        const [store_name,setstore_name]=useState("新店店")
        const [city,setcity]=useState("新北市")
        const [area,setarea]=useState("新店區")
        const [address,setaddress]=useState("中央路159號4F")
        const [phone,setphone]=useState("02-412-8869")
        const changeSelectOptionHandler = (event) => {
            setSelected(event.target.value);
        };
        const newTaipeiStore = ["請選擇","新店店"];
        const kaohsiungStore = ["請選擇","前金店", "中正店", "七賢店", "廣林店", "大順店", "楠梓店", "藍昌店"];
        const tainanStore = ["請選擇","府榮店", "長榮店", "永康店", "湖美店"];
        const chiayiStore = ["請選擇","垂楊店"];
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
    const OCC=async()=>{
        // console.log(document.getElementById("store").value)
        const name=document.getElementById("store").value
        if(name!="請選擇"){
        const response = await fetch(`${process.env.REACT_APP_API_URL}/home/store?store_name=${name}`)
        const results=await response.json();
        setstore_name(results.store_name)
        setcity(results.city)
        setarea(results.area)
        setaddress(results.address)
        setphone(results.phone)
        setphoto(results.photo)
        setSelectedURL("/store?store_name="+results.store_name)
        document.querySelector(".homestore").style.display="flex"
    }else{
        document.querySelector(".homestore").style.display="none"

    }
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
                        <select name="store" id="store" onChange={OCC}>
                            { EachStoreName }
                        </select>
                    </div>
                    {/* <button id="storeBtn" type="button">搜尋</button> */}
                </form>
                <a href={selectedURL} className="homeStoreCardWrap homeStore">
                    <div>
                        <img src={require(`../store/img/${photo}`)} alt="no-img"></img>
                    </div>

                    <div className="itemText">
                        <p>{store_name}</p>
                        <p>{city}</p>
                        <p className='homeStoreArea'>{area} {address}</p>
                    </div>

                    <div className="itemText">
                        <p></p>
                        <h5>{phone}</h5>
                        <p></p>
                        {/* <p>{store.phone}</p> */}
                    </div>

                    <div className="itemTextForMobile">
                    <p>{store_name}</p>
                    <p>{phone}</p>
                    </div>
                    
                 </a>
            </div>
        </div>
    );
};

export default HomeStore