import React from 'react';
import { useState } from 'react';

// CSS
import './mapStyle.scss';

// icons
import { IoInformationCircleOutline } from "react-icons/io5";

// img
import test from './img/01.jpg'

/*---------------- import結束 ----------------*/



function StoreCard(props){

  const [storeCardData, setStoreCardData] = useState({});
  let updatedValue = {};
    updatedValue = {
      "id":107001,
      "name":"張佳蓉",
      "birth":990101
    };
    setStoreCardData(data => ({
      ...data,
      ...updatedValue
    }));
    
  return(
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
          props.setDataFromStoreCard(storeCardData);
          props.setCardDetailCss(`cardDetailOpenCss`);
        }}
        >
          <IoInformationCircleOutline size={25}/>
        </div>
      </div>
    </>
  );
}

export default StoreCard