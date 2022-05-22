import React from 'react';
import { useState, useEffect } from 'react';

// icons
import { FiSearch } from "react-icons/fi";

function StoreCardSearch(props){

  const { setSearchText, setIsLoading, fetchFilterData } = props;


  return(
    <div className="storeSearch">
      <input
        className="store-search-input"
        name="search-for"
        placeholder="搜尋門市名稱或地址"
        onChange={(e)=>{
          setSearchText(e.target.value)
          setIsLoading(true)
          fetchFilterData(e.target.value)
        }}
      >
      </input>

      <div onClick={()=>{
        setIsLoading(true)
        fetchFilterData(setSearchText)
      }}>
        <FiSearch />
      </div>
    </div>
  )
}

export default StoreCardSearch