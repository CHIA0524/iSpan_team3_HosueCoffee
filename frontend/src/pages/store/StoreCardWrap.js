import React from 'react';
import { useState, useEffect } from 'react';

import StoreCard from "./StoreCard"
import StoreCardDetail from './StoreCardDetail';


function StoreCardWrap(props){

  const { data } = props;
  const [ index, setIndex ] = useState(2);
  const dataDetail = data[index];

  // 開啟詳細選單(透過StoreCard傳送className)
  const [cardDetailCss, setCardDetailCss] = useState();

  return(
    <div className="cardGroupWrap">

      <StoreCardDetail
        dataDetail={dataDetail}
        cardDetailCss={cardDetailCss}
        setCardDetailCss={setCardDetailCss}
      />

      <StoreCard
        data={data}
        setIndex={setIndex}
        setCardDetailCss={setCardDetailCss}
      />
      
    </div>
  )
}

export default StoreCardWrap