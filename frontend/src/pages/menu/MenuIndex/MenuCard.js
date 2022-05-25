import React from "react";
import{useState,useEffect} from "react";
import "../style.scss"
import {AiOutlineHeart} from 'react-icons/ai';






const MenuCard = () => {


    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{
      const response = await fetch('http://localhost:3002/menu');
      const results = await response.json();
      setDatas(results);
    }
    useEffect(()=>{
      fetchData();
    },[])


    

    return(
        <>
       {datas.map((mu,i)=>{
           let img1 =(mu.url);
            let price = (mu.price)

    return(
    <div className="card" key={i}>
        <a href="#popup1">
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

)
})}
</>

);
    }




export default MenuCard