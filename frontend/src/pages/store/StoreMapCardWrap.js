import React from 'react';
import { useState, useEffect } from 'react';

// googlemaps
import GoogleMapReact from 'google-map-react';

// component
import StoreCardWrap from './StoreCardWrap'
import StoreCardSearch from './StoreCardSearch';

// CSS
import './mapStyle.scss';
import { Tween } from 'jquery';



const AnyReactComponent = ({ text }) => <div className='mapMark'>{text}</div>;


function StoreMapCardWrap(){
  
  // 載入指示器用
  const [ isLoading, setIsLoading ] = useState(false)

  // 儲存資料庫資料
  const [ data, setData ] = useState([]);
  
  // 儲存資料庫資料的經緯度
  const [ lanlngArray, setlanlngArray ] = useState([]);
  
  // 接收子組件資料，放到cardDetail
  const [ searchText, setSearchText ] = useState([]);

  // 錯誤訊息用
  const [ error, setError ] = useState('')

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

      const API_KEY = process.env.REACT_APP_GMAP_API_KEY;
      const LANGUAGE = "zh-Tw";
      const REGION = "TW";
      const GOOGLE_API = "https://maps.googleapis.com/maps/api/geocode/json";
      
      let lanlng = [];

      for (let i = 0; i < results.length; i++) {
        let address = results[i].address;
        let url = `${GOOGLE_API}?address=${encodeURIComponent(address)}&key=&language=${LANGUAGE}&region=${encodeURIComponent(REGION)}`;
        const GEOresponse = await fetch(url).catch(() =>
          Promise.reject(new Error("Error fetching data"))
        );
        const GEOresults = await GEOresponse.json().catch(() => {
          console.log("Error parsing server response");
          return Promise.reject(new Error("Error parsing server response"));
        });
        if (GEOresults.status === "OK") {
          console.log(GEOresults);
          return GEOresults;
        }
        console.log(
          `${GEOresults.error_message}.\nServer returned status code ${GEOresults.status}`,
          true
        );
        // return Promise.reject(
        //   new Error(
        //     `${GEOresults.error_message}.\nServer returned status code ${GEOresults.status}`
        //   )
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

          {/* 搜尋框 */}
          <StoreCardSearch
            setSearchText={setSearchText}
            setIsLoading={setIsLoading}
            fetchFilterData={fetchFilterData}
          />
          
          {/* 門市卡片 */}
          {isLoading ? spinner : <StoreCardWrap data={data}/> }
          
        </div>
        
        {/* 地圖 */}
        <div className="mapWrap">
          <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          >
            {/* 地圖地點的mark */}
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