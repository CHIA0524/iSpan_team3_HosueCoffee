import React from 'react'
import { useState, useEffect } from 'react'

// component
import StoreCardWrap from './StoreCardWrap'
import StoreCardSearch from './StoreCardSearch'
import StoreMap from './StoreMap'

// CSS
import './Style_WebMap.scss'
import './Style_MobileMap.scss'
import { MdKeyboardArrowRight } from "react-icons/md";


function StoreMapCardWrap(){
  
  // 載入指示器用
  const [ isLoading, setIsLoading ] = useState(false)

  // 儲存資料庫資料
  const [ data, setData ] = useState([])
  const [ cityData, setCityData ] = useState([])
  // console.log(data);

  // 錯誤訊息用
  const [ error, setError ] = useState('')

  // map 使用
  const [ center, setCenter ] = useState({
    lat: 24.9725821,
    lng: 121.5297745,
  });
  const [ zoom, setZoom ] = useState(18)
  const [ markerInfoCSS, setMarkerInfoCSS ] = useState('-150px')

  // 側欄使用
  const [ asideCSS, setAsideCSS ] = useState('0px')
  const [ iconRotate, setIconRotate ] = useState('rotate(0deg)')

  const filterArea = (results) => {
    let filterResults = []
    for (let i = 0; i < results.length; i++) {
      if (filterResults.indexOf(results[i].city) === -1) {
        filterResults.push(results[i].city)
      }
    }
    setCityData([...filterResults])
  }

  // 向遠端伺服器get資料
  const fetchData = async (keyword) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/store`)
      const results = await response.json()

      // console.log(results);
      
      // 載入資料後設定到狀態中
      // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
      if (Array.isArray(results)) {
        setData(results)
        filterArea(results)
      }
      
      const API_KEY = process.env.REACT_APP_GMAP_API_KEY
      const LANGUAGE = "zh-Tw"
      const REGION = "TW"
      const GOOGLE_API = "https://maps.googleapis.com/maps/api/geocode/json"

      // 檢查地址資料是否有經緯度
      for (let i = 0; i < results.length; i++) {

        if(results[i].lat === null || results[i].lng === null || results[i].lat === '' || results[i].lng === ''){

          let address = results[i].city + results[i].area + results[i].address

          let url = `${GOOGLE_API}?address=${encodeURIComponent(address)}&key=${API_KEY}&language=${LANGUAGE}&region=${encodeURIComponent(REGION)}`

          const GEOresponse = await fetch(url).catch(() =>
            Promise.reject(new Error("Error fetching data"))
          );

          const GEOresults = await GEOresponse.json().catch(() => {
            console.log("Error parsing server response")
            return Promise.reject(new Error("Error parsing server response"));
          })

          if (GEOresults.status === "OK") {
            // console.log(GEOresults)
            const updateLanLng = await fetch(
              `${process.env.REACT_APP_API_URL}/store/${results[i].id}/${GEOresults.results[0].geometry.location.lat}/${GEOresults.results[0].geometry.location.lng}`,
              {method: "PUT"})
            // console.log(await updateLanLng.json())
          }

          console.log(
            `${GEOresults.error_message}.\nServer returned status code ${GEOresults.status}`,
            true
          )
          
          
          // 載入資料後設定到狀態中
          // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
          
          const response2 = await fetch(`${process.env.REACT_APP_API_URL}/store`)
          const results2 = await response2.json()
          if (Array.isArray(results2)) {
            setData(results2)
            console.log(results2);
          }
        }
      }
    } catch (e) {
      // 作錯誤處理
      console.log(e)
      setError(e.message)
    }
  }

  // 向遠端伺服器get資料 (過濾)
  const fetchFilterData = async (keyword) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/store/` + keyword
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
      console.log(error);
    }
  }

  const spinner = (
    <div className='storeSpinner'>
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

  // 監測視窗寬度
  useEffect(()=>{ 
    window.addEventListener('resize',()=>{
      setIconRotate('rotate(0deg)')
      if (window.innerWidth <= 500) {
        setAsideCSS('-300px')
      }else{
        setAsideCSS('-375px')
      }
    });
  },[]);

  return(
    <>
      <div className="mapAndCardWrap">
        <div className='asideCardSearch' style={{left: asideCSS}}>

          {/* 搜尋框 */}
          <StoreCardSearch
            data={data}
            setData={setData}
            cityData={cityData}
            setIsLoading={setIsLoading}
            fetchFilterData={fetchFilterData}
            setMarkerInfoCSS={setMarkerInfoCSS}
          />
          
          {/* 門市卡片 */}
          {isLoading ? spinner :
            <StoreCardWrap
              data={data}
              setCenter={setCenter}
              setZoom={setZoom}
              setMarkerInfoCSS={setMarkerInfoCSS}
            />
          }
          <div
            className='storeOpenAside coffeeLightBtn'
            onClick={()=>{
              if (asideCSS === '0px'){
                // console.log(window.innerWidth);
                if (window.innerWidth <= 500) {
                  setAsideCSS('-300px')
                }else{
                  setAsideCSS('-375px')
                }
                setIconRotate('rotate(0deg)')
              }else{
                setAsideCSS('0px')
                setIconRotate('rotate(180deg)')
              }
            }}
          >
            <MdKeyboardArrowRight size={30} style={{transform: iconRotate, transition: 'all .5s'}}/>

          </div>

        </div>


        <StoreMap
          data={data}
          center={center}
          zoom={zoom}
          setCenter={setCenter}
          setZoom={setZoom}
          markerInfoCSS={markerInfoCSS}
          setMarkerInfoCSS={setMarkerInfoCSS}
          asideCSS={asideCSS}
          setAsideCSS={setAsideCSS}
          setIconRotate={setIconRotate}
        />
      </div>
    </>
  );
}

export default StoreMapCardWrap