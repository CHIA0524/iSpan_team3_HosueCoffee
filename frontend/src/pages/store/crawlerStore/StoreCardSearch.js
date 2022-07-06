import React from 'react'
import { useState, useEffect } from 'react'

// icons
import { FiSearch } from "react-icons/fi"
import { IoOptionsOutline } from "react-icons/io5"

// component
import StoreCardSearchFilter from'./StoreCardSearchFilter'

function StoreCardSearch(props){

  /*---------------- props useState ----------------*/
  const { data, setFilterData, cityData, serveData, setIsLoading, fetchFilterData, setMarkerInfoCSS, setCardDetailCss, filterCSS, setFilterCSS } = props

  const [ searchText, setSearchText ] = useState('')

  // checkBox Option
  const dow = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

  // checkBox List
  const [ cityList, setCityList ] = useState([])
  const [ dowList, setDowList ] = useState([])
  const [ serveList, setServeList ] = useState([])

  /*---------------- useEffect ----------------*/

  // useEffect(()=>{
  //   if (cityData.length > 0) {
    //   setTimeout(() => {
        // setCityList(cityData)
        // setServeList(serveData)
    //   }, 100);
    // }
  // }, [cityData, serveData])

  // 控管 list 進行 filter()
  useEffect(()=>{
    if (cityList.length === 0 && dowList.length === 0 && serveList.length === 0) {
      setFilterData(data)
    } else {
      setFilterData(
        data.filter(function(oneData){
          if (cityList.length > 0) {
            return(
              cityList.some(city => oneData.city.includes(city)) &&
              dowList.every(dow => oneData.times.includes(`${dow}:營業`)) &&
              serveList.every(serve => oneData.serve_name.includes(serve))
            )
          } else {
            return(
              dowList.every(dow => oneData.times.includes(`${dow}:營業`)) &&
              serveList.every(serve => oneData.serve_name.includes(serve))
            )
          }
        }
        )
      )
    }
  }, [cityList, data, dowList, serveList, setFilterData])



  return(
    <div className="storeSearch">

      {/*篩選清單開關*/}
      <div
        style={{position: 'relative'}}
        onClick={(e)=>{
          if (filterCSS) {
            setFilterCSS(false)
          } else {
            setFilterCSS(true)
          }
        }}
      >
        <IoOptionsOutline size={25}/>
        <div
          className={'storeFilterHint'}
          style={{background:
            cityList.length === 0 &&
            dowList.length === 0 &&
            serveList.length === 0
            ? 'transparent' : '#DDB44A'}}
        />
      </div>

      {/*篩選清單*/}
      <div className="storeFilter" style={{display: filterCSS ? 'flex' : 'none'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div
            className="storeFilterBtn"
            onClick={()=>{
              setCityList([])
              setDowList([])
              setServeList([])
            }}
          >
            <p>清除</p>
          </div>
          <div
            className="storeFilterBtn"
            onClick={()=>{
              setFilterCSS(false)
            }}
          >
            <p>確認</p>
          </div>
        </div>
        <div style={{height: '40vh', overflowY: 'scroll'}}>
          <StoreCardSearchFilter
            setCardDetailCss={setCardDetailCss}
            title={'縣市'}
            data={cityData}
            list={cityList}
            setList={setCityList}
          />
          <StoreCardSearchFilter
            setCardDetailCss={setCardDetailCss}
            title={'營業時間'}
            data={dow}
            list={dowList}
            setList={setDowList}
          />
          <StoreCardSearchFilter
            setCardDetailCss={setCardDetailCss}
            title={'服務項目'}
            data={serveData}
            list={serveList}
            setList={setServeList}
          />
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

          setCityList([])
          setDowList([])
          setServeList([])
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