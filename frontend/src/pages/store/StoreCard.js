import React from 'react';
import { useState, useEffect } from 'react';

// CSS
import './mapStyle.scss';

// icons
import { IoInformationCircleOutline } from "react-icons/io5";

// img
import test from './img/01.jpg'

/*---------------- import結束 ----------------*/



function StoreCard(props){

  const [storeCardData, setStoreCardData] = useState('jkskhfj');

  const sentDetailToCardDetail = (id)=>{
    console.log(document.querySelectorAll(".itemText")[0].querySelectorAll("p")[0].innerHTML);
    props.setDataFromStoreCard(storeCardData);
    props.setCardDetailCss(`cardDetailOpenCss`);
  }
  
  // 向後端請求資料
  const [datas, setDatas ] = useState([])
  const fetchData = async()=>{
    const response = await fetch("http://localhost:3000/store/map");
    const results = await response.json();
    setDatas(results);
  }
  useEffect(()=>{
    fetchData();
  },[])

  {datas.length > 0 && datas.map((store,i)=>{
      return(
          <tr key={i}>
            <td>{store.id}</td>
            <td>{store.store_name}</td>
            <td>{store.city}</td>
          </tr>
      )return(
    <>
      <div className="cardWrap">
        <div>
          <img src={test} alt="test"></img>
        </div>
        <div className="itemText">
          <p>長榮店</p>
          <p>新北市 新店區中央路159號4F</p>
          <p>02-412-8869</p>
        </div>
        <div onClick={()=>{
          console.log(document.querySelectorAll(".itemText")[0].querySelectorAll("p")[0].innerHTML);
          props.setDataFromStoreCard(storeCardData);
          props.setCardDetailCss(`cardDetailOpenCss`);
        }}
        >
          <IoInformationCircleOutline size={25}/>
        </div>
      </div>
    </>
  );
  })}
  
}

export default StoreCard