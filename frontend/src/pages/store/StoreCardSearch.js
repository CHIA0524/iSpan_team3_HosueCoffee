import { valHooks } from 'jquery'
import React from 'react'
import { useState, useEffect } from 'react'

// icons
import { FiSearch } from "react-icons/fi"
import { IoOptionsOutline } from "react-icons/io5"

function StoreCardSearch(props){

  const { data, setFilterData, cityData, setIsLoading, fetchFilterData, setMarkerInfoCSS, setCardDetailCss } = props

  const [ searchText, setSearchText ] = useState('')
  const [ filterCSS, setFilterCSS ] = useState(false)
  const [ filterInfoCSS, setFilterInfoCSS ] = useState(false)

  // checkBox List
  const [ cityList, setCityList ] = useState([])
  const [ dowList, setDowList ] = useState([])

  // checkBox Option
  const dow = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

  // 控管 cityList 進行 filter()
  useEffect(()=>{
    if (cityList.length === 0 && dowList.length === 0) {
      setFilterData(data)
      setFilterInfoCSS(false)
    } else {
      setFilterData(
        data.filter(oneData =>
          cityList.some(city => [oneData.city].includes(city)) || 
          dowList.some(dow => [oneData.times].includes(dow+':營業'))
        )
      )
      setFilterInfoCSS(true)
    }
  }, [cityList, data, dowList, setFilterData])



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
              <li key={i} style={{position: 'relative'}}>
                <input
                  type="checkbox"
                  name={v}
                  id={v}
                  value={v}
                  checked={cityList.includes(v)}
                  onChange={(e) => {
                    setCardDetailCss('')
                    if (e.target.checked) {
                      setCityList([...cityList, e.target.value])
                    } else {
                      setCityList(cityList.filter(id => id !== e.target.value))
                    }
                  }}
                />
                <label for={v}>
                  {v}
                </label>
              </li>
            )
          })}
        </div>
        <div>
          <p>營業時間</p>
          {dow.map((v, i) => {
            return(
              <li key={i} style={{position: 'relative'}}>
                <input
                  type="checkbox"
                  name={v}
                  id={v}
                  value={v}
                  checked={dowList.includes(v)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDowList([...dowList, e.target.value])
                    } else {
                      setDowList(dowList.filter(id => id !== e.target.value))
                    }
                    console.log(dowList);
                  }}
                />
                <label for={v}>
                  {v}
                </label>
              </li>
            )
          })}
        </div>
        <div>
          <p>服務項目</p>
        </div>
        <div
          className="storeFilterClear"
          onClick={()=>{
            setCityList([])
            setDowList([])
          }}
        >
          <p>清除</p>
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