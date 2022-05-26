import React from 'react'
import { useState, useEffect } from 'react'

// icons
import { FiSearch } from "react-icons/fi"

function StoreCardSearch(props){

  const { setIsLoading, fetchFilterData } = props
  const [ searchText, setSearchText ] = useState('')

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

      <div onClick={(e)=>{
        console.log(searchText)
        // setSearchText('')
        setIsLoading(true)
        fetchFilterData(searchText)
      }}>
        <FiSearch size={20}/>
      </div>
    </div>
  )
}

export default StoreCardSearch