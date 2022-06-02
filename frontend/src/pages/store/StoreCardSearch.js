import { valHooks } from 'jquery'
import React from 'react'
import { useState, useEffect } from 'react'

// icons
import { FiSearch } from "react-icons/fi"
import { IoOptionsOutline } from "react-icons/io5"

function StoreCardSearch(props){

  const { data, setData, filterData, setFilterData, cityData, setIsLoading, fetchFilterData, setMarkerInfoCSS } = props

  const [ searchText, setSearchText ] = useState('')
  const [ filterCSS, setFilterCSS ] = useState(false)
  const [ cityList, setCityList ] = useState([])
  const DOW = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

  useEffect(()=>{
    console.log(cityList);
    if (cityList.length === 0) {
      setFilterData(data)
    } else {
      setFilterData(
        data.filter(data =>
          cityList.some(city => [data.city].includes(city))
        )
      )
      console.log(data.filter(data =>
        cityList.some(city => [data.city].includes(city))
      ));
      console.log(data.filter(data =>
        cityList.some(city => [data.city].includes(city))
      ));
    }
  }, [cityList, data, setFilterData])

  return(
    <div className="storeSearch">

      {/*篩選清單開關*/}
      <div onClick={(e)=>{
        if (filterCSS) {
          setFilterCSS(false)
        } else {
          setFilterCSS(true)
        }
      }}>
        <IoOptionsOutline size={25}/>
      </div>

      {/*篩選清單*/}
      <div className="storeFilter" style={{display: filterCSS ? 'flex' : 'none'}}>
        <div>
          <p>縣市</p>
          {cityData.map((v, i) => {
            return(
              <li key={i}>
                <label>
                  <input
                    type="checkbox"
                    name={v}
                    value={v}
                    checked={cityList.includes(v)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCityList([...cityList, e.target.value])
                      } else {
                        setCityList(cityList.filter(id => id !== e.target.value))
                      }
                    }}
                  />
                  {v}
                </label>
              </li>
            )
          })}
        </div>
        <div>
          <p>營業時間</p>
          {DOW.map((v, i) => {
            return(
              <li key={i}>
                <label>
                  <input type="checkbox"/>
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
        onClick={() => {
          setFilterCSS(false)
        }}
        onChange={(e) => {
          setSearchText(e.target.value)
          setIsLoading(true)
          setMarkerInfoCSS('-150px')
          fetchFilterData(e.target.value)
        }}
      >
      </input>

      {/*搜尋按鈕*/}
      <div onClick={(e) => {
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