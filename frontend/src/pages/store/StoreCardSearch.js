import { valHooks } from 'jquery'
import React from 'react'
import { useState, useEffect } from 'react'

// icons
import { FiSearch } from "react-icons/fi"
import { IoOptionsOutline } from "react-icons/io5"

function StoreCardSearch(props){

  const { data, setData, cityData, setIsLoading, fetchFilterData } = props

  const [ searchText, setSearchText ] = useState('')
  const [ filterCSS, setFilterCSS ] = useState(false)
  const [ cityList, setCityList ] = useState(['高雄市','新北市'])
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
      <div className="storeFilter" style={{display: filterCSS ? 'flex' : 'none'}}>
        <div>
          <p>縣市</p>
          {cityData.map((v, i)=>{
            return(
              <li key={i}>
                <label>
                  <input
                    type="checkbox"
                    name={v}
                    value={v}
                    onChange={(e) => {
                      // const inState = cityList.includes(e.target.value)
                      // if (inState) {
                      //   const newLikeList = cityList.filter(
                      //     (v, i) => v !== e.target.value
                      //   )
                      //   setCityList(newLikeList)
                      //   console.log(cityList);
                      // } else {
                      //   const newLikeList = [...cityList, e.target.value]
                      //   setCityList(newLikeList)
                      //   console.log(cityList);
                      // }
                      let newarray =[]
                      for (let i = 0; i < data.length; i++) {
                        for (let j = 0; j < data.length; j++) {
                          if(data[j].city===cityList[i]){
                            newarray.push(data[j])
                          }
                        }
                      }
                      console.log(newarray);
                      setData(newarray)



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
          {DOW.map((v, i)=>{
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