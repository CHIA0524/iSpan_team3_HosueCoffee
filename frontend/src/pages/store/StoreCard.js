import React from 'react';
import { useState, useEffect, useCallback } from 'react';

// CSS
import './mapStyle.scss';

// icons
import { IoInformationCircleOutline } from "react-icons/io5";

// img
import test from './img/01.jpg'

/*---------------- import結束 ----------------*/



function StoreCard(props){

  const [storeCardData, setStoreCardData] = useState('jkskhfj');

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

  // 傳遞資料至父元素 cardDetail
  const sentDetailToCardDetail = useCallback((dataIndex)=>()=>{
    console.log(dataIndex);
    // console.log(document.querySelectorAll(".itemText")[dataIndex].querySelectorAll("p")[0].innerHTML);
    console.log(dataIndex.time);
    console.log(dataIndex.icon_group);
    console.log(dataIndex.serve_name);
    props.setDataFromStoreCard(storeCardData);
    props.setCardDetailCss(`cardDetailOpenCss`);
  },
  []
  )

  return(
    <>
      {datas.map((store,i)=>{
        return(
          <div className="cardWrap" key={i}>
            <div>
              <img src={test} alt="test"></img>
            </div>
            <div className="itemText">
              <p>{store.store_name}</p>
              <p>{`${store.city} ${store.address}`}</p>
              <p>{store.phone}</p>
            </div>
            <div onClick={sentDetailToCardDetail(datas[i])}>
              <IoInformationCircleOutline size={25}/>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default StoreCard