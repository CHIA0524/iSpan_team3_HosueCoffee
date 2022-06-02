import React from 'react'
import { useState, useEffect } from 'react'

// icons
import { FiSearch } from "react-icons/fi"
import { IoOptionsOutline } from "react-icons/io5"

function StoreCardSearch(props){

  const { setIsLoading, fetchFilterData } = props
  const [ searchText, setSearchText ] = useState('')
  const [ filterCSS, setFilterCSS ] = useState(false)
  const DOW = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  return(
    <div className="storeSearch">

      {/*篩選清單開關*/}
      <div onClick={(e)=>{
        if(filterCSS){
          setFilterCSS(false)
        }else{
          setFilterCSS(true)
        }
      }}>
        <IoOptionsOutline size={25}/>
      </div>

      {/*篩選清單*/}
      <div className="storeFilter" style={{display: 'flex'}}>
        <div>
          <p>營業時間</p>
          {DOW.map((v, i)=>{
            return(
              <li key={i}>
                <label>
                  <input type="checkbox"></input>
                  {v}
                </label>
              </li>
            )
          })}
        </div>
        <div>
          <p>服務項目</p>
        </div>

      </div>

      {/*查詢框*/}
      <input
        className="storeSearchInput"
        name="search-for"
        placeholder="搜尋門市名稱或地址"
        onChange={(e)=>{
          setSearchText(e.target.value)
          setIsLoading(true)
          fetchFilterData(e.target.value)
          props.setMarkerInfoCSS('-150px')
        }}
      >
      </input>

      {/*搜尋按鈕*/}
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