import React from 'react';
import { useState, useEffect } from 'react';

// googlemaps
// import GoogleMapReact from 'google-map-react';

// component
import StoreCardWrap from './StoreCardWrap'

// CSS
import './mapStyle.scss';

// icons
import { FiSearch } from "react-icons/fi";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


function StoreMapCardWrap(){
  


  // 接收子組件資料，放到cardDetail
  const [data, setData] = useState([]);
  
  // 搜尋框內容 state
  const [searchText, setSearchText] = useState('');

  const defaultProps = {
    center: {
      lat: 25.04,
      lng: 121.50
    },
    zoom: 16
  };

  const fetchData = async (keyword) => {
    //向遠端伺服器get資料
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/store/map`)

      const results = await response.json()
      // 載入資料後設定到狀態中
      // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
      if (Array.isArray(results)) {
        setData(results)
      }
    } catch (e) {
      // 作錯誤處理
      console.log(e)
      setData(e.message)
    }
  }

  const fetchFilterData = async (keyword) => {
    //向遠端伺服器get資料
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/store/map/` + keyword
      )

      const results = await response.json()

      // 載入資料後設定到狀態中
      // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
      if (Array.isArray(results)) {
        setData(results)
      }
    } catch (e) {
      // 作錯誤處理
      console.log(e)
      setData(e.message)
    }
  }
  useEffect(() => {

    // 向伺服器要求get資料
    fetchData()
  }, [])

  
  return(
    <>
      <div className="mapAndCardWrap">
        <div>
          <div className="storeSearch">
            <input
              className="store-search-input"
              name="search-for"
              placeholder="搜尋門市名稱或地址"
              onChange={(e)=>{
                fetchFilterData(e.target.value)
              }}
            >
            </input>

            <div onClick={()=>{
              fetchFilterData(searchText)
            }}>
              <FiSearch />
            </div>
          </div>
          <StoreCardWrap data={data}/>
        </div>
        <div className="mapWrap">
          {/* <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
          </GoogleMapReact> */}
        </div>
      </div>
    </>
  );
}

export default StoreMapCardWrap