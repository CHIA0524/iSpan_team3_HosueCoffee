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

  const [storeCardData, setStoreCardData] = useState([]);

  // 傳遞資料至父元素 cardDetail
  const sentDetailToCardDetail = useCallback((data)=>()=>{
    console.log(data);
    let { time, icon_group, serve_name } = data;
    // console.log(document.querySelectorAll(".itemText")[dataIndex].querySelectorAll("p")[0].innerHTML);
    console.log(time);
    // console.log(icon_group);
    console.log(serve_name);
    setStoreCardData([time, icon_group]);
    console.log(storeCardData);
    props.setDataFromStoreCard(storeCardData);
    props.setCardDetailCss(`cardDetailOpenCss`);
  },
  [storeCardData]
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
            <div onClick={sentDetailToCardDetail(datas[(store.id-1)])}>
              <IoInformationCircleOutline size={25}/>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default StoreCard