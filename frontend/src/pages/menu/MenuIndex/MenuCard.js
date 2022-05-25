import React from "react";
import{useState,useEffect} from "react";
import "../style.scss"
import {AiOutlineHeart} from 'react-icons/ai';






const MenuCard = () => {

        // 從後端抓資料
    const [datas, setDatas ] = useState([]);

    const fetchData = async()=>{

                        const response = await fetch('http://localhost:3301/menu');

                        const results = await response.json();
                                        setDatas(results);
                    }

    useEffect(()=>{

        fetchData();

    },[]);


    return(

        <>
            {/* 後端抓出來的資料存成變數 */}
        {datas.map((mu,i)=>{

            let img1 =(mu.drink_name);

            let price = (mu.price);
            // 抓到popoup視窗的id
            let id = `#`+(mu.id)

    return(

        <div className="card" key={i}>
            <a href={id}>
                <div className="">
                    <img src= {require('./img/'+img1+'.jpg')} alt=""/>
                </div>
                <div className="cardpading">
                    <span>{mu.drink_name}</span>
                </div>
                <div className="d-flex justify-content-between cardpading">
                    <span className="d-flex align-items-center">{'$'+price}</span>
                    <span>
                        <AiOutlineHeart/>
                    </span>
                </div>
            </a>
        </div>

            )}


        )}


        </>

);}




export default MenuCard