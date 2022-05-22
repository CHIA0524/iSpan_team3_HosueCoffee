import React from 'react';
import { useState, useEffect } from 'react';

// googlemaps
import GoogleMapReact from 'google-map-react';

// component
import StoreCardWrap from './StoreCardWrap'
import StoreCardSearch from './StoreCardSearch';

// CSS
import './mapStyle.scss';



const AnyReactComponent = ({ text }) => <div className='mapMaker'>{text}</div>;


function StoreMapCardWrap(){
  
  // 載入指示器用
  const [isLoading, setIsLoading] = useState(false)

  // 接收子組件資料，放到cardDetail
  const [data, setData] = useState([]);
  
  // 接收子組件資料，放到cardDetail
  const [searchText, setSearchText] = useState([]);

  // 錯誤訊息用
  const [error, setError] = useState('')

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
      setError(e.message)
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
      setError(e.message)
    }
  }

  const spinner = (
    <div className='mapSpinner'>
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  useEffect(() => {
    setIsLoading(true)
    // 向伺服器要求get資料
    fetchData()
  }, [])

  // 自動於x秒後關掉指示動畫
  useEffect(() => {
    // 如果是true(有呈現的情況)
    if (isLoading) {
      // 關起載入指示動畫(延後1.5秒關閉)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }, [isLoading])
  
  return(
    <>
      <div className="mapAndCardWrap">
        <div>

          <StoreCardSearch
            setSearchText={setSearchText}
            setIsLoading={setIsLoading}
            fetchFilterData={fetchFilterData}
          />
          
          {isLoading ? spinner : <StoreCardWrap data={data}/> }
          
        </div>

        <div className="mapWrap">
          <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          >
          <AnyReactComponent
            lat={25.04}
            lng={121.50}
            text=""
          />
          </GoogleMapReact>
        </div>
        
      </div>
    </>
  );
}

export default StoreMapCardWrap